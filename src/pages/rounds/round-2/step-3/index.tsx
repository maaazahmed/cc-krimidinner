import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import crime_classes_img from "@/assets/crime-classes-img.png";
import Rating from "@mui/material/Rating";
import { Button } from "@/components/button";

const useStyles = makeStyles((theme) => ({
  rating: {
    "& .css-jue3ft-MuiRating-root": {
      height: "100px",
      width: "100px",
      fontSize: "4rem",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default (): React.FC => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <div className="p-2 flex flex-col items-center">
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
          padding: "1rem",
        }}
      >
        WIE HAT EUCH DAS SPIEL GEFALLEN?
      </Typography>
      <Box
        sx={{
          "& > legend": { mt: 2 },
          backgroundColor: "#2C2C2C",
        }}
      >
        <Rating
          className={classes.rating}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          size="large"
        />
      </Box>
      <Button
        onClick={() => setIsNextRound(2)}
        variant="text"
        className="disabled:cursor-not-allowed rounded-[4px] bg-[#000] text-[#fff] border-white/10 border-[1px]"
        type="submit"
      >
        WEITER
      </Button>
    </div>
  );
};
