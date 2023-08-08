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
import CharacterImage from "@/assets/CharacterImage";
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

export const AssignRoles: React.FC = () => {
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
        Weise die Spieler ihren Charakter zu
      </h1>
      <div className="mt-20 px-5 bg-[reds] flex-1 w-full flex flex-col justify-center items-center">
        {/* <SimpleSwiper /> */}
<Box sx={{flex:1}} >

        <SimpleCarousel />
        </Box>
        {/* <div className="space-y-8 w-4/5 flex flex-col justify-center items-center">
          <div className="flex flex-col px-8 w-full items-center justify-center py-4 px-8 bg-background shadow-xl rounded-md">
            <CharacterImage />
            <h1 className="p-4 mt-6 bg-primary font-roboto text-3xl leading-6 text-center tracking-tight">
              Luigi Bastoni
            </h1>
            <div className="flex flex-col w-full justify-center items-center">
              <div className="flex w-12 mt-5 pb-2 justify-between">
                <img src={DifficultyFill} alt="s" />
                <img src={DifficultyFill} alt="s" />
                <img src={DifficultyUnfilled} alt="s" />
                <img src={DifficultyUnfilled} alt="s" />
                <img src={DifficultyUnfilled} alt="s" />
              </div>
              <h1 className="font-roboto text-onSurface-highEmphasis font-medium text-xl leading-6 text-center tracking-tighter">
                Schwierigkeit
              </h1>
              <div className="font-roboto mt-5 h-36 font-normal text-base leading-5 text-center tracking-wider text-onSurface-highEmphasis">
                Bruder des Dons und ewiger Zweiter. Alternder Playboy, der gerne
                das Geld ausgibt, das er nie verdient hat. Liebt schnelle Autos.
              </div>
              <SimpleSelect />
            </div>
          </div>
        </div> */}
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
              navigate(AppRoutes.invites);
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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
    "& .MuiOutlinedInput-root": {
      backgroundColor: "black",
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiList-root .MuiMenuItem-root": {
      backgroundColor: "#292929",
      color: "white",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const lists = ["Ten", "twenty", "Sixty"];

function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("Thirty");

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    if (inputLabel.current) {
      setLabelWidth(inputLabel.current.offsetWidth);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      {/* <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Guest Name
        </InputLabel>
        <Select
          labinfitarelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          labelWidth={labelWidth}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
            PaperProps: {
              style: {
                backgroundColor: "#292929",
              },
            },
            variant: "menu",
          }}
        >
          {lists.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={{
                color: "white",
                cursor: "pointer",
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          color="#000"
          background="black"
          size="md"
          sx={{
            borderRadius: "3px",
            width: "100%",
            backgroundColor: "#000",
            color: "#fff",
          }}
          defaultValue="dog"
        >
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
        </Select>
      </FormControl>
    </div>
  );
}

// function SimpleSwiper() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper bg-slate-400 w-[100%]"
//       >
//         <SwiperSlide className="bg-slate-600" >
//           <div className="space-y-8 w-4/5 flex flex-col justify-center items-center">
//             <div className="flex flex-col px-8 w-full items-center justify-center py-4 px-8 bg-background shadow-xl rounded-md">
//               <CharacterImage />
//               <h1 className="p-4 mt-6 bg-primary font-roboto text-3xl leading-6 text-center tracking-tight">
//                 Luigi Bastoni
//               </h1>
//               <div className="flex flex-col w-full justify-center items-center">
//                 <div className="flex w-12 mt-5 pb-2 justify-between">
//                   <img src={DifficultyFill} alt="s" />
//                   <img src={DifficultyFill} alt="s" />
//                   <img src={DifficultyUnfilled} alt="s" />
//                   <img src={DifficultyUnfilled} alt="s" />
//                   <img src={DifficultyUnfilled} alt="s" />
//                 </div>
//                 <h1 className="font-roboto text-onSurface-highEmphasis font-medium text-xl leading-6 text-center tracking-tighter">
//                   Schwierigkeit
//                 </h1>
//                 <div className="font-roboto mt-5 h-36 font-normal text-base leading-5 text-center tracking-wider text-onSurface-highEmphasis">
//                   Bruder des Dons und ewiger Zweiter. Alternder Playboy, der
//                   gerne das Geld ausgibt, das er nie verdient hat. Liebt
//                   schnelle Autos.
//                 </div>
//                 <SimpleSelect />
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide> */}
//       </Swiper>
//     </>
//   );
// }

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
          size="sm"
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
         
          <div className="space-y-8 w-full flex flex-col  justify-center items-center">
            <div className="flex flex-col px-8 w-full items-center justify-center py-4 px-8 bg-background shadow-xl rounded-md">
              <CharacterImage />
              <h1 className="px-5 py-[6px] mt-6 bg-primary font-roboto text-[20px] font-[500] leading-6 text-center tracking-tight">
                Luigi Bastoni
              </h1>
              <div className="flex flex-col w-full justify-center items-center">
                <div className="flex w-12 mt-5 pb-2 justify-between">
                  <img src={DifficultyFill} alt="s" />
                  <img src={DifficultyFill} alt="s" />
                  <img src={DifficultyUnfilled} alt="s" />
                  <img src={DifficultyUnfilled} alt="s" />
                  <img src={DifficultyUnfilled} alt="s" />
                </div>
                <h2 className="font-roboto text-onSurface-highEmphasis font-medium text-[12px] uppercase  leading-6 text-center tracking-[2px]">
                  Schwierigkeit
                </h2>
                <div className="font-roboto mt-5 h-36 text-[14px] font-normal text-base leading-5 text-center tracking-wider text-onSurface-highEmphasis">
                  Bruder des Dons und ewiger Zweiter. Alternder Playboy, der
                  gerne das Geld ausgibt, das er nie verdient hat. Liebt
                  schnelle Autos.
                </div>
                <SimpleSelect />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </Box>
  );
}
