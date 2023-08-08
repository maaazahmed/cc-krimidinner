import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { Button } from "@/components/button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { FaTshirt } from "react-icons/fa";
import { IoGlassesOutline } from "react-icons/io5";
import { GiSandal } from "react-icons/gi";

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


  export const FolderList: React.FC<Props> = () => {
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