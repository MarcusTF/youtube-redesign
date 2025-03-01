import VideoCard from "../../../../../../components/VideoCard/VideoCard";
import { useGetInCaseYouMissed } from "../../../../../../services/api/api";

export default function InCaseYouMissed() {
  const { data, isLoading } = useGetInCaseYouMissed({ page: 1, perPage: 15 });
  return (
    <div className="in-case-you-missed">
      {isLoading &&
        Array.from({ length: 15 }).map((_, index) => (
          <VideoCard key={index} loading={isLoading} />
        ))}
      {data?.data?.data?.map((video) => (
        <VideoCard key={video.id} {...video} loading={isLoading} />
      ))}
    </div>
  );
}
