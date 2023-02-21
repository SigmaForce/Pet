import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

export const BasePage = () => {
  return (
    <div className="bg-[#FDFDFD] dark:bg-slate-900">
      <Header />
      <div className="grid grid-cols-6 gap-2">
        <SideBar />
        <div className="col-span-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
