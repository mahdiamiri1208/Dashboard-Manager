import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useRoutes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import routes from "../routes";
import LoginModal from "./LoginModal";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

export default function AppContent() {
  const { token } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const routeElements = useRoutes(routes);

  useEffect(() => {
    if (token && location.pathname === "/") {
      navigate("/dashboard", { replace: true });
    }
  }, [token, location.pathname, navigate]);

  return (
    <MainLayout>
      {!token ? (
        <Home onLoginClick={() => setShowLogin(true)} />
      ) : (
        routeElements
      )}
      <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
    </MainLayout>
  );
}
