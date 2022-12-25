import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="mt-12 min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
