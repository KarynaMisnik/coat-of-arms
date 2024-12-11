/*=== REACT HOOKS AND OTHERS ===*/
import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
/*=== MUI COMPONENTS ===*/
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
/*=== CUSTOM COMPONENTS ===*/
import Searchbar from "./Searchbar";

{
  /* Doesn't work in github pages, fixes nedded
import Randomizer from "./Randomizer";
*/
}

const navText = {
  color: "var(--white)",
  fontSize: "1.2rem",
  fontFamily: "var(--main-text)",
  fontWeight: 700,
};

const drawerWidth = 240;
const navItems = ["Home", "About"]; /* Add new nav items here */

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  {
    /* Side menu, mobile layout */
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: "var(--blue)",
        color: "var(--white)",
        height: "100%",
      }}
      {...navText}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
        }}
        {...navText}
      >
        <a href="/coat-of-arms/#/home" className="home-link-redirect">
          Finnish Emblem
        </a>
      </Typography>
      <Divider sx={{ background: "var(--white)" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <NavLink className="nav-link" to={`/${item.toLowerCase()}`}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
        {/* Use later
          <Randomizer regions={regions} />
          */}
      </List>
      {/* Possible to add other elemnts in menu drawer */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* MUI global component resets default browser style(done partly in css) */}
      <AppBar
        component="nav"
        sx={{
          background: "var(--blue)",
          borderBottom: "3px solid var( --white)",
        }}
      >
        <Toolbar>
          {/* hamburger menu computer screen size - hidden */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Logo navItems for computer screen size */}
          <Typography
            sx={{
              display: { xs: "flex", sm: "none", md: "none", xl: "none" },
              fontSize: {
                xs: ".5rem",
              },
            }}
            {...navText}
          >
            <a href="/coat-of-arms/#/home" className="home-link-redirect">
              Finnish Emblem
            </a>
          </Typography>
          {/* Logo navItems for computer screen size */}

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
            {...navText}
          >
            <a href="/coat-of-arms/#/home" className="home-link-redirect">
              Finnish Emblem
            </a>
          </Typography>
          {/* Mapping nav items as buttons, are hidden if mobile */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink className="nav-link" to={`/${item.toLowerCase()}`}>
                <Button
                  key={item}
                  sx={{
                    color: "var(--white)",
                    fontFamily: "var(--main-text)",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </Button>
              </NavLink>
            ))}
          </Box>
          {/* Use later
          <Randomizer regions={regions} />
          */}
          <Searchbar />
        </Toolbar>
      </AppBar>
      {/* Side menu, mobile layout */}
      <nav>
        <Drawer
          container={container}
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
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
