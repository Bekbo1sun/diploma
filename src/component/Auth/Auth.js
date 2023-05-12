import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import "./Auth.css"
import { NavLink } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          <div className="img-container">
            <img
              src={
                user?.photoURL
              }
              alt="Placeholder"
            />
            <div className="img-menu">
              <NavLink to="/support">SupportPage</NavLink>
              <NavLink to="/orders">Orders</NavLink>
              <NavLink to="/profile">Your Profile</NavLink>
              <p>Coming Soon!</p>
              <button onClick={logOut}>Sign out</button>
            </div>
          </div>
        </span>
      ) : (
        <span className="LogOut-img">
          <div className="img-container">
            <img
              src={
                user?.photoURL ||
                "https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-3.jpg"
              }
              alt="Placeholder"
            />
            <div className="img-menu">
              <NavLink to="/support">SupportPage</NavLink>
              <NavLink to="/orders">Orders</NavLink>
              <NavLink to="/profile">Your Profile</NavLink>
              <button onClick={logIn}>Sign in</button>
            </div>
          </div>
        </span>
      )}
    </div>
  );
}