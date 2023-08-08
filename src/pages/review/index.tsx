import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import crime_classes_img from "@/assets/crime-classes-img.png";
import Rating from "@mui/material/Rating";
import { Button } from "@/components/button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/constants/app-routes";

const useStyles = makeStyles((theme) => ({
  ratingContainer: {
    "& label.Mui-focused": {
      color: "#f24b59",
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

export const ReviewComment: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | null>(2);
  const navigate = useNavigate();


  return (
    <div className="p-2 bg-[#fff]/10 h-[95vh] flex flex-col items-center">
      <Box
        className={classes.ratingContainer}
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
        <div
          className={
            "fixed backdrop-blur h-screen w-screen top-0, left-0, right-0 bottom-0 bg-white/10 flex justify-center items-center"
          }
        >
        <Card
          sx={{
            width: "324px",
            height: "284px",
            borderRadius: "8px",
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2rem 2rem",
            background: "#292929",
            // mt: 6,
            boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "16px",
              textAlign: "center",
              color: "#f24b59",
            }}
          >
            JETZT SIND WIR NEUGIERIG{" "}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Roboto",
              fontWeight: 400,
              marginTop: 1,
              marginBottom: 2,
              fontSize: "14px",
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            Willst du uns etwas wissen lassen?
          </Typography>
          <Box sx={{ width: "100%", marginBottom: 2 }}>
            <TextField
              sx={{ width: "100%" }}
              inputProps={{ style: { width: "100%",color:"#fff" } }}
              id="outlined-multiline-static"
              label="Dein Feedback"
              multiline
              rows={4}
              defaultValue="Dein Feedback "
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "16px",
              textAlign: "center",
              color: "#F24B59",
              textTransform:"uppercase",
              cursor:"pointer"
            }}
            onClick={()=> navigate(AppRoutes.invite_page)}
          >
            Speichern{" "}
          </Typography>
        </Card>
        </div>
      </Box>
      <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Button
          onClick={() => setIsNextRound(2)}
          variant="text"
          className="disabled:cursor-not-allowed rounded-[4px] bg-[#f24b59] text-black  "
          type="submit"
        >
          WEITER
        </Button>
      </Box>
    </div>
  );
};
