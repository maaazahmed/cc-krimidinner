
// import { Round1 } from "./round-1";
// export default <R></R>

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useErrorStore } from "@/stores/error-store";
// import { useGameCode } from "@/hooks/game-code/use-game-code";
// import { Button } from "@/components/button";
// import { AppRoutes } from "@/constants/app-routes";
// import * as fbq from "@/meta";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// // import CharacterImage from "@/assets/CharacterImage-small";
// import CharacterImage from "../../assets/app-charcter.png";
// import REZEPTE from "@/assets/rezepte.png";
// import SHOPIFY from "@/assets/spotify.png";
// import COPY_ICON from "../../assets/copy_24px.svg";
// import {
//   MdHeadset,
//   MdOutlinedFlag,
//   MdSearch,
//   MdPlayArrow,
//   MdVolumeUp,
// } from "react-icons/md";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import CardMedia from "@mui/material/CardMedia";
// import IconButton from "@mui/material/IconButton";
// // import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import LinearProgress from "@mui/material/LinearProgress";
// import Stack from "@mui/material/Stack";
// import Slider from "@mui/material/Slider";
// import VolumeDown from "@mui/icons-material/VolumeDown";
// import VolumeUp from "@mui/icons-material/VolumeUp";

// import AudioPlayerCard from "./step-1";
// import StepTow from "./round-1/step-2";
// import StepFour from "./step-4";


// const useStyles = makeStyles((theme) => ({
//   card: {
//     padding: 0,
//     // width: 255,
//     height: 311,
//     display: "flex",
//     "justify-content": "center",
//     "align-items": "center",

//     "border-radius": "4px",
//     border: "0px solid #FFF",
//     "& .MuiCardContent-root": {
//       // backgroundColor: "red",
//       // height: 200,
//       display: "flex",
//       "justify-content": "center",
//       "align-items": "center",
//       "flex-direction": "column",

//       "& .MuiBox-root": {
//         // backgroundColor: "red",
//         width: "100%",
//         display: "flex",
//         "justify-content": "flex-end",
//         "align-items": "center",
//         "& .MuiLinearProgress-root": {
//           backgroundColor: "red",
//         },
//       },
//     },

//     // "& .MuiOutlinedInput-root": {
//     //   backgroundColor: "black",
//     //   "&:hover .MuiOutlinedInput-notchedOutline": {
//     //     borderColor: "transparent",
//     //   },
//     //   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//     //     borderColor: "transparent",
//     //   },
//     // },

//     // "& .MuiInputBase-input": {
//     //   color: "white",
//     // },
//     // "& .MuiInputLabel-root": {
//     //   color: "white",
//     // },
//     // "& .MuiList-root .MuiMenuItem-root": {
//     //   backgroundColor: "#292929",
//     //   color: "white",
//     // },
//   },
//   cardPlayer: {
//     // backgroundColor: "red",

