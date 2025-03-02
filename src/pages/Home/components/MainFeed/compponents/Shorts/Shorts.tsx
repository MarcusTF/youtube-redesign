import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Svg from "../../../../../../assets/vector";
import VideoCard from "../../../../../../components/VideoCard/VideoCard";
import { useGetShorts } from "../../../../../../services/api/api";

import { bemModifiers } from "../../../../../../services/utilities";
import "./Shorts.css";

export default function Shorts() {
  const [closed, setClosed] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showMore, setShowMore] = useState<boolean | null>(null);
  const { data, isLoading } = useGetShorts({
    page: 1,
    perPage: 15,
    tag: "shorts",
  });

  const videoListRef = useRef<HTMLUListElement>(null);

  const checkScrollability = () => {
    if (videoListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = videoListRef.current;

      // Check if we can scroll left (not at the beginning)
      setCanScrollLeft(scrollLeft > 0);

      // Check if we can scroll right (not at the end)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5); // 5px buffer for rounding errors
    }
  };

  useEffect(() => {
    const listElement = videoListRef.current;
    if (listElement) {
      listElement.addEventListener("scroll", checkScrollability);
      // Initial check
      checkScrollability();

      return () => {
        listElement.removeEventListener("scroll", checkScrollability);
      };
    }
  }, [data]);

  const scroll = (direction: "left" | "right") => {
    if (videoListRef.current) {
      // Get the width of a single video card plus its margin
      const videoCardWidth =
        videoListRef.current.firstElementChild?.clientWidth || 0;
      const gap = 16; // 1rem gap = 16px

      // Calculate the scroll distance (3 videos + their gaps)
      const scrollDistance = 3 * (videoCardWidth + gap);

      // Scroll horizontally by that distance
      videoListRef.current.scrollBy({
        left: direction === "right" ? scrollDistance : -scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={clsx("shorts", {
        "no-left-fade": !canScrollLeft,
        "no-right-fade": !canScrollRight,
        closed,
      })}
    >
      <div className="shorts__header">
        <h2>
          <Svg.Shorts.filled /> Shorts
        </h2>
        <div className="shorts__actions">
          <button
            className={bemModifiers("shorts__button", [
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
            className={bemModifiers("shorts__button", [
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
      <ul ref={videoListRef} className="shorts__videos">
        {isLoading &&
          Array.from({ length: 15 }).map((_, index) => (
            <VideoCard key={index} loading={isLoading} short />
          ))}
        {data?.data?.data?.map((video) => (
          <li key={video.id}>
            <VideoCard key={video.id} {...video} loading={isLoading} short />
          </li>
        ))}
      </ul>

      <button
        className="shorts__prev"
        onClick={() => scroll("left")}
        style={{
          opacity: canScrollLeft ? 1 : 0,
          pointerEvents: canScrollLeft ? "auto" : "none",
        }}
      >
        <Svg.ArrowDown.outline />
      </button>

      <button
        className="shorts__next"
        onClick={() => scroll("right")}
        style={{
          opacity: canScrollRight ? 1 : 0,
          pointerEvents: canScrollRight ? "auto" : "none",
        }}
      >
        <Svg.ArrowDown.outline />
      </button>
    </div>
  );
}
