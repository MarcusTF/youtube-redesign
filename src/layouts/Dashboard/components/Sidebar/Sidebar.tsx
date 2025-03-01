import * as Separator from "@radix-ui/react-separator";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import Svg from "../../../../assets/vector";

import { useSidebarStore } from "../../../../store/sidebar";
import "./Sidebar.css";
import MenuItemAccordion from "./components/MenuItemAccordion/MenuItemAccordion";

export default function Sidebar() {
  const { isOpen } = useSidebarStore();

  return (
    <aside className={clsx(["sidebar", { "sidebar--closed": !isOpen }])}>
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <NavLink to="/" className="sidebar-link sidebar-link--home">
              <Svg.House className="sidebar-icon sidebar-icon--active" />
              <Svg.HouseOutline className="sidebar-icon" />
              <span className="sidebar-text">Home</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              to="/explore"
              className="sidebar-link sidebar-link--explore"
            >
              <Svg.Compass />
              <span className="sidebar-text">Explore</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/shorts" className="sidebar-link sidebar-link--shorts">
              <Svg.Shorts />
              <span className="sidebar-text">Shorts</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/tv" className="sidebar-link sidebar-link--tv">
              <Svg.Remote />
              <span className="sidebar-text">TV Mode</span>
            </NavLink>
          </li>
          <Separator.Root className="separator" orientation="horizontal" />
          <li className="sidebar-item">
            <NavLink
              to="/history"
              className="sidebar-link sidebar-link--history"
            >
              <Svg.History />
              <span className="sidebar-text">History</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              to="/watch-later"
              className="sidebar-link sidebar-link--watch-later"
            >
              <Svg.Clock />
              <span className="sidebar-text">Watch Later</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              to="/liked-videos"
              className="sidebar-link sidebar-link--liked-videos"
            >
              <Svg.ThumbsUp />
              <span className="sidebar-text">Liked Videos</span>
            </NavLink>
          </li>
          <li className="sidebar-item sidebar-item--accordion">
            <MenuItemAccordion
              to="/playlists"
              icon={<Svg.Playlist />}
              iconActive={<Svg.Playlist />}
              label="Playlists"
            >
              <ul>
                <li className="sidebar-item">
                  <NavLink to="/playlists/1">Playlist 1</NavLink>
                </li>
                <li className="sidebar-item">
                  <NavLink to="/playlists/2">Playlist 2</NavLink>
                </li>
                <li className="sidebar-item">
                  <NavLink to="/playlists/3">Playlist 3</NavLink>
                </li>
                <li className="sidebar-item">
                  <NavLink to="/playlists/4">Playlist 4</NavLink>
                </li>
              </ul>
            </MenuItemAccordion>
          </li>
          <Separator.Root className="separator" orientation="horizontal" />
          <li className="sidebar-item sidebar-item--accordion">
            <MenuItemAccordion
              to="/collections"
              icon={<Svg.Collection />}
              label="Collections"
            >
              <ul>
                <li className="sidebar-item">
                  <NavLink to="/collections/1">Gaming</NavLink>
                </li>
                <li className="sidebar-item">
                  <NavLink to="/collections/2">Playlist 2</NavLink>
                </li>
                <li className="sidebar-item">
                  <NavLink to="/collections/3">Playlist 3</NavLink>
                </li>
                <li className="sidebar-item">
                  <NavLink to="/collections/4">Playlist 4</NavLink>
                </li>
              </ul>
            </MenuItemAccordion>
          </li>
          <li className="sidebar-item sidebar-item--accordion">
            <MenuItemAccordion
              to="/subscriptions"
              icon={<Svg.Subscriptions />}
              label="Subscriptions"
            >
              :)
            </MenuItemAccordion>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
