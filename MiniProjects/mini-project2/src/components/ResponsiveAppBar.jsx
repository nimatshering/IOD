"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/UserContext"; // Adjust path if needed

function ResponsiveAppBar() {
  const router = useRouter();
  const { currentUser, handleUpdateUser } = useUserContext();

  const pages = [
    { name: "Home", route: "/" },
    { name: "Courses", route: "/courses" },
    ...(currentUser?.email
      ? [
          { name: "Admin", route: "/admin" },
          { name: "Logout", route: "/logout" },
        ]
      : [{ name: "Login", route: "/login" }]),
  ];

  const settings = [{ name: "Profile", route: "/profile" }];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Handles menu item clicks (logout + redirect, or navigate)
  const handleNavClick = (route, name) => {
    if (name === "Logout") {
      handleUpdateUser({}); // Clear user state
      router.push("/login"); // Redirect to login
    } else {
      router.push(route); // Normal navigation
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        mr: 12,
        height: "100px",
        display: "flex", // always show
        textDecoration: "none",
      }}
    >
      <Box px={10} sx={{ width: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            height: "100px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // space items apart
            gap: 4,
          }}
        >
          {/* Logo for desktop */}
          <Typography
            noWrap
            component="a"
            variant="h3"
            href="/"
            sx={{
              fontWeight: 900,
              letterSpacing: ".2rem",
              color: "green",
              textDecoration: "none",
            }}
          >
            MENTOR
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map(({ name, route }) => (
                <MenuItem
                  key={name}
                  onClick={() => handleNavClick(route, name)}
                >
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    {name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo + Title */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <HomeFilledIcon sx={{ mr: 1, color: "black" }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              MENTOR
            </Typography>
          </Box>

          {/* Desktop Menu Items */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map(({ name, route }) => (
              <Button
                key={name}
                onClick={() => handleNavClick(route, name)}
                sx={{
                  my: 2,
                  color: "black",
                  textTransform: "capitalize",
                  fontSize: "18px",
                  display: "block",
                }}
              >
                {name}
              </Button>
            ))}
          </Box>

          {/* Register Button */}
          <Button
            onClick={() => router.push("/register")}
            sx={{
              my: 2,
              px: 4,
              color: "white",
              textTransform: "capitalize",
              fontSize: "18px",
              display: "block",
              backgroundColor: "success.main",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "success.dark",
              },
            }}
          >
            Register
          </Button>
          {/* User Avatar Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ name, route }) => (
                <MenuItem
                  key={name}
                  onClick={() => handleNavClick(route, name)}
                >
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    {name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;
