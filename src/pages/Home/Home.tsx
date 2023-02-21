import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import useTheme from "../../hooks/useTheme";
export const Home = () => {
  return (
    <>
      <div className="bg-[#F2F2F2] dark:bg-slate-800 min-h-screen font-inter rounded-xl dark:text-white">
        <div className=" mx-auto"></div>
      </div>
    </>
  );
};
