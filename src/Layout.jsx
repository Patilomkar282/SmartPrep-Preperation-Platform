import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Outlet /> {/* Renders nested routes here */}
      </main>
      <Footer />
    </div>
  );
}
