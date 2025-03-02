import VideoCard from "../../../../../../components/VideoCard/VideoCard";
import { useGetFeed } from "../../../../../../services/api/api";
import { useTagStore } from "../../../../../../store/tag";

import "./Feed.css";

export default function Feed() {
  const { home } = useTagStore();
  const { data, isLoading } = useGetFeed({
    page: 1,
    perPage: 9,
    tag: home.selectedTag || "",
  });

  console.log(home);

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
