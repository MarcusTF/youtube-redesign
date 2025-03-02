import clsx, { ClassValue } from "clsx";
import { MouseEventHandler } from "react";
import { useHomeStore } from "../../../../store/home";
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
  const home = useHomeStore();

  function onClickHandler(): MouseEventHandler<HTMLButtonElement> | undefined {
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
