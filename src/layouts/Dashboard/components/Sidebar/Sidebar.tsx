import * as Separator from "@radix-ui/react-separator";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import Svg from "../../../../assets/vector";

import { useSidebarStore } from "../../../../store/sidebar";
import "./Sidebar.css";
import MenuItem from "./components/MenuItem/MenuItem";
import MenuItemAccordion from "./components/MenuItemAccordion/MenuItemAccordion";
import Subs from "./components/Subs/Subs";

export default function Sidebar() {
  const { isOpen } = useSidebarStore();

  return (
    <aside className={clsx(["sidebar", { "sidebar--closed": !isOpen }])}>
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <MenuItem
            to="/"
            icon={<Svg.Home.outline />}
            activeIcon={<Svg.Home.filled />}
            label="Home"
          />
          <MenuItem
            to="/explore"
            icon={<Svg.Explore.outline />}
            activeIcon={<Svg.Explore.filled />}
            label="Explore"
          />
          <MenuItem
            to="/shorts"
            icon={<Svg.Shorts.outline />}
            activeIcon={<Svg.Shorts.filled />}
            label="Shorts"
          />
          <MenuItem
            to="/tv"
            icon={<Svg.Tv.outline />}
            activeIcon={<Svg.Tv.filled />}
            label="TV Mode"
          />
          <Separator.Root className="separator" orientation="horizontal" />
          <MenuItem
            to="/history"
            icon={<Svg.History.outline />}
            activeIcon={<Svg.History.filled />}
            label="History"
          />
          <MenuItem
            to="/watch-later"
            icon={<Svg.WatchLater.outline />}
            activeIcon={<Svg.WatchLater.filled />}
            label="Watch Later"
          />{" "}
          <MenuItem
            to="/liked-videos"
            icon={<Svg.LikedVideos.outline />}
            activeIcon={<Svg.LikedVideos.filled />}
            label="Liked Videos"
          />
          <MenuItemAccordion
            to="/playlists"
            icon={<Svg.Playlists.outline />}
            activeIcon={<Svg.Playlists.filled />}
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
          <Separator.Root className="separator" orientation="horizontal" />
          <MenuItemAccordion
            to="/collections"
            icon={<Svg.Collections.outline />}
            label="Collections"
            activeIcon={<Svg.Collections.filled />}
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
          <MenuItemAccordion
            to="/subscriptions"
            icon={<Svg.Subs.outline />}
            label="Subscriptions"
            activeIcon={<Svg.Subs.filled />}
          >
            <Subs />
          </MenuItemAccordion>
          <Separator.Root className="separator" orientation="horizontal" />
        </ul>
      </nav>
    </aside>
  );
}
