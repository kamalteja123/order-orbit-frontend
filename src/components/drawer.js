import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dummy from "./dummy";
import ViewOrder from "./viewOrdesDialog";
import UpdateMenuDialog from "./updateMenuDialog";
import AddMenuDialog from "./addMenuDialog";

const drawerWidth = 200;

export default function PermanentDrawerLeft() {
  const [selected, setSelected] = useState("");
  const options = [
    { option: "View orders", icon: "View_cozy" },
    { option: "Add item", icon: "add" },
    { option: "Update menu", icon: "Edit" },
    { option: "Delete menu item", icon: "Delete" },
  ];

  function handleClick(event) {
    setSelected(event.currentTarget.innerText);
    console.log(selected);
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar className="nav-color text-black">
          <Typography variant="h6" noWrap component="div">
            Restaurant Dashboard
            <span className=" absolute right-12 top-1/2 -translate-y-1/2 text-black material-symbols-outlined hover:scale-105">
              {" "}
              logout
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {options.map((text, index) => (
              <ListItem
                className=" hover:shadow-lg"
                key={text.option}
                disablePadding
              >
                <ListItemButton>
                  <span className="material-symbols-outlined pr-3">
                    {text.icon}
                  </span>
                  <ListItemText
                    primary={text.option}
                    onClick={(e) => handleClick(e)}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        {selected === options[0].option ? (
          <ViewOrder />
        ) : selected === options[1].option ? (
          <AddMenuDialog />
        ) : selected === options[2].option ? (
          <UpdateMenuDialog />
        ) : selected === options[3].option ? (
          <Dummy />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
