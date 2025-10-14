import {
  Button,
  ConfigProvider,
  Form,
  Input,
  message,
  Radio,
  Select,
  Slider,
  Tooltip,
} from "antd";
import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { CheckOutlined } from "@ant-design/icons";
import { RxCross2 } from "react-icons/rx";

function Settings() {
  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
  };
  const [speed, setSpeed] = useState(0);
  const [messageApi, contextHolder] = message.useMessage() ; 

  const handleFormFinish = () => {
    messageApi.success("Your robot settings changed successfully!") ; 
  }
  return (
    <div
      className="bg-white w-[900px] !mx-auto
        max-w-[90%] !pt-6 rounded-xl !px-6 !py-4 relative
        !pb-20 min-h-[90vh]">
      {contextHolder}
      <h1 className="font-bold text-[27px] text-center">Settings</h1>

      <div className="!mt-8">
        <Form layout="vertical" 
        className="grid grid-cols-2 gap-x-8"
        onFinish={handleFormFinish}
        >
          <Form.Item
            label="Domain"
            name="domain"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
              {
                pattern: /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,6}$/,
                message: "Please enter a valid domain",
              },
            ]}
          >
            <Input
              maxLength={100}
              autoComplete="off"
              placeholder="amazon.com"
              className="!text-[16px] !h-[47px]"
              variant="filled"
            />
          </Form.Item>
          <Form.Item
            label="Currency"
            name="currency"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Select
              className="!h-[47px]"
              placeholder="USD"
              options={[
                {
                  label: "USD",
                  value: "USD",
                },
                {
                  label: "EUR",
                  value: "EUR",
                },
                {
                  label: "JPY",
                  value: "JPY",
                },
                {
                  label: "GBP",
                  value: "GBP",
                },
              ]}
              variant="filled"
            />
          </Form.Item>
          <Form.Item
            label="ShopName"
            name="shopName"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
              {
                min: 3,
                message: "Shop Name must be at least 3 characters",
              },
            ]}
          >
            <Input
              maxLength={100}
              autoComplete="off"
              placeholder="QuickCard"
              className="!text-[16px] !h-[47px]"
              variant="filled"
            />
          </Form.Item>
          <Form.Item
            label="Consumer Key"
            name="consumerKey"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
              {
                min: 32,
                message: "Consumer Key must be exactly 32 characters",
              },
              {
                max: 32,
                message: "Consumer Key must be exactly 32 characters",
              },
            ]}
          >
            <Input
              maxLength={32}
              autoComplete="off"
              placeholder="amazon.com"
              className="!text-[16px] !h-[47px]"
              variant="filled"
            />
          </Form.Item>
          <Form.Item
            label="Consumer Secret"
            name="consumerSecret"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
              {
                min: 32,
                message: "Consumer Key must be exactly 32 characters",
              },
              {
                max: 32,
                message: "Consumer Key must be exactly 32 characters",
              },
            ]}
          >
            <Input
              maxLength={32}
              autoComplete="off"
              placeholder="amazon.com"
              className="!text-[16px] !h-[47px]"
              variant="filled"
            />
          </Form.Item>
          <Form.Item label="Care the buybox algorithem"
          name="algorithem"
          >
            <ConfigProvider
              theme={{
                token: {
                  controlHeight: 47, // height of input, button, etc.
                },
              }}
            >
              <Radio.Group
                block
                options={[
                  {
                    label: (
                      <span className="flex justify-center gap-x-1 items-center !text-[16px] font-bold">
                        <CheckOutlined className="!font-bold" /> Yes
                      </span>
                    ),
                    value: "yes",
                  },
                  {
                    label: (
                      <span className="flex justify-center gap-x-1 items-center !text-[16px] font-bold">
                        <RxCross2 /> No
                      </span>
                    ),
                    value: "no",
                  },
                ]}
                defaultValue="yes"
                optionType="button"
                buttonStyle="solid"
              />
            </ConfigProvider>
          </Form.Item>

          <Form.Item className="col-span-2"
          name="speed"
          >
            <div className="flex items-center justify-start gap-x-3 !mb-2">
              <label>Speed</label>
              <Tooltip
                title="How many times a day do you want prices to be checked?"
                placement="right"
              >
                <div
                  className="flex items-center justify-center !w-[14px] h-[14px]
                   rounded-full text-white 
                   cursor-pointer hover:bg-gray-300 transition
                   !bg-[#2D2D2D]"
                >
                  <FaQuestion className="text-[9px]" />
                </div>
              </Tooltip>
            </div>
            <div className="w-full bg-[#f6f6f6] !py-4 !px-6 rounded">
              <div className="w-full flex items-end justify-end">
                <span className="text-[11px] text-[#8C8282]">
                  {speed + "/30"}
                </span>
              </div>
              <Slider
                className="!mt-[2px]"
                min={1}
                max={30}
                onChange={handleSpeedChange}
              />
            </div>
          </Form.Item>

          
          <Button
            htmlType="submit"
            className="!absolute !bottom-[30px] !right-[20px]
            !h-[40px]"
            type="primary"
          >
            Apply Changes <CheckOutlined />
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Settings;
