import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { MdDashboard } from "react-icons/md";
import { BiSolidNotepad } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { ImPaypal } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";
import { Menu, message } from "antd";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function DesktopPanel() {
  const navigator = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const pages: MenuItem[] = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      key: "logs",
      label: "Logs",
      icon: <BiSolidNotepad />,
    },
    {
      key: "invoices",
      label: "Invoices",
      icon: <ImPaypal />,
    },
    {
      key: "settings",
      label: "Settings",
      icon: <MdSettings className="!text-[15px]" />,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <IoLogOut className="!text-[15px]" />,
    },
  ];

  const handleMenuClicked = (e: { key: string }) => {
    if (e.key == "dashboard") {
      navigator("/panel/dashboard");
    }

    if (e.key == "logs") {
      navigator("/panel/logs");
    }

    if (e.key == "invoices") {
      navigator("/panel/invoices");
    }
    if (e.key == "settings") {
      navigator("/panel/settings");
    }

    if (e.key == "logout") {
      navigator("/login/");
    }
  };

  const getDefaultKey = ():string => {
    const u = new URL(window.location.href);
    const parts = u.pathname.split("/").filter(Boolean); // ["panel","logs"]
    const last:string = parts.pop() ?? ""; // "logs"
    return last ;
  };

  


  return (
    <div className="flex justify-between">
      {contextHolder}
      <div
        className="bg-[#300000] w-[220px] h-screen fixed left-0 top-0
        z-20"
      >
        <img
          src={logo}
          alt="logo"
          className="!mx-auto block !mt-12 w-[50px] h-[50px]"
        />
        <Menu
          theme="dark"
          className="!bg-[#300000] !mt-12 !px-4"
          items={pages}
          onClick={handleMenuClicked}
          defaultSelectedKeys={[getDefaultKey()]}
        />
      </div>
      <div className="w-[220px] h-screen"></div>

      <div
        className="bg-gradient-to-tr from-main-red to-main-blue !py-8"
        style={{
          width: "calc(100% - 220px)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default DesktopPanel;
