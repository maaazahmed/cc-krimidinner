import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useErrorStore } from "@/stores/error-store";
import { useGameCode } from "@/hooks/game-code/use-game-code";
import { Button } from "@/components/button";
import { AppRoutes } from "@/constants/app-routes";
import * as fbq from "@/meta";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CharacterImage from "@/assets/CharacterImage-small";
// import CharacterImage from "../../assets/Characte"
import REZEPTE from "@/assets/rezepte.png";
import SHOPIFY from "@/assets/spotify.png";
import COPY_ICON from "../../assets/copy_24px.svg";
const useStyles = makeStyles((theme) => ({
  card: {
    padding: 0,
    // width: 255,
    height: 311,
    display: "flex",
    "justify-content": "center",
    "align-items": "center",

    "border-radius": "4px",
    border: "0px solid #FFF",
    "& .MuiCardContent-root": {
      // backgroundColor: "red",
      // height: 200,
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      "flex-direction": "column",

      "& .MuiBox-root": {
        // backgroundColor: "red",
        width: "100%",
        display: "flex",
        "justify-content": "flex-end",
        "align-items": "center",
      },
    },

    // "& .MuiOutlinedInput-root": {
    //   backgroundColor: "black",
    //   "&:hover .MuiOutlinedInput-notchedOutline": {
    //     borderColor: "transparent",
    //   },
    //   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //     borderColor: "transparent",
    //   },
    // },

    // "& .MuiInputBase-input": {
    //   color: "white",
    // },
    // "& .MuiInputLabel-root": {
    //   color: "white",
    // },
    // "& .MuiList-root .MuiMenuItem-root": {
    //   backgroundColor: "#292929",
    //   color: "white",
    // },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AlertBox = ({ img, title, text }) => {
  const classes = useStyles();

  return (
    <Card sx={{ backgroundColor: "#292929" }} className={classes.card}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#fff",
            padding: "0 20px",
            textAlign: "center",
          }}
          color="text.secondary"
          gutterBottom
        >
          Starte jetzt das Spiel, oder scan zum einen anderen Zeitpunkt wieder
          den QR-Code um auf diese Seite zurück zukommen.
        </Typography>
      </CardContent>
    </Card>
  );
};

export const StartGame: React.FC = () => {
  const { setError } = useErrorStore((state) => state.actions);
  const { gameCode } = useGameCode();
  const navigate = useNavigate();

  useEffect(() => {
    fbq.pageView();
  }, []);

  return (
    <div className="p-2 flex flex-col items-center">
      <h1 className="bg-background  text-2xl  mx-3 px-5 text-white py-8 text-center rounded shadow-lg">
        Alles für dein perfektes Krimi Dinner{" "}
      </h1>
      <div className="mt-20 pt-10 px-5 w-full h-[65vh] flex flex-col mx-3 bg-white/0 justify-center items-center relative ">
        <div className={"flex-1"}>
          <AlertBox
            img={REZEPTE}
            title={"Rezepte"}
            text={"Mörderisch-gute Rezeptvorschläge"}
          />
        </div>
        <div className="flex w-full items-center justify-center ">
          <div className="text-center flex border-red-50 w-1/2  justify-between mt-8">
            <Button
              onClick={() => {
                navigate(AppRoutes.setup);
              }}
              variant="text"
              className="disabled:cursor-not-allowed uppercase"
              type="button"
            >
              ZUrück
            </Button>
            <Button
             onClick={() => {
              navigate(AppRoutes.round_1);
            }}
              variant="text"
              className="disabled:cursor-not-allowed"
              // disabled={!isValid || isSubmitting}
              type="submit"
            >
              WEITER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
