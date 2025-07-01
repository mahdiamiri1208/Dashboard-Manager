import * as React from "react";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avatarImg from "../assets/avatar.jpg";
import "../style/Header.css";

function Header() {
  return (
    <header className="header pe-4 gap-2">
      <NotificationsIcon sx={{ fontSize: 30 }} />
      <Avatar
        sx={{ width: 35, height: 35 }}
        alt="m"
        src={avatarImg}
      />
    </header>
  );
}

export default Header;
