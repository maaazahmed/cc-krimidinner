import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { AiFillClockCircle } from "react-icons/ai";
import clsx from "clsx";
import {
  addPlayersWithGameCode,
  getGameWithCode,
  updateGameWithCode,
} from "@/firebase/games";
import { useErrorStore } from "@/stores/error-store";
import { useGameCode } from "@/hooks/game-code/use-game-code";
import { Button } from "@/components/button";
import { AppRoutes } from "@/constants/app-routes";
import * as fbq from "@/meta";
import {
  Formik,
  Field,
  ErrorMessage,
  Form,
  useField,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";
import { timeNowInSec } from "@/utils";
import { setLogDoc } from "@/firebase/logs";

interface FormValues {
  player1: Player;
  player2: Player;
  player3: Player;
  player4: Player;
  player5: Player;
  player6: Player;
}

interface Player {
  name: string;
  role?: string;
}

export const AddPlayers: React.FC = () => {
  const { setError } = useErrorStore((state) => state.actions);
  const { gameCode } = useGameCode();
  const navigate = useNavigate();
  const initialValues: FormValues = {
    player1: { name: "", role: "" },
    player2: { name: "", role: "" },
    player3: { name: "", role: "" },
    player4: { name: "", role: "" },
    player5: { name: "", role: "" },
    player6: { name: "", role: "" },
  };

  const validationSchema = Yup.object().shape({
    player1: Yup.object().shape({
      name: Yup.string().required("Player name is required"),
      role: Yup.string(),
    }),
    player2: Yup.object().shape({
      name: Yup.string().required("Player name is required"),
      role: Yup.string(),
    }),
    player3: Yup.object().shape({
      name: Yup.string().required("Player name is required"),
      role: Yup.string(),
    }),
    player4: Yup.object().shape({
      name: Yup.string().required("Player name is required"),
      role: Yup.string(),
    }),
    player5: Yup.object().shape({
      name: Yup.string(),
      role: Yup.string(),
    }),
    player6: Yup.object().shape({
      name: Yup.string(),
      role: Yup.string(),
    }),
  });

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    if (!gameCode) return;

    try {
      const players: Player[] = [
        values.player1,
        values.player2,
        values.player3,
        values.player4,
        values.player5,
        values.player6,
      ].filter((player) => player.name !== ""); // Filter out players with empty names

      if (players.length > 0) {
        await addPlayersWithGameCode(gameCode, players);
        const timestamp = timeNowInSec();
        await setLogDoc(gameCode, {
          type: "add_players",
          timestamp,
        });
      }
      resetForm();
      navigate(AppRoutes.assign_roles);
    } catch {
      // Handle error
    }
  };

  // Emit a page view event to Meta Pixel
  useEffect(() => {
    fbq.pageView();
  }, []);

  return (
    <div className="p-2 flex flex-col items-center">
      <h1 className="bg-background text-2xl w-full  text-white py-8 text-center rounded shadow-lg">
        VORBEREITUNGEN
      </h1>

      <div className="mt-20 px-4 w-full">
        <div className="space-y-8 w-full flex flex-col align-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={handleSubmit}>
            {({
              isValid,
              handleChange,
              handleBlur,
              errors,
              touched,
              isSubmitting,
            }) => (
              <Form>
                <InputGroup
                  placeholder="Name"
                  name="player1.name"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.player1?.name}
                  touched={touched.player1?.name}
                />

                <InputGroup
                  placeholder="Name"
                  name="player2.name"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.player2?.name}
                  touched={touched.player2?.name}
                />

                <InputGroup
                  placeholder="Name"
                  name="player3.name"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.player3?.name}
                  touched={touched.player3?.name}
                />

                <InputGroup
                  placeholder="Name"
                  name="player4.name"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.player4?.name}
                  touched={touched.player4?.name}
                />

                <InputGroup
                  placeholder="Name"
                  fieldLabel="Optional"
                  name="player5.name"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.player5?.name}
                  touched={touched.player5?.name}
                />

                <InputGroup
                  placeholder="Name"
                  fieldLabel="Optional"
                  name="player6.name"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.player6?.name}
                  touched={touched.player6?.name}
                />

                <div className="flex w-full items-center justify-center">
                  {" "}
                  {/* Added justify-center */}
                  <div className="text-center flex border-red-50 w-1/2 justify-between mt-8">
                    <Button
                      onClick={() => {
                        navigate(AppRoutes.setup);
                      }}
                      variant="text"
                      className="disabled:cursor-not-allowed"
                      type="button">
                      ZUrück
                    </Button>
                    <Button
                      variant="text"
                      className="disabled:cursor-not-allowed"
                      disabled={!isValid || isSubmitting}
                      type="submit">
                      WEITER
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rootClassName?: string;
  fieldLabel?: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: any;
  errors: string | undefined;
  touched: boolean | undefined;
}

const InputGroup: React.FC<InputGroupProps> = ({
  rootClassName,
  fieldLabel,
  id,
  className,
  name,
  handleChange,
  handleBlur,
  errors,
  touched,
  ...props
}) => {
  const hasError = touched && errors;

  return (
    <div className={clsx(rootClassName)}>
      <Field
        id={id}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={clsx(
          "block w-full bg-background mt-5 text-onSurface p-4 rounded-t-md shadow-md text-base border-2 focus:outline-none",
          {
            "border-onSurface-mediumEmphasis": !hasError,
            "border-primary": hasError,
            "placeholder-onSurface-mediumEmphasis": !hasError,
            "placeholder-primary": hasError,
          },
          className
        )}
        {...props}
      />
      {fieldLabel && (
        <label
          htmlFor={id}
          className="text-onSurface-mediumEmphasis block text-xs mt-1.5">
          {fieldLabel}
        </label>
      )}
      {hasError && <div className="text-primary text-xs mt-1.5">{errors}</div>}
    </div>
  );
};
