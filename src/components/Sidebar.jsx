import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {
  DashboardOutlined as DashboardIcon,
  GroupOutlined as UsersIcon,
  PersonSearchOutlined as DetailIcon,
  SatelliteAltOutlined as LogoIcon,
  LogoutOutlined as LogoutIcon,
} from "@mui/icons-material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AuthContext } from "../context/AuthContext";
import "../style/Sidebar.css";

function Sidebar({ isMobile = false, onLinkClick }) {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
    if (onLinkClick) onLinkClick();
  };

  const renderLink = (to, label, Icon) => (
    <NavLink
      to={to}
      onClick={onLinkClick}
      className={({ isActive }) =>
        `nav-link-custom ${!isLoggedIn ? "disabled-link" : ""} ${
          isActive ? "active-link" : ""
        }`
      }
    >
      <Icon sx={{ fontSize: 20 }} />
      {label}
    </NavLink>
  );

  return (
    <>
      <Nav className="d-flex flex-column" style={{ height: "100%" }}>
        <h5 className="mt-3 text-center fs-4 fw-bold">
          <LogoIcon sx={{ fontSize: 36 }} />
          <br />
          Space Omid
          <hr />
        </h5>
        <div className="d-flex flex-column gap-3 flex-grow-1 px-2">
          <div>
            <p
              className="ms-2 mb-1"
              style={{
                fontWeight: 700,
                fontSize: 12,
                color: "rgba(82, 82, 82, 0.51)",
              }}
            >
              Main
            </p>
            <div className="d-flex flex-column ms-3">
              {renderLink("/dashboard", "Dashboard", DashboardIcon)}
            </div>
          </div>

          <div>
            <p
              className="ms-2 mb-1"
              style={{
                fontWeight: 700,
                fontSize: 12,
                color: "rgba(82, 82, 82, 0.51)",
              }}
            >
              User Management
            </p>

            <div
              className="d-flex flex-column gap-1
            ms-3"
            >
              {renderLink("/users", "User List", UsersIcon)}
              {renderLink("/details", "User Detail", DetailIcon)}
            </div>
          </div>

          <div>
            <p
              className="ms-2 mb-1"
              style={{
                fontWeight: 700,
                fontSize: 12,
                color: "rgba(82, 82, 82, 0.51)",
              }}
            >
              Reports (Coming Soon)
            </p>
            <div className="d-flex flex-column ms-3">
              <div className="nav-link-custom disabled-link">
                <TrendingUpIcon /> Sales Report
              </div>
              <div className="nav-link-custom disabled-link">
                <SettingsAccessibilityIcon /> User Activity
              </div>
            </div>
          </div>

          <div>
            <p
              className="ms-2 mb-1"
              style={{
                fontWeight: 700,
                fontSize: 12,
                color: "rgba(82, 82, 82, 0.51)",
              }}
            >
              Settings (Coming Soon)
            </p>
            <div className="d-flex flex-column ms-3">
              <div className="nav-link-custom disabled-link">
                <ManageAccountsIcon /> Profile Settings
              </div>
              <div className="nav-link-custom disabled-link">
                <RoomPreferencesIcon /> App Preferences
              </div>
            </div>
          </div>
        </div>

        {isLoggedIn && (
          <div className="p-3">
            <button className="btn btn-danger w-100" onClick={handleLogout}>
              <LogoutIcon className="me-2" />
              Logout
            </button>
          </div>
        )}

        <div
          className="text-muted mb-2 "
          style={{ fontSize: 12 }}
        >
          <p className="d-flex justify-content-center align-items-center ">Powered by&nbsp;<strong> Mahdi Meydan miri</strong>&nbsp;<FavoriteIcon sx={{fontSize: 18, color: "rgba(40, 124, 250, 0.94)"}}/></p>
        </div>
      </Nav>
    </>
  );
}

export default Sidebar;
