import VideoCard from "../../../../../../components/VideoCard/VideoCard";
import { useGetFeed } from "../../../../../../services/api/api";
import { useHomeStore } from "../../../../../../store/home";

import "./Feed.css";

export default function Feed() {
  const home = useHomeStore();
  const { data, isLoading } = useGetFeed({
    page: 1,
    perPage: 9,
    tag: home.selectedTag || "",
  });

  return (
    <div className="feed">
      <ul className="feed-list">
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <VideoCard loading={isLoading} />
            </li>
          ))}
        {data?.data?.data?.map((video) => (
          <li key={video.id}>
            <VideoCard {...video} />
          </li>
        ))}
      </ul>
    </div>
  );
}
