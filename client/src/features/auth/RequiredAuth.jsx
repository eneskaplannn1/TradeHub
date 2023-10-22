import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequiredAuth({ allowedRoles, children }) {
  const user = useSelector((store) => store.auth.user);
  const location = useLocation();
  return allowedRoles.includes(user?.role) ? (
    children
  ) : user ? (
    <Navigate to="/unAuthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequiredAuth;
