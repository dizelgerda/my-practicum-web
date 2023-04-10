import { Navigate, Outlet } from "react-router-dom";

function PrivateLayout({ loggedIn }) {

  if (loggedIn !== null) {
    if (loggedIn) return (<Outlet />);
    return (<Navigate to="/" replace />)
  }
  return null;
}

export default PrivateLayout;
