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

export const AmazomReview: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | null>(2);
  const navigate = useNavigate();

  return (
    <div className="p-2 bg-[#fff]/0  h-[95vh] flex flex-col items-center">
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
        <div
          className={
            "fixed backdrop-blur h-screen w-screen top-0, left-0, right-0 bottom-0 bg-white/10 flex justify-center items-center"
          }
        >
          <Card
            sx={{
              width: "324px",
              height: "238px",
              borderRadius: "8px",
              // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2rem 2rem",
              background: "#292929",
              // mt:6,
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
                color: "#fff",
              }}
            >
              VIELEN DANK!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "0.25px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              Wenn ihr möchtet könnt ihr die Bewertung auch auf Amazon posten,
              das würde uns sehr helfen. Falls nicht könnt ihr die Seite einfach
              schließen
            </Typography>
            {/* <Typography
            variant="h6"
            sx={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "16px",
              textAlign: "center",
              color: "#F24B59",
            }}
          >
            Zu Amazon
          </Typography> */}
            <Button
              onClick={() => {
                navigate(AppRoutes.review);
              }}
              variant="text"
              className="disabled:cursor-not-allowed"
              // disabled={!isValid || isSubmitting}
              type="submit"
            >
              Zu Amazon
            </Button>
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
