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
    width:255,
    height:250,
    
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

const ExtraOptionsCard = ({ img, title, text }) => {
  const classes = useStyles();

  return (
    <Card sx={{ backgroundColor: "#292929" }} className={classes.card}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "500",
            color: "rgba(255, 255, 255, 0.87)",
            letterSpacing: 0.15,
            marginTop: 2,
          }}
          color="text.secondary"
          gutterBottom
        >
          {title}{" "}
        </Typography>

        <div className={"h-[130px] flex items-center"}>
          <img  src={img} alt="REZEPTE" />
        </div>

        <Typography
          sx={{
            fontSize: 12,
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#fff",
            marginTop: 2,
          }}
          color="text.secondary"
          gutterBottom
        >
          {text}
        </Typography>
      </CardContent>

      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
    </Card>
  );
};

export const ExtraOptions: React.FC = () => {
  const { setError } = useErrorStore((state) => state.actions);
  const { gameCode } = useGameCode();
  const navigate = useNavigate();

  // Emit a page view event to Meta Pixel
  useEffect(() => {
    fbq.pageView();
  }, []);

  return (
    <div className="p-2 flex flex-col h-full items-center">
      <h1 className="bg-background  text-2xl  mx-3 px-5 text-white py-8 text-center rounded shadow-lg">
        Alles für dein perfektes Krimi Dinner{" "}
      </h1>
      <div className="mt-20 px-5 w-full bg-red-300s flex-1 flex mx-3  flex-col justify-center items-center">
        <div className={"flex-1"}>
          <ExtraOptionsCard
            img={REZEPTE}
            title={"Rezepte"}
            text={"Mörderisch-gute Rezeptvorschläge"}
          />
          <div className={"mt-[50px]"} >

          <ExtraOptionsCard
            img={SHOPIFY}
            title={"Musik"}
            text={"Die Perfekte Playlist für dein Dinner"}
            />
            </div>
        </div>
        {/*  */}
        <div className="flex w-full items-center justify-center">
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
                navigate(AppRoutes.start_game);
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
