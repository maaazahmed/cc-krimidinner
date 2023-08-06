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

import COPY_ICON from "../../assets/copy_24px.svg";
const useStyles = makeStyles((theme) => ({
  card: {
    padding: 0,
    marginBottom: 50,
    "border-radius": "4px",
    border: "1px solid #FFF",

    "& .MuiCardContent-root": {
      // backgroundColor: "red",
      // height: 200,
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      "flex-direction": "column",
      position:"relative",

      "& .MuiBox-root": {
        position:"absolute",
        top:10,
        right:10,
        width: "100%",
        display: "flex",
        "justify-content": "flex-end",
        "align-items": "center",
      },
    },

    "& .css-eueg6h-MuiCardContent-root:last-child": {
      "padding-bottom": 10,
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

const InvitesCards = () => {
  const classes = useStyles();

  return (
    <Card sx={{ backgroundColor: "#292929" }} className={classes.card}>
      <CardContent sx={{ "padding-bottom": 0 }}>
        <Box >
          <img src={COPY_ICON} alt="COPY_ICON" />
        </Box>
        <CharacterImage />

        <Typography
          sx={{
            fontSize: 12,
            fontFamily: "Roboto",
            fontWeight: "400",
            marginTop: 1,
            color: "#fff",
          }}
          color="text.secondary"
          gutterBottom
        >
          Character Name
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#F83540",
          }}
          color="text.secondary"
          gutterBottom
        >
          Name Spieler
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#2776D3",
            marginTop: 1.5,
          }}
          color="text.secondary"
          gutterBottom
        >
          www.crimecases-dinner.de/einladung/luigi
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

export const Invites: React.FC = () => {
  const { setError } = useErrorStore((state) => state.actions);
  const { gameCode } = useGameCode();
  const navigate = useNavigate();

  // Emit a page view event to Meta Pixel
  useEffect(() => {
    fbq.pageView();
  }, []);

  return (
    <div className="p-2 flex flex-col items-center min-h-[95vh]">
      <h1 className="bg-background  text-2xl w-[100%]  mx-3 px-5 text-white py-8 text-center rounded shadow-lg">
        Verschicke die Einlandungen
      </h1>
      <div className="mt-20 px-5 w-full flex mx-3 flex-1 flex-col">
        <div className={"w-full flex-1 bg-slate-500/0"}>
          <InvitesCards />
          <InvitesCards />
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
              navigate(AppRoutes.extras);
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
