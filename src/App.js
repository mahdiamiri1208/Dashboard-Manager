import { useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useRoutes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginModal from "./components/LoginModal";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import routes from "./routes";

function AppRoutes() {
  return useRoutes(routes);
}

function AppContent() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn && location.pathname === "/") {
      navigate("/dashboard", { replace: true });
    }
  }, [isLoggedIn, location.pathname, navigate]);

  return (
    <MainLayout>
      {!isLoggedIn ? (
        <Home onLoginClick={() => setShowLogin(true)} />
      ) : (
        <AppRoutes />
      )}

      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={() => {
          setIsLoggedIn(true);
          setShowLogin(false);
        }}
      />
    </MainLayout>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
