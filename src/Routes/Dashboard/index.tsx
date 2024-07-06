import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";

const Dashboard = () => {
  return (
    <main className="max-w-[1440px] mx-auto">
      <section className="fixed w-full z-50">
        <Navbar />
      </section>
      <section className="pt-[200px]">
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Dashboard;
