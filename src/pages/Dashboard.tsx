import React from "react";
import { Button, ConfigProvider, Input } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { FaCheck } from "react-icons/fa";
import { IoCloseCircle, IoSearch } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";
import { HiRefresh } from "react-icons/hi";

const { Search } = Input;

function Dashboard() {

  //here

  return (
    <div
      className="bg-white/50 w-[1000px] max-w-[95%] min-h-[90vh] !mx-auto
    rounded !px-12 !py-8"
    >
      <div
        className="bg-secondary2 w-full flex items-center justify-between !px-4 !py-4
      rounded"
      >
        <div className="flex items-center justify-start gap-x-2 !h-[40px]">
          <Button className="text-success-green !text-success-green !font-extrabold
          !h-full">
            Robot On <FaCheck />
          </Button>
          <ConfigProvider
            theme={{

              components: {
                Input: {
                  activeBorderColor: "#4D4D4D", 
                  hoverBorderColor: "#4D4D4D",  
                }, 
                Button: {
                  colorPrimary: "#4D4D4D",
                  colorPrimaryHover: "#6e6e6e", 
                  colorPrimaryActive: "#cca300",
                },
              },
            }}
          >
            <Search
              placeholder="Search product by sku or name"
              className="!w-[300px] !font-medium !py-8"
              enterButton={<IoSearch size={19} />}
              allowClear={{
                clearIcon: <IoCloseCircle className="text-xl" />
              }}
              autoComplete="off"
              size="large"

            />
          </ConfigProvider>
        </div>
        <Button className="!bg-main-red !text-white !font-medium !h-[40px]"><HiRefresh className="!text-[16px]" /> Update Products</Button>
      </div>
    </div>
  );
}

export default Dashboard;
