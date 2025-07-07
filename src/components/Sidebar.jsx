import { Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import SatelliteAltOutlinedIcon from "@mui/icons-material/SatelliteAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../style/Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <h5 className="mt-3 text-center fs-4 fw-bold">
        <SatelliteAltOutlinedIcon sx={{ fontSize: 36 }} />
        <br />
        Space Omid
        <hr />
      </h5>
      <Nav className="d-flex flex-column justify-content-between h-75">
        <div className="d-flex flex-column gap-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link-custom ${!isLoggedIn ? "disabled-link" : ""} ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <DashboardOutlinedIcon className="me-2" /> Dashboard
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `nav-link-custom ${!isLoggedIn ? "disabled-link" : ""} ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <GroupOutlinedIcon className="me-2" /> User List
          </NavLink>

          <NavLink
            to="/details"
            className={({ isActive }) =>
              `nav-link-custom ${!isLoggedIn ? "disabled-link" : ""} ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <PersonSearchOutlinedIcon className="me-2" /> User Detail
          </NavLink>
        </div>
        {isLoggedIn && (
          <div className="p-3">
            <button className="btn btn-danger w-100" onClick={handleLogout}>
              <LogoutOutlinedIcon className="me-2" />
              Logout
            </button>
          </div>
        )}
      </Nav>
    </>
  );
}

export default Sidebar;
