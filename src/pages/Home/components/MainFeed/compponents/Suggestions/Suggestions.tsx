import { useRef, useState } from "react";
import Svg from "../../../../../../assets/vector";
import VideoCard from "../../../../../../components/VideoCard/VideoCard";
import { useGetInCaseYouMissed } from "../../../../../../services/api/api";

import clsx from "clsx";
import "./Suggestions.css";

export default function Suggestions() {
  const [closed, setClosed] = useState(false);
  const [showMore, setShowMore] = useState<boolean | null>(null);
  const { data, isLoading } = useGetInCaseYouMissed({ page: 1, perPage: 15 });
  const videoListRef = useRef<HTMLUListElement>(null);

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
            className="suggestions__button"
            onClick={() => setClosed(true)}
          >
            <Svg.Close /> Not interested
          </button>
          <button
            className="suggestions__button"
            onClick={() => setShowMore(true)}
          >
            <Svg.ThumbsUp /> Show me more
          </button>
        </div>
      </div>
      <ul ref={videoListRef} className="suggestions__videos">
        {isLoading &&
          Array.from({ length: 15 }).map((_, index) => (
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
