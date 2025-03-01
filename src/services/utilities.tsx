import clsx, { ClassValue } from "clsx";

/**
 * Generates BEM class names with modifiers using clsx
 * @param className - The base class name(s).
 * @param modifier - The modifier(s) to append to the class name(s).
 * @returns The BEM class names with modifiers.
 * @example
 * bemModifiers("button", "primary") // "button button--primary"
 * bemModifiers(["button", "my-button"], "primary") // "button button--primary my-button my-button--primary"
 * bemModifiers("button", ["primary", "large"]) // "button button--primary button--large"
 */
export const bemModifiers = <
  const TClass extends ClassValue | ClassValue[],
  const TModifier extends ClassValue | ClassValue[],
>(
  className?: TClass,
  modifier?: TModifier,
) => {
  if (!modifier) return clsx(className);
  const classNames = clsx(className).split(" ").filter(Boolean);
  const modifiers = clsx(modifier).split(" ").filter(Boolean);
  if (classNames.length === 0 || classNames?.[0] === "") return "";
  if (modifiers.length === 0 || classNames?.[0] === "") return clsx(classNames);
  return classNames
    .map(
      (item) =>
        `${item} ${modifiers.map((mod) => `${item}--${mod}`).join(" ")}`,
    )
    .join(" ");
};

/**
 * Generates BEM element class names using clsx
 * @param className - The base class name(s).
 * @param element - The element to append to the class name(s).
 * @returns The BEM class names with elements.
 * @example
 * bemElements("button", "icon") // "button__icon"
 * bemElements(["button", "my-button"], "icon") // "button__icon my-button__icon"
 */
export const bemElements = (
  className?: ClassValue[] | ClassValue,
  element?: string,
) => {
  const classNames = clsx(className).split(" ").filter(Boolean);
  const elements = clsx(element).split(" ").filter(Boolean);
  if (classNames.length === 0) return "";
  if (elements.length === 0) return clsx(classNames);
  return classNames
    .map(
      (item) => `${elements.map((element) => `${item}__${element}`).join(" ")}`,
    )
    .join(" ");
};
