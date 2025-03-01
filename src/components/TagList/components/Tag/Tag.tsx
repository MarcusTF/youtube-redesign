import clsx, { ClassValue } from "clsx";
import { MouseEventHandler } from "react";
import { useTagStore } from "../../../../store/tag";
import "./Tag.css";

export default function Tag({
  id,
  children,
  loading,
  onClick,
  modifier,
}: {
  id?: string;
  children?: React.ReactNode;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  modifier?: ClassValue | ClassValue[];
}) {
  const { home } = useTagStore();

  function onClickHandler(): MouseEventHandler<HTMLButtonElement> | undefined {
    console.log("Tag clicked");
    if (!id) return undefined;
    if (!onClick && !home.setSelectedTag) return undefined;
    if (onClick) return onClick;
    return () => home.setSelectedTag(id);
  }

  const className = clsx(
    "tag",
    { "tag--loading": loading, "tag--active": home.selectedTag === id },
    Array.isArray(modifier)
      ? modifier.map((modifier) => `tag--${modifier}`)
      : `tag--${modifier}`,
  );

  return (
    <button className={className} onClick={onClickHandler()}>
      {children}
    </button>
  );
}
