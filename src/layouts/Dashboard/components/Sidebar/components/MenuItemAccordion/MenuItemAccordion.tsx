import * as Accordion from "@radix-ui/react-accordion";
import { NavLink } from "react-router-dom";
import Svg from "../../../../../../assets/vector";

import * as Separator from "@radix-ui/react-separator";
import { useSidebarStore } from "../../../../../../store/sidebar";
import "./MenuItemAccordion.css";

export default function MenuItemAccordion({
  to,
  icon,
  activeIcon,
  label,
  children,
}: {
  to: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebarStore();

  return (
    <Accordion.Root type="multiple" className="menu-item-accordion">
      <Accordion.Item
        value={isOpen ? "open" : "closed"}
        className="menu-item-accordion__item"
      >
        <Accordion.Header className="menu-item-accordion__header">
          <NavLink to={to} className="menu-item-accordion__link">
            {icon}
            {activeIcon}
            <span className="menu-item-accordion__label">{label}</span>
          </NavLink>
          <Separator.Root
            className="menu-item-accordion__separator"
            orientation="vertical"
          />
          <Accordion.Trigger className="menu-item-accordion__trigger">
            <Svg.Chevron className="menu-item-accordion__chevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="menu-item-accordion__content">
          {children}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
