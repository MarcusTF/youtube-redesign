import { GetTagsProps, useGetTags } from "../../api/api";
import Svg from "../../assets/vector";
import Tag from "./components/Tag/Tag";

export function TagList({ page = 1, perPage = 40 }: GetTagsProps) {
  const tagsQuery = useGetTags({ page, perPage });
  return (
    <div className="tag-container">
      <ul className="tag-list">
        {tagsQuery?.isLoading &&
          Array.from({ length: 20 }).map((_, index) => (
            <li className="tag-item" key={index}>
              <Tag key={`${index}-Tag`} loading />
            </li>
          ))}
        {tagsQuery?.data?.data?.data?.map(({ id, name }) => (
          <li className="tag-item" key={id}>
            <Tag
              id={id}
              key={`${id}-Tag`}
              onClick={() => home.setSelectedTag(id)}
            >
              {name}
            </Tag>
          </li>
        ))}
      </ul>
      <Svg.Chevron />
    </div>
  );
}
