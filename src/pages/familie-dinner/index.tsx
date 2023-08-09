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
    <Card sx={{ backgroundColor: "#292929", width:"332px", height:"371px" }} className={classes.card}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "500",
            color: "#fff",
            padding: "0 10px",
            letterSpacing:"0.15px"
          }}
          color="text.secondary"
          gutterBottom
        >
          Luigi,ich weiß, dass du gewöhnlich Besseres zu tun hast, als dich um
          deine Familie zu bemühen. Heute Abend jedoch wäre dein Erscheinen von
          ausgesprochenem Vorteil. Ich habe eine Ankündigung zu machen, die
          Konsequenzen für dich haben wird. Mario
        </Typography>
      </CardContent>
    </Card>
  );
};

export const FamilyDinner: React.FC = () => {
  const { setError } = useErrorStore((state) => state.actions);
  const { gameCode } = useGameCode();
  const navigate = useNavigate();

  useEffect(() => {
    fbq.pageView();
  }, []);

  return (
    <div className="p-2 flex flex-col h-full items-center">
      <h1 className="bg-background w-full  text-[10px] uppercase tracking-[0.2em] mx-0 px-5 text-white py-8 text-center rounded shadow-lg">
        Einladung zu einem Abendessen im kleinsten Kreise der Familie{" "}
      </h1>
      <div className="mt-20 pt-10 flex-1 px-5 w-full flex flex-col mx-3 bg-white/0 justify-center items-center relative ">
        <div className={"flex-1"}>
          <AlertBox
            img={REZEPTE}
            title={"Rezepte"}
            text={"Mörderisch-gute Rezeptvorschläge"}
          />
        </div>
        <div className="flex w-full items-center justify-center mb-5  ">
            <Button
              variant="outlined"
              className="disabled:cursor-not-allowed border-white/10"
              // disabled={!isValid || isSubmitting}
              type="submit"
              onClick={()=> navigate(AppRoutes.characters)}
            >
              WEITER
            </Button>
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Box from "@mui/material/Box";

// const useStyles = makeStyles((theme) => ({
//   cardPlayer: {
//     "& .MuiBox-root": {
//       "& .MuiLinearProgress-root": {
//         "& .css-5xe99f-MuiLinearProgress-bar1": {
//           backgroundColor: "#ffffff",
//           height: 8,
//         },
//       },
//     },
// //   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

//  export const FamilyDinner: React.FC = () => {

//   const classes = useStyles();

//   return (
//     <Card
//       className={classes.cardPlayer}
//       sx={{
//         bgcolor: "#292929",
//         width: "332px",
//         padding: "1rem 3rem",
//         // paddingTop:"24px",
//         height: "311px",
//         borderRadius: "4px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         display: "flex",
//         // flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//         <Typography
//         variant="body1"
//         sx={{
//           fontWeight: 500,
//           fontSize: "20px",
//           color: "#ffffff",
//         //   marginTop: "1rem",
//           fontFamily: "Roboto",
//           textAlign:"center",
//         //   padding:"2rem"
//         }}
//       >
//         Die Spieler können sich nun ihre Ziele für die Runde durchlesen.
//       </Typography>
//       {/* <Box
//         sx={{
//           width: "200.68px",
//           height: "200.68px",
//           borderRadius: "100%",
//           overflow: "hidden",
//         }}
//       >
//         <CardMedia
//           component="img"
//           image={CharacterImage} // Replace this with the URL or path to your image
//           alt="Audio Player"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </Box>
//       <Typography
//         variant="body1"
//         sx={{
//           textTransform: "uppercase",
//           fontWeight: 500,
//           fontSize: "12px",
//           color: "#ffffff96",
//           marginTop: "1rem",
//           fontFamily: "Roboto",
//         }}
//       >
//         Your Text Line Here
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           width: "100%",
//           marginTop: "1rem",
//           bgColor: "#000",
//         }}
//       >
//         <Box sx={{ width: "230px", display: "flex", alignItems: "center" }}>
//           <IconButton aria-label="play">
//             <MdPlayArrow className={"text-white text-[28px]"} />
//           </IconButton>
//           <LinearProgress
//             variant="determinate"
//             value={currentProgress} // Replace this with the actual progress value (0 to 100)
//             sx={{
//               height: "5px",
//               // flex: 1,
//               width: "50%",
//               marginLeft: "0.3rem",
//               borderRadius: "4px",
//               outline: "1px solid #ffffff96",
//               position: "relative",
//               bgcolor: "#292929",
//             }}
//           >
//             <Box
//               component="span"
//               sx={{
//                 position: "absolute",
//                 top: "-15px",
//                 left: `${currentProgress}%`,
//                 width: "15px",
//                 height: "20px",
//                 bgcolor: "#ffffff",
//                 borderRadius: "50%",
//                 transform: "translateX(-50%)",
//               }}
//               style={{ backgroundColor: "#ffffff" }}
//             />
//           </LinearProgress>

//           <Typography
//             variant="body2"
//             sx={{
//               color: "#ffffff96",
//               marginLeft: "0.5rem",
//               minWidth: "35px",
//               fontWeight: 700,
//               fontSize: "12px",
//               textAlign: "right",
//               fontFamily: "Roboto",
//             }}
//           >
//             {audioDuration}
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             // flex: 1,
//             width: "30%",
//             display: "flex",
//             alignItems: "center",
//             marginLeft: "1rem",
//             bgColor: "red",
//           }}
//         >
//           <Stack
//             spacing={2}
//             direction="row"
//             sx={{ flex: 1 }}
//             alignItems="center"
//           >
//             <MdVolumeUp className={"text-white text-[28px]"} />
//             <Slider
//               aria-label="Volume"
//               value={value}
//               onChange={handleChange}
//               style={{ color: "#ffffff" }}
//             />
//           </Stack>
//         </Box>
//       </Box> */}
//     </Card>
//   );
// };
