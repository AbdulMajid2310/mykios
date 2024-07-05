import React from "react";
import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router-dom";

const dashboard = () => {
  return (
    <main className="max-w-[1440px] mx-auto">
      <section>
        <Navbar />
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default dashboard;
