import ProfilePhoto from "../../../../../../assets/raster/profilephoto.png";
import Svg from "../../../../../../assets/vector";
import { Notifications } from "./components/Notifications/Notifications";

import "./UserMenu.css";

export const UserMenu = () => {
  return (
    <div className="header__user-menu">
      <button className="header__user-menu-button">
        <Svg.Add.outline />
      </button>
      <Notifications />
      <button className="header__user-menu-button">
        <Svg.Settings.outline />
      </button>
      <button className="header__user-menu-button header__user-menu-button--profile">
        <img src={ProfilePhoto} alt="User: Juxtaposed" />
      </button>
    </div>
  );
};
