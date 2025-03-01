import { ReactNode } from "react";
import { GetTagsProps, useGetTags } from "../../api/api";
import Svg from "../../assets/vector";
import Tag from "./components/Tag/Tag";

import "./TagList.css";

type TagListProps = Partial<GetTagsProps> & {
  leading?: ReactNode;
};

export function TagList({ page = 1, perPage = 40, leading }: TagListProps) {
  const tagsQuery = useGetTags({ page, perPage });
  return (
    <div className="tag-container">
      <ul className="tag-list">
        {leading}
        {tagsQuery?.isLoading &&
          Array.from({ length: 20 }).map((_, index) => (
            <li className="tag-item" key={index}>
              <Tag key={`${index}-Tag`} loading />
            </li>
          ))}
        {tagsQuery?.data?.data?.data?.map(({ id, name }) => (
          <li className="tag-item" key={id}>
            <Tag id={id} key={`${id}-Tag`}>
              {name}
            </Tag>
          </li>
        ))}
      </ul>
      <Svg.Chevron />
    </div>
  );
}
