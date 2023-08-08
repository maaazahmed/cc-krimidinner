import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/constants/app-routes";
import * as fbq from "@/meta";

export const InviteScreen: React.FC = () => {
  const navigate = useNavigate();

  // Emit a page view event to Meta Pixel
  useEffect(() => {
    fbq.pageView();
  }, []);


  useEffect(() => {
    setTimeout(()=>{
        navigate(AppRoutes.family_dinner)
      },2000)
  }, []);


  
  return (
    <div className="h-full flex flex-col">
      <div
        className={`flex-grow p-2 relative bg-center bg-cover bg-no-repeat bg-[url("@/assets/landing-page.png")]`}
      >
        {/* <div className="relative top-[53vh] text-center rounded-lg py-6 px-4 bg-black/60">
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
        </div> */}
      </div>

      {/* <div className="text-center text-onSurface-disabled bg-[#231D1D] py-2">
        <a
          href={"https://crime-cases.de/impressum"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          className="decoration-none text-onSurface-disabled text-xs font-medium leading-4 uppercase tracking-[1.5px]"
        >
          IMPRESSUM
        </a>
      </div> */}
    </div>
  );
};
