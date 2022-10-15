import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export const Template = () => {
  return (
    <section className="view">
      <Navbar />

      <Outlet />
      <Footer />
    </section>
  );
};
