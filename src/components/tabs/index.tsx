import React from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/constants/app-routes";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { Button } from "@/components/button";

import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { FaTshirt } from "react-icons/fa";
import { IoGlassesOutline } from "react-icons/io5";
import { GiSandal } from "react-icons/gi";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  folderList: {
    // backgroundColor: "yellow",
    // overflow: "hidden",

    ".MuiListItem-root": {
      // disablePadding: true
      backgroundColor: "#f24b59",
    },
    ".MuiLBox-root": {
      overflow: "hidden",
      padding: "0px",
      // disablePadding: true
      // backgroundColor: "#f24b59",
    },
    "& .MuiListItemText-primary": {
      color: "#fff",
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "Roboto",
      // textAlign: "center",
      width: "150px",
      // background: "red",
    },
    "& .MuiListItemText-root": {
      //  marginLeft:30,
      textAlign: "center",
    },
    "& .MuiListItemText-secondary": {
      color: "#fff",
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "Roboto",
      // textAlign: "center",
      width: "150px",
    },
    "& .MuiListItemAvatar-root": {
      padding: "1rem 1rem",
    },
    "& .css-2s90m6-MuiAvatar-root": {
      width: "60px",
      height: "60px",
      backgroundColor: "#f24b59",
      //   height:"300px"
    },

    // "$.css-1p823my-MuiListItem-root"

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
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function FolderList() {
  const classes = useStyles();

  return (
    <List
      className={classes.folderList}
      sx={{ width: "100%" }}
      disablePadding={true}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaTshirt className="text-[30px] text-[#272727]" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ein lockeres Hemd" secondary="mit Anzughose" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <IoGlassesOutline className="text-[30px] text-[#272727]" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Hosenträger und" secondary="eine Zigarre" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GiSandal className="text-[30px] text-[#272727]" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="schwarze oder braune" secondary="Lederschuhe" />
      </ListItem>
      {/* <ListItem>
       
      </ListItem> */}
    </List>
  );
}

// export const FullWidthTabs: React.FC<Props> = ({ charchter ,Custtom}) => {
 const FullWidthTabs: React.FC<Props> = ({ charchter ,Custtom}) => {
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
      //   className={classes.profileContainer}
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
            classes={{ selected: `bg-[red] ` }}
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
          {/* <Box
            sx={{
              height: "420px",
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
          </Box> */}
          <Custtom/>
        </TabPanel>
        {charchter ? (
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Box
              sx={{
                // height: "290px",
                height: "420px",

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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#ffffff",
                  marginTop: "9rem",
                }}
              >
                 „Wenn das Leben dir Zitronen gibt, mach Limoncello draus!”
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
        ) : null}
        {charchter ? (
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Box
              sx={{
                height: "424px",
                // background: "blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "1.5rem",
                paddingBottom: "5px",
                flexDirection: "column",
              }}
            >
              <FolderList />
              <Button
                // onClick={() => navigate(AppRoutes.test_page)}
                variant="text"
                className="disabled:cursor-not-allowed "
                type="submit"
              >
                Zum Rollennheft
              </Button>
              {/* <ListItemText
          primary="Zum Rollennheft"
          sx={{
            color: "#f24b59 !important",
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Roboto",
            textAlign: "center",
          }}
        /> */}
            </Box>
          </TabPanel>
        ) : null}
      </SwipeableViews>
    </Box>
  );
};
