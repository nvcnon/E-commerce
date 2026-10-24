import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayout) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
