import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import Svg from "../../../../../../assets/vector";
import { useSidebarStore } from "../../../../../../store/sidebar";

import "./TitleMenu.css";

export function TitleMenu() {
  const { toggleSidebar, isOpen } = useSidebarStore();

  return (
    <div className="header__title-menu">
      <button
        className="header__title-menu-button header__title-menu-button--hamburger"
        onClick={toggleSidebar}
      >
        <AccessibleIcon.Root label={isOpen ? "Close menu" : "Open menu"}>
          <Svg.Menu.outline />
        </AccessibleIcon.Root>
      </button>
      <a href="/" className="header__title-menu-link">
        <h1 className="header__title-menu-title">
          <AccessibleIcon.Root label="YouTube">
            <Svg.YouTube />
          </AccessibleIcon.Root>
        </h1>
      </a>
    </div>
  );
}
