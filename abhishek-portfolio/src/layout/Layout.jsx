import React from "react";
import Sidebar from "../HomePage/Sidebar";
import Navbar from "../Maincontent/Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0b0f16] text-white">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 lg:w-1/5 p-4 md:fixed md:inset-y-0 md:left-0 md:h-full md:z-20 bg-[#0b0f16] z-30">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="w-full md:ml-[25%] lg:ml-[20%] p-4 bg-[#181c24] min-h-screen">
        <Navbar />
        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
