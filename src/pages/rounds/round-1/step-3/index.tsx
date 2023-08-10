import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { MdArrowDownward, MdArrowForward } from "react-icons/md";
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
import DifficultyFill from "@/assets/DifficultyFill.png";

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
import CharacterImage from "@/assets/app-charcter.png";
import DifficultyUnfilled from "@/assets/DifficultyUnfilled.png";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import slider_icons_search from "@/assets/slide-search.png";

//  const StepThree: React.FC = () => {
//   const { setError } = useErrorStore((state) => state.actions);
//   const { gameCode } = useGameCode();
//   const navigate = useNavigate();

//   // Emit a page view event to Meta Pixel
//   useEffect(() => {
//     fbq.pageView();
//   }, []);

//   return (
//     <div className="p-2 flex flex-col items-center">
//       <h1 className="bg-background  text-2xl  mx-3 px-5 text-white py-8 text-center rounded shadow-lg">
//         Weise die Spieler ihren Charakter zu
//       </h1>
//       <div className="mt-20 px-5 w-full flex flex-col justify-center items-center">
//         {/* <SimpleSwiper /> */}
//         <SimpleCarousel />

//         <div className="flex w-full items-center justify-center">
//           {" "}
//           {/* Added justify-center */}
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
//         </div>
//       </div>
//     </div>
//   );
// };

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 170,
//     "& .MuiOutlinedInput-root": {
//       backgroundColor: "black",
//       "&:hover .MuiOutlinedInput-notchedOutline": {
//         borderColor: "transparent",
//       },
//       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//         borderColor: "transparent",
//       },
//     },
//     "& .MuiInputBase-input": {
//       color: "white",
//     },
//     "& .MuiInputLabel-root": {
//       color: "white",
//     },
//     "& .MuiList-root .MuiMenuItem-root": {
//       backgroundColor: "#292929",
//       color: "white",
//     },
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

function SimpleCarousel() {
  const data = [
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night view",
      description: "4.21M views",
    },
    {
      src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
      title: "Lake view",
      description: "4.74M views",
      horizontal: true,
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
      horizontal: true,
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
      horizontal: true,
    },
  ];
  return (
    <Box
      md={{}}
      sx={{
        display: "flex",

        gap: 2,
        py: 1,
        overflow: "auto",
        width: 400,
        padding: 1,
        border: 0,
        borderColor: "transparent",
        // backgroundColor: "red",

        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {data.map((item, i) => (
        <Card
          orientation="horizontal"
          size="sm"
          sx={{
            // padding: 0,
            border: 0,
            // height:"392px",
            // width:"229px",
            borderRadius: 7,

            padding: "0rem",
            backgroundColor: "transparent",
          }}
          key={item.title}
          variant="outlined"
          className="rounded-md"
        >
          {!item.horizontal ? (
            <Box
              sx={{
                padding: 0,
                border: 0,
                height: "392px",
                width: "229px",
                borderRadius: 7,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#292929",
                justifyContent: "center",
              }}
            >
              <Box
                aria-label="Icon 1"
                sx={{ width: "80px", height: "80px", position: "relative" }}
              >
                <img src={slider_icons_search} alt="" />
                <Box sx={{ position: "absolute",  background:"resd", width:"50px", height:"50px",top:"2px", left:"2px" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "34px",
                      color: "#fff",
                      textAlign:"center",
                      fontFamily: "Roboto",
                      // background:"red"
                    }}
                  >
                    {i + 5}
                  </Typography>
                </Box>
              </Box>
              <Box
                aria-label="Arrow Down Icon"
                sx={{ width: "39.26px", height: "39.12px", margin: "1rem 0" }}
              >
                <MdArrowDownward className={"text-[#fff] text-[45px]"} />
              </Box>
              <img
                src={CharacterImage} // Replace this with the URL or path to your CharacterImage
                alt="Character Image"
                style={{
                  width: "92px",
                  height: "92px",
                  objectFit: "cover",
                  mt: "0.5rem",
                }}
              />
              <Box aria-label="Icon 1" sx={{ mt: "1rem" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "#F24B59",
                    //   marginTop: "1rem",
                    fontFamily: "Roboto",
                    textAlign: "center",
                  }}
                >
                  Luigi
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "#ffffff",
                    //   marginTop: "1rem",
                    fontFamily: "Roboto",
                    textAlign: "center",
                  }}
                >
                  Max Mustermann
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                padding: "0 1.5rem",
                border: 0,
                height: "392px",
                width: "229px",
                borderRadius: 7,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#292929",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#F24B59",
                  //   marginTop: "1rem",
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                HINWEISE
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                  mt: "4rem",
                  mb: "2rem",
                }}
              >
                <Box aria-label="Icon 1" sx={{ width: "50px", height: "50px" }}>
                  <img src={slider_icons_search} alt="" />
                </Box>
                <Box
                  aria-label="Arrow Down Icon"
                  sx={{ width: "39.26px", height: "39.12px", margin: "1rem 0" }}
                >
                  <MdArrowForward className={"text-[#fff] text-[39px]"} />
                </Box>
                <img
                  src={CharacterImage} // Replace this with the URL or path to your CharacterImage
                  alt="Character Image"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    mt: "0.5rem",
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#F24B59",
                  //   marginTop: "1rem",
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                Luigi
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  bekommt
                </Typography>{" "}
                Hinweis 5
              </Typography>

              {/* <Box aria-label="Icon 1" sx={{ mt: "1rem" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "#F24B59",
                    //   marginTop: "1rem",
                    fontFamily: "Roboto",
                    textAlign: "center",
                  }}
                >
                  Luigi
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "#ffffff",
                    //   marginTop: "1rem",
                    fontFamily: "Roboto",
                    textAlign: "center",
                  }}
                >
                  Max Mustermann
                </Typography>
              </Box> */}
            </Box>
          )}
        </Card>
      ))}
    </Box>
  );
}

export default SimpleCarousel;
