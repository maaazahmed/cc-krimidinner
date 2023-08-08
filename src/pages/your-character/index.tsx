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
import CharacterImage2 from "@/assets/app-charcter02.png";
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

export const YourCharacter: React.FC = () => {
  const { setError } = useErrorStore((state) => state.actions);
  const { gameCode } = useGameCode();
  const navigate = useNavigate();

  // Emit a page view event to Meta Pixel
  useEffect(() => {
    fbq.pageView();
  }, []);

  return (
    <div className="p-2 flex h-full flex-col items-center">
      <h1 className="bg-background w-[100%] text-2xl  px-5 text-white py-8 text-center rounded shadow-lg">
        Dein Charakter{" "}
      </h1>
      <div className="mt-20 px-5 w-full flex-1 flex flex-col justify-center items-center">
        {/* <SimpleSwiper /> */}
        <div className={"flex-1"} >
        <SimpleCarousel />
        </div>

        <div className="flex w-full items-center justify-center">
          {" "}
          {/* Added justify-center */}
          
          <div className="text-center border-red-50 w-1/2  mt-12 ">
            <Button
              onClick={() => {
                navigate(AppRoutes.characters_profile);
              }}
              variant="outlined"
              className="disabled:cursor-not-allowed uppercase border-stone-600	"
              type="button"
            >
              ZUrück
            </Button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

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
        padding: 0,
        border: 0,
        borderColor: "transparent",
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {data.map((item) => (
        <Card
          orientation="horizontal"
        //   size="sm"
          sx={{
            padding: 0,
            border: 0,
            borderRadius: 7,
            backgroundColor: "transparent",
          }}
          key={item.title}
          variant="outlined"
          className="rounded-md"
        >
          {/* <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
            <img
              src={`${item.src}?h=120&fit=crop&auto=format`}
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
            <Typography level="title-md">{item.title}</Typography>
            <Typography level="body-sm">{item.description}</Typography>
          </Box> */}
            {/* width:"254px", */}
          <div className="space-y-8 w-fusll flex flex-col  justify-center items-center ">
            <div className="flex flex-col  items-center justify-center w-[254px] h-[392px] py-4 pt-[3rem] px-8 bg-background  shadow-xl rounded-md">
              {/* <CharacterImage /> */}
              {/* <h1 className="p-4 mt-6 bg-primary font-roboto text-3xl leading-6 text-center tracking-tight">
                Luigi Bastoni
              </h1> */}
              <img src={CharacterImage2} className={"h-[140px] w-[140px]"} alt="" />
              <div className="flex flex-col w-full justify-center items-center">
                <h1 className="font-roboto text-[#F24B59] font-medium text-[20px] font-[500] mt-2 leading-6 text-center tracking-[1px]">
                Luigi Bastoni
                </h1>
                <div className="font-roboto text-[14px] mt-5 h-36 font-normal leading-5 text-center tracking-wider text-onSurface-highEmphasis">
                  Bruder des Dons und ewiger Zweiter. Alternder Playboy, der
                  gerne das Geld ausgibt, das er nie verdient hat. Liebt
                  schnelle Autos.
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </Box>
  );
}
