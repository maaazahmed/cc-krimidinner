import React from "react";
// import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Box from "@mui/material/Box";
import crime_classes_img from "@/assets/crime-classes-img.png";
import Rating from "@mui/material/Rating";
import { Button } from "@/components/button";
import TextField from "@mui/material/TextField";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

import man_1 from "@/assets/man1.png";
import man_2 from "@/assets/man2.png";
import man_3 from "@/assets/man3.png";
import { AppRoutes } from "@/constants/app-routes";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ratingContainer: {
    "& label.Mui-focused": {
      color: "#fff",
      width: "100%",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f24b59",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f24b59",
      },
      "&:hover fieldset": {
        borderColor: "#f24b59",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f24b59",
      },
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const data = [
  {
    src: man_1,
    // src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: man_2,
    // src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: man_3,
    // src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: man_1,
    // src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: man_2,
    // src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: man_3,
    // src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: man_1,
    // src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: man_2,
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: man_3,
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: man_1,
    title: "Mountain view",
    description: "3.98M views",
  },
];
function CarouselRatio() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        py: 1,
        overflow: "auto",
        width: 343,
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
          size="md"
          key={item.title}
          variant="outlined"
          sx={{ padding: 0, border: 0, borderRadius: 100 }}
        >
          <AspectRatio ratio="1" sx={{ minWidth: 61, padding: 0 }}>
            <img
             src={item.src}
              // src={`${item.src}?h=120&fit=crop&auto=format`}
              // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              className={"h-[60px] w-[60px]"}
            />
          </AspectRatio>
        </Card>
      ))}
    </Box>
  );
}

export const Characters: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | null>(2);
  const navigate = useNavigate();

  return (
    <div className="p-2 bg-[#fff]10 min-h-[95vh] flex flex-col items-center">
      <h1 className="bg-background w-[100%]  text-2xl mt-2 border-white/50 border-[0px]  mx-3 px-5 text-white py-8 text-center rounded shadow-lg">
        Die Charaktere{" "}
      </h1>
      <Box
        className={classes.ratingContainer}
        sx={{
          //   pt: "7rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 0.8,
        }}
      >
        <Card
          sx={{
            width: "287px",
            height: "447px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "ce",
            padding: "0rem 0rem",
            // paddingBottom: "2rem",
            background: "#383838",
            mt: 10,

          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "24px",
              textAlign: "center",
              color: "#f24b59",
              background: "rgba(41, 41, 41, 1)",
              width: "100%",
              padding: "20px 0",
              letterSpacing:"0.18px",
            }}
          >
            Luigi Bastoni{" "}
          </Typography>
          <div className={"bg-red-0 flex-1 flex justify-center items-center flex-col"} >
            <Typography
              sx={{

                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "14px",
                margin: 0,
                textAlign: "center",
                padding: "0 2.2rem",
                color: "rgba(255, 255, 255, 0.87)",

              }}
            >
              Bruder des Dons und ewiger Zweiter. Alternder Playboy, der gerne
              das Geld ausgibt, das er nie verdient hat. Liebt schnelle Autos{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: 400,
                padding: "0 2.2rem",
                fontSize: "14px",
                margin: 0,
                marginTop: 2,
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.87)",
              }}
            >
              Luigi ist ein sehr lockerer Mensch und meistens gut gelaunt.
              Fehler gehören für ihn zum Leben dazu, weshalb er ihnen kein
              großes Gewicht beimisst. Sollte man sich allerdings mit ihm
              anlegen, kann er sehr aufbrausend werden.{" "}
            </Typography>
          </div>

          {/* <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "16px",
              textAlign: "center",
              color: "#F24B59",
              textTransform: "uppercase",
            }}
          >
            Speichern{" "}
          </Typography> */}
        </Card>
      </Box>
      <Box
        sx={{
          height: 100, //   backgroundColor: "red",
          display: "flex",
          alignItems: "end",
        }}
      >
        <CarouselRatio />
      </Box>

      <Box
        sx={{
          width:"100%",
          // height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding:"1rem 2rem 0 2rem"
          // background:"red"
        }}
      >
        <Button
          // onClick={() => setIsNextRound(2)}
          variant="text"
          className="disabled:cursor-not-allowed rounded-[4px]  "
          type="submit"
        >
          ZURUCK
        </Button>
        <Button
          onClick={() => navigate(AppRoutes.your_character)}
          variant="text"
          className="disabled:cursor-not-allowed rounded-[4px]  "
          type="submit"
        >
          WEITER
        </Button>
      </Box>
    </div>
  );
};
