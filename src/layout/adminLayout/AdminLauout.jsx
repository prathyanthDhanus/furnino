import React from "react";
import { Outlet } from "react-router-dom";

const AdminLauout = () => {
  return (
    <>
      <div>1</div>
      <div>
        <Outlet />
      </div>
      <div>3</div>
    </>
  );
};

export default AdminLauout;
