import { ReactNode } from "react";
import Svg from "../../assets/vector";
import { GetTagsProps, useGetTags } from "../../services/api/api";
import Tag from "./components/Tag/Tag";

import { ClassValue } from "clsx";
import { bemModifiers } from "../../services/utilities";
import "./TagList.css";

type TagListProps = Partial<GetTagsProps> & {
  leading?: ReactNode;
  modifier?: ClassValue | ClassValue[];
};

export function TagList({
  page = 1,
  perPage = 40,
  leading,
  modifier,
}: TagListProps) {
  const tagsQuery = useGetTags({ page, perPage });
  return (
    <div className={bemModifiers("tag-container", modifier)}>
      <ul className={bemModifiers("tag-list", modifier)}>
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
        {tagsQuery?.error && (
          <li className="tag-item">
            <Tag>{tagsQuery.error.message}</Tag>
          </li>
        )}
      </ul>
      <Svg.ArrowDown.outline />
    </div>
  );
}
