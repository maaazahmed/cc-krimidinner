import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import clsx from "clsx";
import { RiErrorWarningFill } from "react-icons/ri";
import { setLogDoc } from "@/firebase/logs";
import { isGameCodeValid, saveGameCodeToLocalStorage } from "@/lib/game-code";
import { getCookieConsentFromLocalStorage } from "@/lib/cookie-consent";
import { useErrorStore } from "@/stores/error-store";
import { useGetLogs } from "@/hooks/logs/use-get-logs";
import { timeNowInSec } from "@/utils";
import { GAME_CODE_LENGTH } from "@/constants/game-code";
import { AppRoutes } from "@/constants/app-routes";
import * as fbq from "@/meta";

export const Home: React.FC = () => {
  const { setError } = useErrorStore((state) => state.actions);
  const [gameCode, setGameCode] = useState("");
  const [isGameCodeCorrect, setIsGameCodeCorrect] = useState<boolean | null>(
    null
  );
  const { logs, loading } = useGetLogs(gameCode);
  const navigate = useNavigate();

  // Emit a page view event to Meta Pixel
  useEffect(() => {
    fbq.pageView();
  }, []);

  const handleGameCodeInputComplete = useCallback(
    async (gameCode: string) => {
      if (loading !== "loaded") return;

      setIsGameCodeCorrect(null);
      try {
        const isValid = await isGameCodeValid(gameCode);
        if (!isValid) {
          setIsGameCodeCorrect(false);
          setError({
            message: "Falscher Code, bitte überprüfe deine Box",
            icon: <RiErrorWarningFill className="text-red-500 h-10 w-10" />,
          });
          return;
        }

        const isSaved = saveGameCodeToLocalStorage(gameCode);
        if (!isSaved) return;

        setIsGameCodeCorrect(true);

        const timestamp = timeNowInSec();

        if (!logs?.first_code_activated) {
          await setLogDoc(gameCode, {
            type: "first_code_activated",
            timestamp,
          });
        }

        await setLogDoc(gameCode, {
          type: "current_code_activated",
          timestamp,
        });

        await setLogDoc(gameCode, {
          type: "code_activations",
          count: logs?.code_activations?.count
            ? logs.code_activations.count + 1
            : 1,
        });

        const cookieConsent = await getCookieConsentFromLocalStorage();

        if (cookieConsent) {
          setLogDoc(gameCode, {
            type: "cookie_consent",
            consent_given: cookieConsent.consent_given,
            timestamp: cookieConsent.timestamp,
          });
        }

        navigate(AppRoutes.setup);
      } catch {
        // do nothing
      }
    },
    [navigate, logs, loading, setError]
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (gameCode.length === GAME_CODE_LENGTH) {
      timeout = setTimeout(() => {
        handleGameCodeInputComplete(gameCode);
      }, 1000);
    } else {
      setIsGameCodeCorrect(null);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [gameCode, handleGameCodeInputComplete]);

  return (
    <div className="h-full flex flex-col">
      <div
        className={`flex-grow p-2 relative bg-center bg-cover bg-no-repeat bg-[url("/images/home-cover.png")]`}
      >
        <div className="relative top-[53vh] text-center rounded-lg py-6 px-4 bg-black/60">
          <h1 className="mb-5 text-onSurface-highEmphasis font-medium text-xl leading-6 tracking-[0.5px]">
            GIB DEINEN PERSÖNLICHEN SPIELCODE EIN, UM ZU STARTEN
          </h1>
          <p className="text-xxs font-medium leading-4 text-onSurface-mediumEmphasis uppercase tracking-[1.5px]">
            Den Code findest du auf der Zugabe "Alles für dein perfektes Krimi
            Dinner"
          </p>

          <div className="mt-5 flex justify-center">
            <OtpInput
              value={gameCode}
              onChange={setGameCode}
              numInputs={GAME_CODE_LENGTH}
              containerStyle={{
                columnGap: "8px",
              }}
              renderInput={(props) => (
                <input
                  {...props}
                  className={clsx(
                    "shadow-md !w-10 !sm:w-12 !h-10 !sm:h-12 border-none rounded focus:outline-none uppercase",
                    isGameCodeCorrect === false
                      ? "bg-red-500 text-white animate-shake"
                      : "bg-elevationOverlay-24 text-onSurface-highEmphasis"
                  )}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="text-center text-onSurface-disabled bg-[#231D1D] py-2">
        <a
          href={"https://crime-cases.de/impressum"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          className="decoration-none text-onSurface-disabled text-xs font-medium leading-4 uppercase tracking-[1.5px]"
        >
          IMPRESSUM
        </a>
      </div>
    </div>
  );
};
