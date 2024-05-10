import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ element }) => {
  const auth = useSelector((state) => state.auth.isLoggin);
  return !auth ? <Navigate to={"/login"} /> : element;
};

export default ProtectedRoutes;
