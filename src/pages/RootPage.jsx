/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

export default function RootPage() {
  const Navigate = useNavigate();

  useEffect(() => {
    Navigate("/Homepage");
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
