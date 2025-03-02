/// <reference types="vite-plugin-svgr/client" />

import Bell from "./bell.svg?react";
import Chevron from "./chevron.svg?react";
import CirclePlus from "./circlePlus.svg?react";
import Clock from "./clock.svg?react";
import Close from "./close.svg?react";
import Collection from "./collection.svg?react";
import Compass from "./compass.svg?react";
import Gear from "./gear.svg?react";
import Hamburger from "./hamburger.svg?react";
import History from "./history.svg?react";
import House from "./house.svg?react";
import HouseOutline from "./houseoutline.svg?react";
import MagnifyingGlass from "./magnifyingGlass.svg?react";
import MenuDots from "./menudots.svg?react";
import Mic from "./mic.svg?react";
import Options from "./options.svg?react";
import Playlist from "./playlist.svg?react";
import Remote from "./remote.svg?react";
import ShortsFilled from "./shorts.filled.svg?react";
import Shorts from "./shorts.svg?react";
import Subscriptions from "./subscriptions.svg?react";
import ThumbsUp from "./thumbsUp.svg?react";
import Verified from "./verified.svg?react";
import Youtube from "./youtube.svg?react";

export const Svg = {
  Bell,
  Chevron,
  CirclePlus,
  Clock,
  Close,
  Collection,
  Compass,
  Gear,
  Hamburger,
  History,
  House,
  HouseOutline,
  MagnifyingGlass,
  MenuDots,
  Mic,
  Options,
  Playlist,
  Remote,
  Shorts,
  ShortsFilled,
  Subscriptions,
  ThumbsUp,
  Verified,
  Youtube,
};

export type SvgComponent = (typeof Svg)[keyof typeof Svg];

export default Svg;
