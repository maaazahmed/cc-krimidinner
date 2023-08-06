import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";

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

export default (): React.FC => {

  const classes = useStyles();

  return (
    <Card
      className={classes.cardPlayer}
      sx={{
        bgcolor: "#292929",
        width: "332px",
        padding: "1rem 3rem",
        // paddingTop:"24px",
        height: "311px",
        borderRadius: "4px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
      }}
    >
        <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          fontSize: "20px",
          color: "#ffffff",
        //   marginTop: "1rem",
          fontFamily: "Roboto",
          textAlign:"center",
        //   padding:"2rem"
        }}
      >
        Die Spieler können sich nun ihre Ziele für die Runde durchlesen.
      </Typography>
      {/* <Box
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
      </Box> */}
    </Card>
  );
};
