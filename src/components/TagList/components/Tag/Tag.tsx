import clsx from "clsx";
import { useTagStore } from "../../../../store/tag";
import "./Tag.css";

export default function Tag({
  id,
  children,
  loading,
}: {
  id?: string;
  children?: React.ReactNode;
  loading?: boolean;
}) {
  const { home } = useTagStore();
  if (!id)
    return <div className={clsx("tag", { "tag--loading": loading })}></div>;

  return (
    <button
      className={clsx("tag", {
        "tag--loading": loading,
        "tag--active": home.selectedTag === id,
      })}
      onClick={() => home.setSelectedTag(id)}
    >
      {children}
    </button>
  );
}
