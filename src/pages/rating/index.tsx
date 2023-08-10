import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import crime_classes_img from "@/assets/crime-classes-img.png";
import Rating from "@mui/material/Rating";
import { Button } from "@/components/button";
import { AppRoutes } from "@/constants/app-routes";
import { useNavigate } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  //   rating: {
  //     "& .css-jue3ft-MuiRating-root": {
  //       height: "100px",
  //       width: "100px",
  //       fontSize: "4rem",
  //     },
  //   },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const GameRating: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | null>(2);
const navigate = useNavigate()
  return (
    <div className="p-2 bg-[#fff]/10 h-full flex flex-col items-center">
      <Box
        sx={{
          pt: "7rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   justifyContent: "center",
          //   background:"red",
          flex: 0.8,
        }}
      >
        <img
          src={crime_classes_img}
          alt="Character Image"
          style={{
            width: "101px",
            height: "104px",
            objectFit: "cover",
            mt: "0.5rem",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            color: "#ffffff",
            //   marginTop: "1rem",
            fontFamily: "Roboto",
            textAlign: "center",
            // padding: "1rem",
            mt: 6,
            mb: 5.5,
          }}
        >
          WIE HAT EUCH DAS SPIEL GEFALLEN?
        </Typography>
        <Box
          sx={{
            "& > legend": {},
          }}
        >
          <Rating
            // className={classes.rating}
            sx={{
              height: "42px",
              alignItems: "center",
              fontSize: 42,
              // backgroundColor: "#2C2C2C",
              padding: "25px 10px",
              color:"#ac8aee"
            }}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            size="large"
          />
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Button
          onClick={() => navigate(AppRoutes.review_amazom)}
          variant="text"
          className="disabled:cursor-not-allowed rounded-[4px] bg-white/20 text-[#fff]/70 border-white/0 border-[1px] "
          type="submit"
        >
          WEITER
        </Button>
      </Box>
    </div>
  );
};
