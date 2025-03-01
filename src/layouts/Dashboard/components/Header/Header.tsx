import { SearchBar } from "./components/SearchBar/SearchBar";
import { TitleMenu } from "./components/TitleMenu/TitleMenu";
import { UserMenu } from "./components/UserMenu/UserMenu";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <TitleMenu />
      <SearchBar />
      <UserMenu />
    </header>
  );
}
