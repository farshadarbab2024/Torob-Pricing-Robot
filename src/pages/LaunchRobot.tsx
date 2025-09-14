import React, { useEffect, useState } from "react";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  message,
  Select,
  Steps,
} from "antd";
import { Link } from "react-router-dom";

function LaunchRobot() {
  const numberOfSteps = 5;
  const [currentStep, setCurrentStep] = useState(0);
  const [launchForm] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  let steps: any[] = [];
  for (let i = 0; i < numberOfSteps; i++) {
    steps.push({});
  }

  const handleNextClicked = () => {
    let permission: boolean = true;
    switch (currentStep) {
      case 0:
        permission = validateDomain();
        break;

      case 1:
        permission = validateCurrencySelect();
        break;

      case 2:
        permission = validateShopName();
        break;
      case 3:
        permission = validateConsumerKeyAndConsumerSecret();
        break;

      default:
        permission = true;
        break;
    }
    if (permission) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBeforeClicked = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const validateDomain = (): boolean => {
    const domain = launchForm.getFieldValue("domain");
    const domainRegext = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z]{2,})+$/;

    if (!domainRegext.test(domain)) {
      messageApi.error("Please enter a valid domain");
      return false;
    } else if (domain.length <= 3) {
      messageApi.error("The domain name is too short");
      return false;
    } else {
      return true;
    }
  };

  const validateCurrencySelect = (): boolean => {
    const currency = launchForm.getFieldValue("currency");
    if (currency === undefined) {
      messageApi.error("Please select a currency");
      return false;
    } else {
      return true;
    }
  };

  const validateShopName = () => {
    const shopName = launchForm.getFieldValue("shopName");

    if (shopName.length < 3 || shopName === undefined) {
      messageApi.error("The Shop Name is too short");
      return false;
    } else {
      return true;
    }
  };

  const validateConsumerKeyAndConsumerSecret = () => {
    const consumerKey = launchForm.getFieldValue("consumerKey");
    const consumerSecret = launchForm.getFieldValue("consumerSecret");

    if (
      consumerKey.length != 34 ||
      consumerSecret.length != 34 ||
      !consumerKey.startsWith("ck_") ||
      !consumerSecret.startsWith("cs_")
    ) {
      messageApi.error("Invalid access information");
      return false;
    } else {
      return true;
    }
  };
  return (
    <div
      className="bg-gradient-to-tr from-[#E91E33] to-[#34afce] w-screen
        h-screen"
    >
      {contextHolder}
      <div
        className="bg-white/40 w-[550px] h-[700px] md:h-[470px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg
            max-w-[90vw] max-h-[93vh] !p-5 !pl-22"
      >
        {/* Steps Bar */}
        <div
          className="w-12 flex items-start h-full absolute left-5
          top-0 !pt-5"
        >
          <Steps
            direction="vertical"
            current={currentStep}
            items={steps}
            className="!h-[100%]"
          />
        </div>

        <Form layout="vertical" className="!relative h-full" form={launchForm}>
          {/* Step 1 */}
          {currentStep == 0 && (
            <div>
              <h2 className="text-[22px] font-black text-[#161616]">Domain</h2>
              <p className="text-[#3f3f3f] text-[15px] !mt-2 text-justify">
                What's your online shop domain? enter it.
              </p>
              <Form.Item
                name="domain"
                // label={<span className="text-[18px]">Domain</span>}
                className="!mt-12 !text-[18px]"
              >
                <Input
                  placeholder="amazon.com"
                  className="!h-[50px] !text-[18px] !pl-4 !pr-4"
                  autoComplete="off"
                  maxLength={100}
                />
              </Form.Item>
            </div>
          )}
          {/* Step 2 */}
          {currentStep == 1 && (
            <div>
              <h2 className="text-[22px] font-black text-[#161616]">
                Currency
              </h2>
              <p className="text-[#3f3f3f] text-[15px] !mt-2 text-justify">
                Which currency are the products in your online shop displayed
                in?
              </p>
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      fontSize: 18,
                    },
                  },
                }}
              >
                <Form.Item name="currency" className="!mt-12 !text-[18px]">
                  <Select
                    options={[
                      {
                        value: "USD",
                        label: "USD",
                      },
                      {
                        value: "EUR",
                        label: "EUR",
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
                    className="!h-[50px] !text-[18px]"
                    placeholder="Select your currency"
                  />
                </Form.Item>
              </ConfigProvider>
            </div>
          )}

          {/* Step 3 */}
          {currentStep == 2 && (
            <div>
              <h2 className="text-[22px] font-black text-[#161616]">
                Identify Shop on Torob
              </h2>
              <p className="text-[#3f3f3f] text-[15px] !mt-2 text-justify">
                Please enter the registered name of your store on Torob so that
                the bot can identify it.
              </p>
              <Form.Item name="shopName" className="!mt-12 !text-[18px]">
                <Input
                  placeholder="QuickCart"
                  className="!h-[50px] !text-[18px] !pl-4 !pr-4 "
                  autoComplete="off"
                  maxLength={100}
                />
              </Form.Item>
            </div>
          )}

          {/* Step 4 */}
          {currentStep == 3 && (
            <div>
              <h2 className="text-[22px] font-black text-[#161616]">
                Grant access
              </h2>
              <p className="text-[#3f3f3f] text-[15px] !mt-2 text-justify">
                Create and enter a WordPress Consumer Key and Consumer Secret
                with read/write access. These two codes allow the robot to read
                your products and update your prices on your website.
              </p>
              <Form.Item name="consumerKey" className="!mt-12 !text-[18px]">
                <Input
                  placeholder="Consumer Key"
                  className="!h-[50px] !text-[18px] !pl-4 !pr-4 "
                  autoComplete="off"
                  maxLength={34}
                />
              </Form.Item>

              <Form.Item name="consumerSecret" className="!mt-5">
                <Input
                  placeholder="Consumer Secret"
                  className="!h-[50px] !text-[18px] !pl-4 !pr-4"
                  autoComplete="off"
                  maxLength={34}
                />
              </Form.Item>
            </div>
          )}

          {/* Step 5 */}
          {currentStep == 4 && (
            <div>
              <h2 className="text-[22px] font-black text-[#161616]">
                Install Basic Authenticator Plugin
              </h2>
              <p className="text-[#3f3f3f] text-[15px] !mt-2 text-justify">
              Simply install and activate the <Link to="" className="!text-main-red">Basic Authenticator Plugin</Link> on your WordPress site. This step is optional, but we highly recommend it—otherwise, your firewall might block the robot from updating prices.
              </p>
            </div>
          )}

          <div
            className="absolute bottom-0 right-0 flex items-end 
          gap-4"
          >
            <Button
              disabled={currentStep == 0 ? true : false}
              className="!w-24 !h-10 md:!h-8"
              onClick={handleBeforeClicked}
            >
              Before
            </Button>
            <Button
              type="primary"
              className="!h-10 md:!h-8 w-33"
              htmlType="button"
              onClick={handleNextClicked}
            >
              {currentStep == numberOfSteps - 1 ? "Launch Robot" : "Next"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LaunchRobot;
