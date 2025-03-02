import { useGetSubscriptions } from "../../../../../../services/api/api";
import { Sub } from "./Sub/Sub";

import "./Subs.css";

export default function Subs() {
  const { data, isLoading } = useGetSubscriptions({ page: 1, perPage: 10 });
  return (
    <ul className="subscriptions">
      {isLoading &&
        Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="subscription subscription--loading">
            <div className="loading-skeleton" />
          </li>
        ))}
      {data?.data?.data?.map((subscription) => <Sub {...subscription} />)}
    </ul>
  );
}
