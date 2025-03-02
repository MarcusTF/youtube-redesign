import Feed from "./compponents/Feed/Feed";
import InCaseYouMissed from "./compponents/InCaseYouMissed/InCaseYouMissed";
import Suggestions from "./compponents/Suggestions/Suggestions";

import "./MainFeed.css";

export default function MainFeed() {
  return (
    <div className="main-feed">
      <InCaseYouMissed />
      <Feed />
      <Suggestions />
      {/* <Shorts /> */}
    </div>
  );
}
