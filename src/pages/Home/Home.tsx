import { HomeTagList } from "./components/HomeTagList/HomeTagList";
import MainFeed from "./components/MainFeed/MainFeed";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <HomeTagList />
      <MainFeed />
    </div>
  );
}
