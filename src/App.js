import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginModal from "./components/LoginModal";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <MainLayout>
        {!isLoggedIn ? (
          <>
            <p>You must log in to view the information.</p>
            <button
              className="btn btn-primary mt-3"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<p>Welcome to Dashboard</p>} />
            <Route path="/users" element={<p>User List (Coming Soon)</p>} />
            <Route path="/details" element={<p>User Details (Coming Soon)</p>} />
            {/* می‌تونی روت‌های بیشتری هم اضافه کنی */}
          </Routes>
        )}
      </MainLayout>

      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={() => {
          setIsLoggedIn(true);
          setShowLogin(false);
        }}
      />
    </Router>
  );
}

export default App;
