import "./Navbar.css";

import LogoutIcon from "../../assets/logoutIcon.svg";
import BMBIIcon from "../../assets/BMBI.png";
import NotifyIcon from "../../assets/Notify.png";
import UserIcon from "../../assets/User.png";

import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Navbar() {
  const { dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar-con">
      <div className="navbar-title">Helpdesk</div>
      <div
        className="navbar-nav"
        style={{ display: "flex", flexDirection: "row", gap: "10px" }}
      >
        <img src={BMBIIcon} alt="button-group" />
        <img src={NotifyIcon} alt="notify-icon" />
        <img src={UserIcon} alt="user-icon" />
        <img src={LogoutIcon} alt="logout-icon" onClick={handleLogout} />
      </div>
    </div>
  );
}
