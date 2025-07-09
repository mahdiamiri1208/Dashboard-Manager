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
  const { token } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
        <AppRoutes />
      )}

      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
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
