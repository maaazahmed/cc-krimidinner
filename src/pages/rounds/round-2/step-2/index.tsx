import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CharacterImage from "@/assets/app-charcter.png";
import { MdPlayArrow, MdVolumeUp } from "react-icons/md";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { Button } from "@/components/button";
import * as fbq from "@/meta";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/constants/app-routes";

const useStyles = makeStyles((theme) => ({
  cardPlayer: {
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

const AudioPlayer = (): React.FC => {
  // Placeholder for audio duration (you can replace this with the actual duration)
  const audioDuration = "3:35";

  // Placeholder for the current progress (you can replace this with the actual progress)
  const currentProgress = 50;
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  const classes = useStyles();

  return (
    <Card
      className={classes.cardPlayer}
      sx={{
        bgcolor: "#292929",
        // width: "332px",
        width: "100%",
        padding: "3rem 1rem",
        // paddingTop:"24px",
        // height: "395px",
        borderRadius: "4px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "200.68px",
          height: "200.68px",
          borderRadius: "100%",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={CharacterImage} // Replace this with the URL or path to your image
          alt="Audio Player"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Typography
        variant="body1"
        sx={{
          textTransform: "uppercase",
          fontWeight: 500,
          fontSize: "12px",
          color: "#ffffff96",
          marginTop: "1rem",
          fontFamily: "Roboto",
        }}
      >
        Your Text Line Here
      </Typography>
      {/* Main Player UI */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          marginTop: "1rem",
          bgColor: "#000",
        }}
      >
        <Box sx={{ width: "230px", display: "flex", alignItems: "center" }}>
          <IconButton aria-label="play">
            <MdPlayArrow className={"text-white text-[28px]"} />
          </IconButton>
          <LinearProgress
            variant="determinate"
            value={currentProgress} // Replace this with the actual progress value (0 to 100)
            sx={{
              height: "5px",
              // flex: 1,
              width: "50%",
              marginLeft: "0.3rem",
              borderRadius: "4px",
              outline: "1px solid #ffffff96",
              position: "relative",
              bgcolor: "#292929",
            }}
          >
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: "-15px",
                left: `${currentProgress}%`,
                width: "15px",
                height: "20px",
                bgcolor: "#ffffff",
                borderRadius: "50%",
                transform: "translateX(-50%)",
              }}
              style={{ backgroundColor: "#ffffff" }}
            />
          </LinearProgress>

          <Typography
            variant="body2"
            sx={{
              color: "#ffffff96",
              marginLeft: "0.5rem",
              minWidth: "35px",
              fontWeight: 700,
              fontSize: "12px",
              textAlign: "right",
              fontFamily: "Roboto",
            }}
          >
            {audioDuration}
          </Typography>
        </Box>
        <Box
          sx={{
            // flex: 1,
            width: "30%",
            display: "flex",
            alignItems: "center",
            marginLeft: "1rem",
            bgColor: "red",
          }}
        >
          <Stack
            spacing={2}
            direction="row"
            sx={{ flex: 1 }}
            alignItems="center"
          >
            <MdVolumeUp className={"text-white text-[28px]"} />
            <Slider
              aria-label="Volume"
              value={value}
              onChange={handleChange}
              style={{ color: "#ffffff" }}
            />
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};

// import React, { useEffect } from "react";
// import { Button } from "@/components/button";
// import * as fbq from "@/meta";
// import Container from "@mui/material/Container";
// import Step1 from "./step-1";
// import CharacterImage from "@/assets/app-charcter.png";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";

// const BoxtItem = () => (
//   <Box
//     sx={{
//       width: "183px",
//       height: "165px",
//       // backgroundColor: "#292929",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <img
//       className="w-[143] h-[135px]"
//       src={CharacterImage}
//       alt="CharacterImage"
//     />
//   </Box>
// );

export default ({ setIsNextRound, isNextRound }) => {
  useEffect(() => {
    fbq.pageView();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="flex h-full bg-white/10">
      <Box
        sx={{
          // bgcolor: "#cfe8fc",
          flex: 1,
          display: "flex",
          // justifyContent: "center",
          flexDirection: "column",
          // paddingTop: "10rem",
          alignItems: "center",
          // alignItems: "end",
        }}
      >
        <Box sx={{ flex:1,  }}>
          <div>
            <h1 className="bg-background w-full text-2xl mt-2 border-white/50 border-[1px]  px-5 text-white py-8 text-center rounded shadow-lg">
              Wer wurde erschossen?{" "}
            </h1>
            <Box
              sx={{
                flexGrow: 1,
                mt: "2rem",
                padding: "1.2rem",
                background: "rsed",
                height: "70vh",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AudioPlayer />
            </Box>
          </div>
        </Box>

        {/* <Box className="mb-0 sm:mb-10"> */}
          {/* <Button
             onClick={() => {
                navigate(AppRoutes.rating);
              }}
            // onClick={() => setIsNextRound(2)}
            variant="text"
            className="disabled:cursor-not-allowed rounded-[4px] bg-[#f24b59] text-[#000] border-white/10 border-[1px]"
            type="submit"
          >
            AUSWAHL BESTÄTIGEN{" "}
          </Button> */}

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
                navigate(AppRoutes.rating);
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
      {/* </Box> */}
    </div>
  );
};
