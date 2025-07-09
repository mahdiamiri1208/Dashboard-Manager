import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import SelectedUserDetails from "./components/SelectedUserDetails";


const routes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/users", element: <UserList /> },
  { path: "/details", element: <UserDetails /> },
  { path: "/details/user/:id", element: <SelectedUserDetails /> },

];

export default routes;
