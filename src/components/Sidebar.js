import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ExtensionIcon from "@mui/icons-material/Extension";
import ForumIcon from "@mui/icons-material/Forum";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { blue } from "@mui/material/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import Section from "./Section";

const drawerWidth = 160;

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
    
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: 2,
          boxShadow: 1,
        }}
      >
        <AccountCircleIcon sx={{ fontSize: "3.5rem" }} />
        <Typography noWrap component="div" sx={{ fontSize: "1rem" }}>
          Ram Mohan
        </Typography>
        <Typography
          variant="body2"
          noWrap
          component="div"
          sx={{ fontSize: ".7rem" }}
        >
          rammohan2@gmail.com
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ marginTop: 2 }}>
        {["Dashboard", "Perks", "Addons", "FAQ", "Support"].map(
          (text, index) => (
            <ListItem key={text} sx={{ marginBottom: 2 }} disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#b5e5f9" },
                  marginRight: 2,
                  borderBottomRightRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              >
                <ListItemIcon sx={{ marginRight: 2, minWidth: "unset" }}>
                  {text === "Dashboard" ? (
                    <DashboardIcon
                      sx={{ color: blue[500], fontSize: "1.3rem" }}
                    />
                  ) : text === "Perks" ? (
                    <LoyaltyIcon
                      sx={{ color: blue[500], fontSize: "1.3rem" }}
                    />
                  ) : text === "Addons" ? (
                    <ExtensionIcon
                      sx={{ color: blue[500], fontSize: "1.3rem" }}
                    />
                  ) : text === "FAQ" ? (
                    <ForumIcon sx={{ color: blue[500], fontSize: "1.3rem" }} />
                  ) : (
                    <SupportAgentIcon sx={{ color: blue[500] }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ fontSize: "1.5rem" }} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <div className="flex justify-center items-center mt-8 text-blue-500">

      <button className="mt-auto ">Logout <PowerSettingsNewIcon  /></button>
      </div>
    </div>
  )


  return (
    <Box  
    sx={{ display: "flex" ,}}>
      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mx: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <Box
        component="nav"
        position={"sticky"}
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          marginTop: "50px",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "6.05rem",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main section  */}

      <Section />

      
    </Box>
  );
};

export default Sidebar;
