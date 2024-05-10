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
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Dummy from "./dummy";
import Welcome from "./welcome";
import ViewOrder from "./viewOrdesDialog";
import YourComp from "./anotherDummy";
import UpdateMenuDialog from "./updateMenuDialog";
const drawerWidth = 200;

export default function PermanentDrawerLeft() {
  const [selected, setSelected] = useState("");
  const options = ["View orders", "Update menu", "Delete menu", "Logout"];

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
        <Toolbar className="nav-color">
          <Typography variant="h6" noWrap component="div">
            Restaurant Dashboard
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
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={text}
                    onClick={(e) => handleClick(e)}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {selected === options[0] ? (
          <ViewOrder />
        ) : selected === options[1] ? (
          <UpdateMenuDialog />
        ) : selected === options[2] ? (
          <Dummy />
        ) : selected === options[3] ? (
          <Dummy />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
