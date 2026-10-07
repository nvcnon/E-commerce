import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
