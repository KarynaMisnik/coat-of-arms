import * as React from "react";
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
import { NavLink } from "react-router-dom";

const navText = {
  color: "var(--white)",
  fontSize: "1.2rem",
  fontFamily: "var(--main-text)",
  fontWeight: 700,
};

const drawerWidth = 240;
const navItems = ["Home", "About", "Quiz"];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
      <Typography variant="h6" sx={{ my: 2 }} {...navText}>
        Finnish Emblem
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
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{
          background: "var(--blue)",
          borderBottom: "3px solid var( --white)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ display: { xs: "flex", sm: "none", md: "none", xl: "none" } }}
            {...navText}
          >
            Finnish Emblem
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            {...navText}
          >
            Finnish Emblem
          </Typography>
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
        </Toolbar>
      </AppBar>
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
