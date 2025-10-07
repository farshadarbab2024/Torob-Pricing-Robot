import React from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { MdDashboard } from "react-icons/md";
import { BiSolidNotepad } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { ImPaypal } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";
import { Menu, message } from "antd";
import type { MenuProps } from "antd";
import Auth from "../services/Auth";

interface Page {
  title: string;
  icon: any;
  fn: any;
}

type MenuItem = Required<MenuProps>["items"][number] ;

function DesktopPanel() {
  const navigator = useNavigate() ; 
  const [messageApi, contextHolder ] = message.useMessage() ; 
  const pages: MenuItem[] = [
    {
      key: "Panel",
      label: "Panel",
      icon: <MdDashboard />,
    },
    {
      key: "Logs", 
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
    
    // if(e.key == "logout"){
    //   Auth.logout()
    //     .then(() => {
    //       navigator("/login") ;
    //     })

    //     .catch((error) => {
    //       console.log(error) ; //ntdelete
    //       messageApi.error("Error logging out")
    //     })
    // } //ntch uncomment this text
  }
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
          className="!mx-auto block !mt-12 w-[50px] h-[50px]
      "
        />
        <Menu
          theme="dark"
          className="!bg-[#300000] !mt-12 !px-4"
          items={pages}
          onClick={handleMenuClicked}
        />
      </div>
      <div className="w-[220px] h-screen"></div>

      <div
      className="bg-gradient-to-tr from-main-red to-main-blue !py-8"
      style={{
        width: "calc(100% - 220px)"
      }} 
      >

        <Outlet />
      </div>
    </div>
  );
}

export default DesktopPanel;
