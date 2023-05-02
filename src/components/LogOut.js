import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AuthMenu() {
  let location = useLocation();
  useEffect(() => {}, [location]);

  const history = useHistory();
  let loggedInToken = localStorage.getItem("token");
  const logOut = (e) => {
    console.log("Logout");
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <span>
      {loggedInToken === null ? "" : <button onClick={logOut}>Logout</button>}
    </span>
  );
}
