import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Sidebar.css"

function Sidebar() {
  return (
    <>
      <h5 className="m-4 text-center fs-4 fw-bold">Space Omid</h5>
      <Nav className="flex-column text-start">
        <Link to="/dashboard" className="nav-link-custom">
          Dashboard
        </Link>
        <Link to="/users" className="nav-link-custom">
          User List
        </Link>
        <Link to="/details" className="nav-link-custom">
          User Detail
        </Link>
      </Nav>
    </>
  );
}

export default Sidebar;
