import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Aside from "./components/Aside";

const App = () => {
  return (
    <>
      {/* sidebar */}
      <Aside />
      {/* maincontent */}
      <div className="main-content">
        <nav>Navbar</nav>
        <section
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default App;
