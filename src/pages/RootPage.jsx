/* eslint-disable react-hooks/exhaustive-deps */

import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

export default function RootPage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
