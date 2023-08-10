import React, { useEffect, useRef } from "react";
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
// import CharacterImage from "@/assets/app-charcter.png";
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

import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

// const sliderItems = data.length > 3 ? 3 : data.length;
// const items = [];

// for (let i = 0; i < data.length; i += sliderItems) {
//   if (i % sliderItems === 0) {
//     items.push(
//       <Card raised className="Banner" key={i.toString()}>
//         <div container spacing={0} className="BannerGrid">
//           {data.slice(i, i + sliderItems).map((da, index) => {
//             return <div key={index.toString()} item={da} />;
//           })}
//         </div>
//       </Card>
//     );
//   }
// }
function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      animation="slide"
      autoPlay={false}
      cycleNavigation
      timeout={300}
      // animation={"slide"}
      duration={2000}
      navButtonsAlwaysInvisible={true}
      swipe={true}
      fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "cornflowerblue",
          borderRadius: 0,
        },
      }}
      indicatorIconButtonProps={{
        style: {
          display: "none", // 2
        },
      }}
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
      NextIcon={"false"} // Change the "inside" of the next button to "next"
      PrevIcon={"false"}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className={"w-[100px] bg-[#fff]"}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </div>
  );
}

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
      <div className="mt-20 px-0 bg-[reds] flex-1 w-full flex flex-col ">
        {/* <SimpleSwiper /> */}
        <Box sx={{ flex: 1, width: "100%", background: "resd" }}>
          <SimpleCarousel />
          {/* <Example /> */}
        </Box>
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
          onListboxOpenChange={() => console.log("open")}
        >
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
        </Select>
      </FormControl>
    </div>
  );
}

function SimpleCarousel() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(null);
  const classes = useStyles();

  const calculateActiveIndex = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const center = scrollLeft + containerWidth / 2;
      // Calculate the active index based on the center position
      const newIndex = Math.floor(center / containerWidth);
      setActiveIndex(newIndex);
    }
  };
  // console.log(activeIndex, "setActiveIndex");
  useEffect(() => {
    // Add a scroll event listener to track the scroll position
    // const container = containerRef.current;
    // if (container) {
    //   container.addEventListener("scroll", calculateActiveIndex);
    //   return () => {
    //     container.removeEventListener("scroll", calculateActiveIndex);
    //   };
    // }
  }, [containerRef, activeIndex]);

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
    <div className={" relative "}>
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          // background: "blue",
          gap: 2,
          py: 1,
          overflow: "auto",
          width: "100%",
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
        {/* <div
          className={
            "absolute top-0 left-0 bottom-0 w-[150px] bg-slate-500/20 z-20 "
          }
        ></div>
         <div
          className={
            "absolute top-0 right-0 bottom-0 w-[150px] bg-slate-500/20 z-20 "
          }
        ></div> */}

        {data.map((item, index) => (
          <Card
            orientation="horizontal"
            size="sm"
            sx={{
              // transform: `translateY(${index === activeIndex ? "40px" : "0px"})`,
              padding: 0,
              border: 0,
              borderRadius: 7,
              backgroundColor: "transparent",
              transition: "all 0.2s",
              // background: activeIndex === index ? "red" : "transparent",
              marginTop: activeIndex === index ? "20px" : 0,
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
                  {/* <SimpleSelect /> */}
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
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
                      onListboxOpenChange={() => setActiveIndex(index)}
                      onClose={() => setActiveIndex(null)}
                    >
                      <Option value="dog">
                        Dog
                      </Option>
                      <Option value="cat">
                        Cat
                      </Option>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Box>
    </div>
  );
}
