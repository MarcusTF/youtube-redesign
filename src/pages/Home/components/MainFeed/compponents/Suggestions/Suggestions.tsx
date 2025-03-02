import { useRef, useState } from "react";
import Svg from "../../../../../../assets/vector";
import VideoCard from "../../../../../../components/VideoCard/VideoCard";
import { useGetInCaseYouMissed } from "../../../../../../services/api/api";

import clsx from "clsx";
import { bemModifiers } from "../../../../../../services/utilities";
import "./Suggestions.css";

export default function Suggestions() {
  const [closed, setClosed] = useState(false);
  const [showMore, setShowMore] = useState<boolean | null>(null);

  const videoListRef = useRef<HTMLUListElement>(null);

  const { data, isLoading } = useGetInCaseYouMissed({
    page: 1,
    perPage: 4,
    tag: "suggested",
  });

  return (
    <div
      className={clsx("suggestions", {
        "show-more": showMore,
        closed,
      })}
    >
      <div className="suggestions__header">
        <h2>In Case You Missed</h2>
        <div className="suggestions__actions">
          <button
            className={bemModifiers("suggestions__button", [
              "close",
              { hidden: showMore },
            ])}
            onClick={() => setClosed(true)}
          >
            <Svg.Close /> Not interested
          </button>
          <button
            className={bemModifiers("suggestions__button", [
              "show-more",
              { selected: showMore },
            ])}
            onClick={() => setShowMore(true)}
          >
            <Svg.ThumbsUp /> Show me more
          </button>
        </div>
      </div>
      <ul ref={videoListRef} className="suggestions__videos">
        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <VideoCard key={index} loading={isLoading} />
          ))}
        {data?.data?.data?.map((video) => (
          <li key={video.id}>
            <VideoCard key={video.id} {...video} loading={isLoading} />
          </li>
        ))}
      </ul>
    </div>
  );
}
