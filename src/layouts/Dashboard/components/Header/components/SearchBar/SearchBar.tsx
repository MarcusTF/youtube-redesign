import Svg from "../../../../../../assets/vector";
import { useSearchStore } from "../../../../../../store/search";

import "./SearchBar.css";

export const SearchBar = () => {
  const search = useSearchStore();

  return (
    <div className="header__search-bar">
      <Svg.MagnifyingGlass className="search-bar__icon search-bar__icon--mic" />
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search..."
        value={search.query}
        onChange={(e) => search.setSearchQuery(e.target.value)}
      />
      <button className="search-bar__button">
        <Svg.Mic className="search-bar__icon search-bar__icon--mic" />
      </button>
    </div>
  );
};
