import { ClassValue } from "clsx";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { bemModifiers } from "../../../../../../services/utilities";

import "./MenuItem.css";

interface MenuItemProps {
  to: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  label: string;
  modifier?: ClassValue | ClassValue[];
}

export const MenuItem: React.FC<MenuItemProps> = ({
  to,
  icon,
  activeIcon,
  label,
  modifier,
}) => {
  const baseRouteName = to.replace(/^\//, "").replace(/\//g, "-") || "home";
  const active = useLocation().pathname === to;

  return (
    <li className="sidebar-item">
      <NavLink
        to={to}
        className={bemModifiers("sidebar-link", [baseRouteName, modifier])}
      >
        {active && (
          <div className="sidebar-icon sidebar-icon--active">
            {activeIcon || icon}
          </div>
        )}
        {!active && <div className="sidebar-icon">{icon}</div>}
        <span className="sidebar-text">{label}</span>
      </NavLink>
    </li>
  );
};

export default MenuItem;
