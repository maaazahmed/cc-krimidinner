import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useErrorStore } from "@/stores/error-store";
import { useGameCode } from "@/hooks/game-code/use-game-code";
import { Button } from "@/components/button";
import { AppRoutes } from "@/constants/app-routes";
import * as fbq from "@/meta";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import CharacterImage from "@/assets/CharacterImage-small";
import CharacterImage from "../../assets/app-charcter.png";
import REZEPTE from "@/assets/rezepte.png";
import SHOPIFY from "@/assets/spotify.png";
import COPY_ICON from "../../assets/copy_24px.svg";
import {
  MdHeadset,
  MdOutlinedFlag,
  MdSearch,
  MdPlayArrow,
  MdVolumeUp,
} from "react-icons/md";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

import AudioPlayerCard from "./step-1";
import StepTow from "./step-2";
import StepFour from "./step-4";
import StepThree from "./step-3";

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
        "& .MuiLinearProgress-root": {
          backgroundColor: "red",
        },
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
  cardPlayer: {
    // backgroundColor: "red",

    "& .MuiBox-root": {
      "& .MuiLinearProgress-root": {
        "& .css-5xe99f-MuiLinearProgress-bar1": {
          backgroundColor: "#ffffff",
          height: 8,
        },
      },
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const RoundOne: React.FC = () => {
  const { setError } = useErrorStore((state) => state.actions);
  const { gameCode } = useGameCode();
  const navigate = useNavigate();
  const [roundStap, setRoundStap] = React.useState(1);

  useEffect(() => {
    fbq.pageView();
  }, []);

  return (
    <div className="p-2 flex flex-col items-center">
      <div className="bg-background w-[100%] flex flex-col justify-between  mx-3 px-5 text-white py-5   text-center rounded shadow-lg">
        <h1 className={"text-[24px] font-[400] "}>RUNDE 1</h1>
        <div
          className={
            "flex justify-center   w-[239px] justify-between m-auto mt-5"
          }
        >
          <MdHeadset
            onClick={() => setRoundStap(1)}
            className={`text-[24px] ${
              roundStap == 1 ? "text-[#f24b59]" : "text-[white]"
            }`}
          />
          <MdOutlinedFlag
            onClick={() => setRoundStap(2)}
            className={`text-[24px] ${
              roundStap == 2 ? "text-[#f24b59]" : "text-[white]"
            }`}
          />
          <MdSearch
            onClick={() => setRoundStap(3)}
            className={`text-[24px] ${
              roundStap == 3 ? "text-[#f24b59]" : "text-[white]"
            }`}
          />
          <MdSearch
            onClick={() => setRoundStap(4)}
            className={`text-[24px] ${
              roundStap == 4 ? "text-[#f24b59]" : "text-[white]"
            }`}
          />
          <MdPlayArrow
            onClick={() => setRoundStap(5)}
            className={`text-[24px] ${
              roundStap == 5 ? "text-[#f24b59]" : "text-[white]"
            }`}
          />
        </div>
      </div>

      <Container>
        <Box
          sx={{
            // bgcolor: "#cfe8fc",
            flexDirection: "column",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            // paddingTop: "10rem",
            alignItems: "center",
          }}
        >
          <div className="flex-1 flex justify-center bg-slate-400/0 items-center  ">
            {roundStap == 1 ? (
              <AudioPlayerCard />
            ) : roundStap == 2 ? (
              <StepTow />
            ) : roundStap == 3 ? (
              <StepThree />
            ) : (
              <StepFour />
            )}
            {/*
             <AudioPlayerCard />
            <StepTow/>
            <StepFour/>
            <StepThree /> */}
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
                  navigate(AppRoutes.round_2);
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
        </Box>
      </Container>
    </div>
  );
};
