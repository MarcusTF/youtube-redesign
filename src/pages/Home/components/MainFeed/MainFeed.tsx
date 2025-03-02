import Feed from "./compponents/Feed/Feed";
import InCaseYouMissed from "./compponents/InCaseYouMissed/InCaseYouMissed";

import "./MainFeed.css";

export default function MainFeed() {
  return (
    <div className="main-feed">
      <InCaseYouMissed />
      <Feed />
      {/* <Suggestions />
      <Shorts /> */}
    </div>
  );
}
