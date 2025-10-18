import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import { Form } from "antd";
import { FaFilter } from "react-icons/fa";
import live from "../../assets/animation/live.json";
import Lottie from "lottie-react";
type Log = {
  text: string;
  product_id: number;
  isSuccessfull: boolean;
};

function Logs() {
  const [robotStatus, setRobotStatus] = useState(true);
  const [productId, setProductId] = useState<"all" | number>("all");
  const [reportStatusFilter, setReportStatusFilter] = useState<boolean | "all">(
    "all"
  );
  const [searchFilter, setSearchFilter] = useState<string>("");

  const logs: Log[] = [
    {
      text: 'The price of "F-14 Mini Thermal Printer" has been successfully updated to $86.50',
      product_id: 1,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Logitech G305 Wireless Mouse" has been successfully updated to $43.20',
      product_id: 2,
      isSuccessfull: true,
    },
    {
      text: 'Failure to change price of "Xiaomi Redmi Note 12". Trying again in next turn',
      product_id: 3,
      isSuccessfull: false,
    },
    {
      text: 'The price of "Samsung 990 PRO SSD 1TB" has been successfully updated to $99.45',
      product_id: 4,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Apple AirPods Pro (2nd Gen)" has been successfully updated to $284.00',
      product_id: 5,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Anker PowerCore 20000mAh Power Bank" has been successfully updated to $187.00',
      product_id: 1,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Asus TUF Gaming Monitor 27-inch" has been successfully updated to $299.99',
      product_id: 2,
      isSuccessfull: true,
    },
    {
      text: 'The price of "HP DeskJet 2720e Printer" has been successfully updated to $65.40',
      product_id: 3,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Razer BlackWidow V3 Keyboard" has been successfully updated to $119.00',
      product_id: 4,
      isSuccessfull: true,
    },
    {
      text: 'The price of "F-14 Mini Thermal Printer" has been successfully updated to $86.50',
      product_id: 5,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Logitech G305 Wireless Mouse" has been successfully updated to $43.20',
      product_id: 1,
      isSuccessfull: true,
    },
    {
      text: 'Failure to change price of "Xiaomi Redmi Note 12". Trying again in next turn',
      product_id: 2,
      isSuccessfull: false,
    },
    {
      text: 'The price of "Samsung 990 PRO SSD 1TB" has been successfully updated to $99.45',
      product_id: 3,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Apple AirPods Pro (2nd Gen)" has been successfully updated to $284.00',
      product_id: 4,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Anker PowerCore 20000mAh Power Bank" has been successfully updated to $187.00',
      product_id: 5,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Asus TUF Gaming Monitor 27-inch" has been successfully updated to $299.99',
      product_id: 1,
      isSuccessfull: true,
    },
    {
      text: 'The price of "HP DeskJet 2720e Printer" has been successfully updated to $65.40',
      product_id: 2,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Razer BlackWidow V3 Keyboard" has been successfully updated to $119.00',
      product_id: 3,
      isSuccessfull: true,
    },
    {
      text: 'The price of "F-14 Mini Thermal Printer" has been successfully updated to $86.50',
      product_id: 4,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Logitech G305 Wireless Mouse" has been successfully updated to $43.20',
      product_id: 5,
      isSuccessfull: true,
    },
    {
      text: 'Failure to change price of "Xiaomi Redmi Note 12". Trying again in next turn',
      product_id: 1,
      isSuccessfull: false,
    },
    {
      text: 'The price of "Samsung 990 PRO SSD 1TB" has been successfully updated to $99.45',
      product_id: 2,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Apple AirPods Pro (2nd Gen)" has been successfully updated to $284.00',
      product_id: 3,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Anker PowerCore 20000mAh Power Bank" has been successfully updated to $187.00',
      product_id: 4,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Asus TUF Gaming Monitor 27-inch" has been successfully updated to $299.99',
      product_id: 5,
      isSuccessfull: true,
    },
    {
      text: 'The price of "HP DeskJet 2720e Printer" has been successfully updated to $65.40',
      product_id: 1,
      isSuccessfull: true,
    },
    {
      text: 'The price of "Razer BlackWidow V3 Keyboard" has been successfully updated to $119.00',
      product_id: 2,
      isSuccessfull: true,
    },
  ];

  const products = [
    {
      label: "Show All",
      value: "all",
    },
    {
      label: "Thermal Mini Printer",
      value: 1,
    },
    {
      label: "Apple Watch Series 9",
      value: 2,
    },
    {
      label: "Wireless Bluetooth Headphones",
      value: 3,
    },
    {
      label: "Smartphone Tripod",
      value: 4,
    },
    {
      label: "Portable SSD 1TB",
      value: 5,
    },
    {
      label: "Gaming Keyboard RGB",
      value: 6,
    },
    {
      label: "HD Webcam 1080p",
      value: 7,
    },
    {
      label: "LED Desk Lamp",
      value: 8,
    },
    {
      label: "USB-C Hub 7-in-1",
      value: 9,
    },
    {
      label: "Noise Cancelling Earbuds",
      value: 10,
    },
    {
      label: "Laptop Stand Aluminum",
      value: 11,
    },
    {
      label: "Wireless Charger Pad",
      value: 12,
    },
    {
      label: "External Monitor 24 inch",
      value: 13,
    },
    {
      label: "Gaming Mouse G502",
      value: 14,
    },
    {
      label: "Mechanical Keyboard MK8",
      value: 15,
    },
    {
      label: "Action Camera 4K",
      value: 16,
    },
    {
      label: "Portable Bluetooth Speaker",
      value: 17,
    },
    {
      label: "Smart Thermostat",
      value: 18,
    },
    {
      label: "Fitness Tracker Band",
      value: 19,
    },
    {
      label: "Mini Projector HD",
      value: 20,
    },
  ];

  return (
    <div
      className="w-[1000px] max-w-[90%] bg-white !py-4
        !mx-auto rounded !px-8 !py-4"
    >
      <h1
        className="text-center font-bold
            !text-[24px] !mt-4"
      >
        Logs and Live Process
      </h1>

      {/* Filters */}
      <div className="bg-[#F0F0F0] rounded !px-6 !py-6 !mt-8">
        <h2 className="font-bold text-[18px]">Filters</h2>

        <Form className="!mt-4" layout="vertical">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <Form.Item label="Product" name="product">
              <Select
                className="!bg-[#F0F0F0] border-[1px] border-[#4D4D4D] rounded !h-[47px]"
                variant="borderless"
                placeholder="Select Product"
                options={products}
                defaultValue="all"
                onChange={(value: number | "all") => setProductId(value)}
              />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Select
                className="!bg-[#F0F0F0] border-[1px] border-[#4D4D4D] rounded !h-[47px]"
                variant="borderless"
                placeholder="Filter Status"
                defaultValue="all"
                onChange={(value: boolean | "all") =>
                  setReportStatusFilter(value)
                }
                options={[
                  {
                    label: "All",
                    value: "all",
                  },
                  {
                    label: "Failed",
                    value: false,
                  },
                  {
                    label: "Successfull",
                    value: true,
                  },
                ]}
              />
            </Form.Item>
            <Form.Item className="col-span-2">
              <Input
                className="!bg-[#F0F0F0] border-[1px] !border-[#4D4D4D] rounded !h-[47px]"
                placeholder="Includes"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.currentTarget.value)}
              />
            </Form.Item>
          </div>

          <Button
            type="primary"
            className="!h-[40px] !w-[120px] !text-[16px]"
            htmlType="submit"
          >
            <FaFilter className="!text-[15px]" />
            Filter
          </Button>
        </Form>
      </div>

      {/* Live Process and Logs */}
      <div className="bg-[#EFEFEF] w-full rounded !mt-8 !px-6 !py-6">
        <h2 className="font-bold text-[18px]">Logs</h2>

        <div className="flex justify-between items-end">
          <span className="text-[14px] text-[#9CA3AF] !mt-4 block">
            29 price change | 0 failures | 432 logs in total
          </span>

          <div
            className="text-[14px] flex justify-start gap-x-2 items-center"
            style={{
              color: robotStatus ? "var(--main-red)" : "#9CA3AF",
              fontWeight: robotStatus ? "bold" : "regulare",
            }}
          >
            <div className="w-[13px] h-[13px]">
              <Lottie animationData={live} loop={true} />
            </div>
            {robotStatus ? "Live" : "robot is off"}
          </div>
        </div>
        <div
          className="bg-white w-full !p-4 overflow-y-auto max-h-[400px] rounded-lg !mt-1"
          style={{
            boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          {logs.map((log: any, index: number) => {
            if (productId !== "all") {
              if (log.product_id != productId) {
                return;
              }
            }

            if (reportStatusFilter != "all") {
              if (reportStatusFilter != log.isSuccessfull) {
                return ;
              }
            }

            if(!log.text.includes(searchFilter)){
              return ;
            }
            return (
              <div
                className="flex justify-start items-center gap-x-2 !mt-4"
                key={"log" + index}
              >
                {/* The circle */}
                <div
                  className="w-[10px] h-[10px] rounded-full"
                  style={{
                    backgroundColor: log.isSuccessfull ? "#2BA200" : "#E91E33",
                  }}
                ></div>

                <div>{log.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Logs;
