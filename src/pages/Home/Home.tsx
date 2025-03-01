import { HomeTagList } from "./components/HomeTagList/HomeTagList";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <HomeTagList />
      {/* <MainFeed /> */}
    </div>
  );
}
