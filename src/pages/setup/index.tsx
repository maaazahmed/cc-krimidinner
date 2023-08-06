import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { AiFillClockCircle } from "react-icons/ai";
import clsx from "clsx";
import { updateGameWithCode } from "@/firebase/games";
import { useErrorStore } from "@/stores/error-store";
import { useGameCode } from "@/hooks/game-code/use-game-code";
import { Button } from "@/components/button";
import { AppRoutes } from "@/constants/app-routes";
import * as fbq from "@/meta";

export const Setup: React.FC = () => {
  const { setError } = useErrorStore((state) => state.actions);
  const { gameCode } = useGameCode();
  const initial_start_time = moment().add(15, "minutes").unix();
  const [preparationData, setPreparationData] = useState({
    host: "",
    start_time: initial_start_time,
    address: "",
  });
  const navigate = useNavigate();

  const areAllFieldsFilled =
    preparationData.host.trim().length > 0 &&
    preparationData.address.trim().length > 0 &&
    preparationData.start_time > 0;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(AppRoutes.add_players); // ==>> Note: FOR TESTING
    if (!areAllFieldsFilled) return;
    if (!gameCode) return;

    const button = e.currentTarget;
    button.disabled = true;

    try {
      if (preparationData.start_time < initial_start_time) {
        setError({
          message:
            "Das Dinner muss mindestens 15 Minuten in der Zukunft stattfinden.",
          icon: <AiFillClockCircle className="fill-red-500 w-10 h-10" />,
        });
        button.disabled = false;
        return;
      }

      await updateGameWithCode(gameCode, {
        host: preparationData.host.trim(),
        start_time: preparationData.start_time,
        address: preparationData.address.trim(),
      });

      button.disabled = false;

      navigate(AppRoutes.add_players);
    } catch (err) {
      console.log(err);
      button.disabled = false;
    }
  };

  // Emit a page view event to Meta Pixel
  useEffect(() => {
    fbq.pageView();
  }, []);

  return (
    <div className="p-2">
      <h1 className="bg-background text-2xl text-white py-8 text-center rounded shadow-lg">
        VORBEREITUNGEN
      </h1>

      <div className="mt-24 px-4">
        <div className="space-y-8">
          <InputGroup
            type="text"
            placeholder="Name"
            fieldLabel="Gastgeber"
            value={preparationData.host}
            onChange={(e) => {
              setPreparationData({ ...preparationData, host: e.target.value });
            }}
          />
          <InputGroup
            type="datetime-local"
            placeholder="Datum+Uhrzeit"
            fieldLabel="Wann findet das Dinner statt?"
            min={moment().format(moment.HTML5_FMT.DATETIME_LOCAL)}
            value={moment
              .unix(preparationData.start_time)
              .format(moment.HTML5_FMT.DATETIME_LOCAL)}
            onChange={(e) => {
              setPreparationData({
                ...preparationData,
                start_time: moment(
                  e.target.value,
                  moment.HTML5_FMT.DATETIME_LOCAL
                ).unix(),
              });
            }}
          />
          <InputGroup
            type="text"
            placeholder="Location"
            fieldLabel="Wo findet das Dinner statt?"
            value={preparationData.address}
            onChange={(e) => {
              setPreparationData({
                ...preparationData,
                address: e.target.value,
              });
            }}
          />
        </div>

        <div className="text-center mt-8">
          <Button
            variant="text"
            disabled={!areAllFieldsFilled}
            onClick={handleSubmit}
          >
            WEITER
          </Button>
        </div>
      </div>
    </div>
  );
};

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rootClassName?: string;
  fieldLabel: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  rootClassName,
  fieldLabel,
  id,
  className,
  ...props
}) => {
  return (
    <div className={clsx(rootClassName)}>
      <input
        id={id}
        className={clsx(
          "block w-full bg-background text-onSurface placeholder:text-onSurface-mediumEmphasis p-4 rounded-t-md shadow-md text-base focus:outline-none focus:border-b-2 focus:border-b-onSurface-mediumEmphasis",
          className
        )}
        {...props}
      />
      {fieldLabel && (
        <label
          htmlFor={id}
          className="text-onSurface-mediumEmphasis block text-xs mt-1.5"
        >
          {fieldLabel}
        </label>
      )}
    </div>
  );
};
