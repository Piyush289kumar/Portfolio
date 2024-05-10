import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTpes from "prop-types";
const ProtectedRoutes = ({ element }) => {
  const auth = useSelector((state) => state.auth.isLoggin);
  return !auth ? <Navigate to={"/login"} /> : element;
};

ProtectedRoutes.prototype = {
  element: PropTpes.element.isRequired,
}; 

export default ProtectedRoutes;
