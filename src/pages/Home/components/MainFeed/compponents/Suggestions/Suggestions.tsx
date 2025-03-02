import { useRef, useState } from "react";
import Svg from "../../../../../../assets/vector";
import VideoCard from "../../../../../../components/VideoCard/VideoCard";
import { useGetSuggestions } from "../../../../../../services/api/api";

import clsx from "clsx";
import { bemModifiers } from "../../../../../../services/utilities";
import "./Suggestions.css";

export default function Suggestions() {
  const [closed, setClosed] = useState(false);
  const [showMore, setShowMore] = useState<boolean | null>(null);

  const videoListRef = useRef<HTMLUListElement>(null);

  const { data, isLoading } = useGetSuggestions({
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
        <h2>Suggestions based on recent watches</h2>
        <div className="suggestions__actions">
          <button
            className={bemModifiers("suggestions__button", [
              "close",
              { hidden: showMore },
            ])}
            onClick={() => setClosed(true)}
          >
            <Svg.Close.outline />
            <span className="button__text button__text--not-interested">
              Not interested
            </span>
          </button>
          <button
            className={bemModifiers("suggestions__button", [
              "show-more",
              { selected: showMore },
            ])}
            onClick={() => setShowMore(true)}
          >
            <Svg.LikedVideos.outline />
            <span className="button__text button__text--show-more">
              Show me more
            </span>
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
