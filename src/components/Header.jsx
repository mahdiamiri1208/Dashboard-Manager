import * as React from "react";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import avatarImg from "../assets/avatar.jpg";
import defaultAvatar from "../assets/default-avatar.png";
import Form from "react-bootstrap/Form";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";
import { useMemo, useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import "../style/Header.css";

function Header({ onMenuClick, setMobileMenuOpen }) {
  const location = useLocation();
  const { token  } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(
    window.innerWidth < 576
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
      setIsVerySmallScreen(window.innerWidth < 576);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageTitle = useMemo(() => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/users":
        return "User List";
      case "/details":
        return "User Detail";
      default:
        return "Space Omid";
    }
  }, [location.pathname]);

  return (
    <header className="header" style={{ boxShadow: "0 0 15px rgba(45, 45, 45, 0.35)" }}>
      <div className="d-flex align-items-center justify-content-between w-100 h-100 px-3 py-2">
        <div className="d-flex align-items-center gap-2">
          {isMobile && (
            <MenuIcon onClick={onMenuClick} style={{ cursor: "pointer", fontSize: 34 }} />
          )}
          <h5 className="m-0 fw-bold">{pageTitle}</h5>
        </div>

        <div className="d-flex align-items-center gap-3">
          {!isVerySmallScreen && (
            <Form className="search-container">
              <div className="search-box-wrapper">
                <SearchIcon className="search-icon" />
                <Form.Control
                  type="search"
                  placeholder="search anything..."
                  className="search-box"
                  aria-label="Search"
                  style={{ paddingLeft: "2.3rem" }}
                />
              </div>
            </Form>
          )}

          {token  ? (
            <Badge
              badgeContent={3}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "10px",
                  minWidth: "18px",
                  height: "18px",
                  padding: "4px",
                },
              }}
            >
              <NotificationsIcon sx={{ fontSize: 30 }} />
            </Badge>
          ) : (
            <NotificationsIcon sx={{ fontSize: 30 }} />
          )}

          <Avatar alt="avatar" src={token  ? avatarImg : defaultAvatar} />
        </div>
      </div>
    </header>
  );
}

export default Header;
