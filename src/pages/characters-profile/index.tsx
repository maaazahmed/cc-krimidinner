import React from "react";
// import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Box from "@mui/material/Box";
import appCharcter from "@/assets/app-charcter.png";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { Button } from "@/components/button";
import { AppRoutes } from "@/constants/app-routes";
import { useNavigate } from "react-router-dom";

import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import CusSlider from "./slider"
// import { FullWidthTabs } from "@/components/tabs";
import CusSlider from "./slider";

import AspectRatio from "@mui/joy/AspectRatio";

import man_1 from "@/assets/man1.png";
import man_2 from "@/assets/man2.png";
import man_3 from "@/assets/man3.png";

// import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";
// import Card from "@mui/joy/Card";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

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
          size="sm"
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
              className={"h-[40px] w-[40px]"}
            />
          </AspectRatio>
        </Card>
      ))}
    </Box>
  );
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    // "& label.Mui-focused": {
    //   color: "#fff",
    //   width: "100%",
    // },
    // "& .MuiInput-underline:after": {
    //   borderBottomColor: "#f24b59",
    // },
    // "& .MuiOutlinedInput-root": {
    //   "& fieldset": {
    //     borderColor: "#f24b59",
    //   },
    //   "&:hover fieldset": {
    //     borderColor: "#f24b59",
    //   },
    //   "&.Mui-focused fieldset": {
    //     borderColor: "#f24b59",
    //   },
    // },
    "& .MuiBox-root": {
      padding: "0px",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box
      className={classes.profileContainer}
      sx={{ bgcolor: "background.paper", width: "100%" }}
    >
      <AppBar position="static">
        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: "#F24B59",
            },
          }}
          sx={{ mt: 0, background: "rgba(41, 41, 41, 1)" }}
          value={value}
          onChange={handleChange}
          //   indicatorColor="rgba(41, 41, 41, 0.7)"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            classes={{ selected: `bg-[red]` }}
            label="INFO"
            {...a11yProps(0)}
          />
          <Tab label="MOTTO" {...a11yProps(1)} />
          <Tab label="Kostüm" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        sx={{ padding: "0px" }}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box
            sx={{
              height: "290px",
              textAlign: "center",
              // background: "blue",
              width: "289px",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255,255,255, 0.9)",
                marginTop: "5rem",
              }}
            >
              Bruder des Dons und ewiger Zweiter. Alternder Playboy, der gerne
              das Geld ausgibt, das er nie verdient hat. Liebt schnelle Autos.
            </Typography>

            <Button
              onClick={() => navigate(AppRoutes.test_page)}
              variant="text"
              className="disabled:cursor-not-allowed "
              type="submit"
            >
              Zum Rollennheft
            </Button>
          </Box>
        </TabPanel>
       
      </SwipeableViews>
    </Box>
  );
}

// const useStyles = makeStyles((theme) => ({
//   ratingContainer: {
//     "& label.Mui-focused": {
//       color: "#fff",
//       width: "100%",
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "#f24b59",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "#f24b59",
//       },
//       "&:hover fieldset": {
//         borderColor: "#f24b59",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#f24b59",
//       },
//     },
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

export const CharactersProfile: React.FC = () => {
  //   const classes = useStyles();

  return (
    <div className="p-2 bg-[#fff]10 flex flex-col items-center">
      <h1 className="bg-background w-[100%]  text-2xl mt-2 border-white/50 border-[0px]  mx-3 px-5 text-white py-8 text-center rounded shadow-lg">
        Die Charaktere{" "}
      </h1>
      <Box
        // className={""}
        sx={{
          //   pt: "7rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 0.8,
          //   width:"100%"
        }}
      >
        <Card
          sx={{
            width: "380px",
            height: "572px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            background: "rgba(41, 41, 41, 1)",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            padding: "0rem 0rem",
            marginTop: 5,
            // justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                background: "#383838",
                width: "100%",
                height: 210,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                py: "1.2rem",
              }}
            >
              <img className="h-[125px] w-[125px]" src={appCharcter} alt="" />

              <Typography
                sx={{
                  width: "173px",
                  height: "34px",
                  background: "#F24B59",
                  // color:""
                  fontFamily: "roboto",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                Luigi Bastoni
              </Typography>
            </Box>
            <Box sx={{}}>
              <FullWidthTabs
                Custtom={() => {
                  return (
                    <Box
                      sx={{
                        height: "322px",
                        textAlign: "center",

                        // background: "blue",
                        width: "289px",
                        margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "rgba(255,255,255, 0.9)",
                          marginTop: "9rem",
                        }}
                      >
                        Bruder des Dons und ewiger Zweiter. Alternder Playboy,
                        der gerne das Geld ausgibt, das er nie verdient hat.
                        Liebt schnelle Autos.
                      </Typography>

                      <Button
                        // onClick={() => navigate(AppRoutes.test_page)}
                        variant="text"
                        className="disabled:cursor-not-allowed "
                        // type="submit"
                      >
                        Zum Rollennheft  
                      </Button>
                    </Box>
                  );
                }}
              />
            </Box>
          </Box>
        </Card>
        <Box sx={{ marginTop: "2rem" }}>
          <CarouselRatio/>
          {/* <CusSlider /> */}
        </Box>
      </Box>
    </div>
  );
};
