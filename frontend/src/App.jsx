import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-16">
        <main>
          <ScrollToTop />
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
