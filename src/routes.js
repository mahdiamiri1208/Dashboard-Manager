import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";


const routes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/users", element: <UserList /> },
  { path: "/details", element: <UserDetails /> },
];

export default routes;
