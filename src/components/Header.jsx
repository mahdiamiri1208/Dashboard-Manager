import * as React from "react";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import avatarImg from "../assets/avatar.jpg";
import defaultAvatar from "../assets/default-avatar.png";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
import { useMemo, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import "../style/Header.css";

function Header() {
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);

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
    <header className="header shadow">
      <div className="d-flex align-items-center justify-content-between w-100">
        <h4 className="m-3">{pageTitle}</h4>
        <div className="d-flex align-items-center gap-3 p-3">
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

          {isLoggedIn ? (
            <Badge
              badgeContent={3}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "10px",
                  minWidth: "16px",
                  height: "16px",
                  padding: "6px",
                },
              }}
            >
              <NotificationsIcon sx={{ fontSize: 28 }} />
            </Badge>
          ) : (
            <NotificationsIcon sx={{ fontSize: 30 }} />
          )}

          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={isLoggedIn ? avatarImg : defaultAvatar}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
