import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/DashBoard/General/Sidebar.jsx";


const LayoutAdmin = () => {
return (
  <div className="bg-secondary-300 min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5">
        <div className="h-[90vh] overflow-y-scroll p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;