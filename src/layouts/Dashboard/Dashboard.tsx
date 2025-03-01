import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  );
}
