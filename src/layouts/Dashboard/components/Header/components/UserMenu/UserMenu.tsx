import ProfilePhoto from "../../../../../../assets/raster/profilephoto.png";
import Svg from "../../../../../../assets/vector";

import "./UserMenu.css";

export const UserMenu = () => {
  return (
    <div className="header__user-menu">
      <button className="header__user-menu-button">
        <Svg.CirclePlus />
      </button>
      <button className="header__user-menu-button">
        <Svg.Bell />
      </button>
      <button className="header__user-menu-button">
        <Svg.Gear />
      </button>
      <button className="header__user-menu-button header__user-menu-button--profile">
        <img src={ProfilePhoto} alt="User: Juxtaposed" />
      </button>
    </div>
  );
};