//     "& .MuiBox-root": {
//       "& .MuiLinearProgress-root": {
//         "& .css-5xe99f-MuiLinearProgress-bar1": {
//           backgroundColor: "#ffffff",
//           height: 8,
//         },
//       },
//     },
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const AlertBox = ({ img, title, text }) => {
//   const classes = useStyles();

//   return (
//     <Card sx={{ backgroundColor: "#292929" }} className={classes.card}>
//       <CardContent>
//         <Typography
//           sx={{
//             fontSize: 14,
//             fontFamily: "Roboto",
//             fontWeight: "400",
//             color: "#fff",
//             padding: "0 20px",
//             textAlign: "center",
//           }}
//           color="text.secondary"
//           gutterBottom
//         >
//           Starte jetzt das Spiel, oder scan zum einen anderen Zeitpunkt wieder
//           den QR-Code um auf diese Seite zurück zukommen.
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// // const AudioPlayerCard = () => {
// //   // Placeholder for audio duration (you can replace this with the actual duration)
// //   const audioDuration = "3:35";

// //   // Placeholder for the current progress (you can replace this with the actual progress)
// //   const currentProgress = 50;
// //   const [value, setValue] = React.useState<number>(30);

// //   const handleChange = (event: Event, newValue: number | number[]) => {
// //     setValue(newValue as number);
// //   };
// //   const classes = useStyles();

// //   return (
// //     <Card
// //       className={classes.cardPlayer}
// //       sx={{
// //         bgcolor: "#292929",
// //         // width: "332px",
// //         width: "100%",
// //         padding: "3rem 1rem",
// //         // paddingTop:"24px",
// //         // height: "395px",
// //         borderRadius: "4px",
// //         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           width: "200.68px",
// //           height: "200.68px",
// //           borderRadius: "100%",
// //           overflow: "hidden",
// //         }}
// //       >
// //         <CardMedia
// //           component="img"
// //           image={CharacterImage} // Replace this with the URL or path to your image
// //           alt="Audio Player"
// //           style={{ width: "100%", height: "100%", objectFit: "cover" }}
// //         />
// //       </Box>
// //       <Typography
// //         variant="body1"
// //         sx={{
// //           textTransform: "uppercase",
// //           fontWeight: 500,
// //           fontSize: "12px",
// //           color: "#ffffff96",
// //           marginTop: "1rem",
// //           fontFamily: "Roboto",
// //         }}
// //       >
// //         Your Text Line Here
// //       </Typography>
// //       {/* Main Player UI */}
// //       <Box
// //         sx={{
// //           display: "flex",
// //           alignItems: "center",
// //           width: "100%",
// //           marginTop: "1rem",
// //           bgColor: "#000",
// //         }}
// //       >
// //         <Box sx={{ width: "230px", display: "flex", alignItems: "center" }}>
// //           <IconButton aria-label="play">
// //             <MdPlayArrow className={"text-white text-[28px]"} />
// //           </IconButton>
// //           <LinearProgress
// //             variant="determinate"
// //             value={currentProgress} // Replace this with the actual progress value (0 to 100)
// //             sx={{
// //               height: "5px",
// //               // flex: 1,
// //               width: "50%",
// //               marginLeft: "0.3rem",
// //               borderRadius: "4px",
// //               outline: "1px solid #ffffff96",
// //               position: "relative",
// //               bgcolor: "#292929",
// //             }}
// //             // style={{backgroundColor:"#ffffff", }}
// //           >
// //             <Box
// //               component="span"
// //               sx={{
// //                 position: "absolute",
// //                 top: "-15px",
// //                 left: `${currentProgress}%`,
// //                 width: "15px",
// //                 height: "20px",
// //                 bgcolor: "#ffffff",
// //                 borderRadius: "50%",
// //                 transform: "translateX(-50%)",
// //               }}
// //               style={{ backgroundColor: "#ffffff" }}
// //             />
// //           </LinearProgress>

// //           <Typography
// //             variant="body2"
// //             sx={{
// //               color: "#ffffff96",
// //               marginLeft: "0.5rem",
// //               minWidth: "35px",
// //               fontWeight: 700,
// //               fontSize: "12px",
// //               textAlign: "right",
// //               fontFamily: "Roboto",
// //             }}
// //           >
// //             {audioDuration}
// //           </Typography>
// //         </Box>
// //         <Box
// //           sx={{
// //             // flex: 1,
// //             width: "30%",
// //             display: "flex",
// //             alignItems: "center",
// //             marginLeft: "1rem",
// //             bgColor: "red",
// //           }}
// //         >
// //           {/* <MdPlayArrow className={"text-white text-[24px]"} />
// //           <LinearProgress
// //             variant="determinate"
// //             value={50} // Replace this with the actual sound control value (0 to 100)
// //             sx={{
// //               height: "5px",
// //               flex: 1,
// //               marginLeft: "0.2rem",
// //               borderRadius: "4px",
// //               outline: "1px solid #ffffff",
// //               position: "relative",
// //                 bgcolor: "#292929",
// //             }}
// //           >
// //             <Box
// //               component="span"
// //               sx={{
// //                 position: "absolute",
// //                 top: "-12px",
// //                 left: "50%",
// //                 width: "12px",
// //                 height: "5px",
// //                 bgcolor: "#ffffff",
// //                 borderRadius: "50%",
// //                 transform: "translateX(-50%)",
// //               }}
// //             />
// //           </LinearProgress> */}
// //           <Stack
// //             spacing={2}
// //             direction="row"
// //             sx={{ flex: 1 }}
// //             alignItems="center"
// //           >
// //             {/* <VolumeDown /> */}
// //             <MdVolumeUp className={"text-white text-[28px]"} />
// //             <Slider
// //               aria-label="Volume"
// //               value={value}
// //               onChange={handleChange}
// //               style={{ color: "#ffffff" }}
// //             />
// //           </Stack>
// //           {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
// //         </Box>
// //       </Box>
// //       {/* Add other audio player components here */}
// //     </Card>
// //   );
// // };

// export const Rounds: React.FC = () => {
//   const { setError } = useErrorStore((state) => state.actions);
//   const { gameCode } = useGameCode();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fbq.pageView();
//   }, []);

//   return (
//     <div className="p-2 flex flex-col items-center">
//       <div className="bg-background w-[100%] flex flex-col justify-between  mx-3 px-5 text-white py-5   text-center rounded shadow-lg">
//         <h1 className={"text-[24px] font-[400] "}>RUNDE 1</h1>
//         <div
//           className={
//             "flex justify-center   w-[239px] justify-between m-auto mt-5"
//           }
//         >
//           <MdHeadset className={"text-[24px] text-white"} />
//           <MdOutlinedFlag className={"text-[24px] text-white"} />
//           <MdSearch className={"text-[24px] text-white"} />
//           <MdSearch className={"text-[24px] text-white"} />
//           <MdPlayArrow className={"text-[24px] text-white"} />
//         </div>
//       </div>

//       <Container>
//         <Box
//           sx={{
//             // bgcolor: "#cfe8fc",
//             flexDirection: "column",
//             height: "80vh",
//             display: "flex",
//             justifyContent: "center",
//             // paddingTop: "10rem",
//             alignItems: "center",
//           }}
//         >
//           <div className="flex-1 flex justify-center bg-slate-400/0 items-center  ">
//             {/* <AudioPlayerCard /> */}
//             <StepTow/>
//             {/* <StepFour/> */}
//           </div>
//           <div className="flex w-full items-center justify-center ">
//           <div className="text-center flex border-red-50 w-1/2  justify-between mt-8">
//             <Button
//               onClick={() => {
//                 navigate(AppRoutes.setup);
//               }}
//               variant="text"
//               className="disabled:cursor-not-allowed uppercase"
//               type="button"
//             >
//               ZUrück
//             </Button>
//             <Button
//               variant="text"
//               className="disabled:cursor-not-allowed"
//               // disabled={!isValid || isSubmitting}
//               type="submit"
//             >
//               WEITER
//             </Button>
//           </div>
//         </div>>
//         </Box>
//       </Container>
//     </div>
//   );
// };
