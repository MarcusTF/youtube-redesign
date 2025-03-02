import { useEffect, useRef, useState } from "react";
import Svg from "../../../../../../assets/vector";
import VideoCard from "../../../../../../components/VideoCard/VideoCard";
import { useGetInCaseYouMissed } from "../../../../../../services/api/api";

import clsx from "clsx";
import "./InCaseYouMissed.css";

export default function InCaseYouMissed() {
  const [closed, setClosed] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { data, isLoading } = useGetInCaseYouMissed({ page: 1, perPage: 15 });
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
      className={clsx("in-case-you-missed", {
        "no-left-fade": !canScrollLeft,
        "no-right-fade": !canScrollRight,
        closed,
      })}
    >
      <div className="in-case-you-missed__header">
        <h2>In Case You Missed</h2>
        <button
          className="in-case-you-missed__button"
          onClick={() => setClosed(true)}
        >
          <Svg.Close.outline />
        </button>
      </div>
      <ul ref={videoListRef} className="in-case-you-missed__videos">
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

      <button
        className="in-case-you-missed__prev"
        onClick={() => scroll("left")}
        style={{
          opacity: canScrollLeft ? 1 : 0,
          pointerEvents: canScrollLeft ? "auto" : "none",
        }}
      >
        <Svg.ArrowDown.outline />
      </button>

      <button
        className="in-case-you-missed__next"
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
