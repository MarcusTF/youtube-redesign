import { NavLink } from "react-router-dom";
import { GetSubscriptionsResult } from "../../../../../../../services/api/api";

import "./Sub.css";

export function Sub(subscription: GetSubscriptionsResult) {
  return (
    <li className="sidebar-item subscription" key={subscription.id}>
      <NavLink to={`/subscription/${subscription.id}`}>
        <img
          className="subscription__avatar"
          src={`${subscription.avatar.url}?random=${subscription.id}`}
          alt={subscription.avatar.title}
        />
        <span className="subscription__name">{subscription.name}</span>
      </NavLink>
    </li>
  );
}
