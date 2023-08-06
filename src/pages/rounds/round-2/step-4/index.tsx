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
    <div className="p-2 flex flex-col items-center">
      <Card
        className={classes.cardPlayer}
        sx={{
          bgcolor: "#292929",
          // width: "332px",
          width: "324px",
          padding: "0rem 2rem",
          // paddingTop:"24px",
          height: "238px",
          borderRadius: "4px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            color: "#ffffff",
            //   marginTop: "1rem",
            fontFamily: "Roboto",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          VIELEN DANK!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            color: "#ffffff",
            //   marginTop: "1rem",
            fontFamily: "Roboto",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Wenn ihr möchtet könnt ihr die Bewertung auch auf Amazon posten, das
          würde uns sehr helfen. Falls nicht könnt ihr die Seite einfach
          schließen
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            color: "#F24B59",
            //   marginTop: "1rem",
            fontFamily: "Roboto",
            textAlign: "center",
            padding: "1rem",
            textTransform:"uppercase"
          }}
        >
          Zu Amazon
        </Typography>
      </Card>
    </div>
  );
};
