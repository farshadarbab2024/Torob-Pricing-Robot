import { Button, Slider } from "antd";
import heartRate from "../assets/animation/heartrate.json";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import laptopForMobile from "../assets/Images/landing/laptop-for-mobile.png";
import torobInsideMobile from "../assets/Images/landing/torob-inside-mobile.png";
import { TiTick } from "react-icons/ti";
import useDevice from "../hooks/Device";
import StepsImage from "../assets/Images/landing/steps-image.png";
import color from "../assets/Images/landing/color.png";
import { Link } from "react-router-dom";
import team from "../assets/Images/landing/team.jpg";
import { FaHome, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import laptop from "../assets/Images/landing/laptop.png";
import mobile from "../assets/Images/landing/mobile.png";
import SampleProduct from "../feature/landingPage/SampleProduct";
import pcTeam from "../assets/Images/landing/team-pc.png";
import { motion } from "framer-motion";

function LandingPage() {
  const { isMobile, isTablet, isDesktop } = useDevice();
  const [numberOfProducts, setNumberOfProducts] = useState<number>(2000);
  const [dailyPriceCheck, setDailyPriceCheck] = useState(3);
  const [dailyCost, setDailyCost] = useState(60);
  const [monthlyCost, setMonthlyCost] = useState(1800);
  const checkPrice = 0.01;

  const contacts = [
    {
      icon: FaHome,
      name: "Address",
      value: "Springfield, IL 62704",
    },
    {
      icon: MdEmail,
      name: "email",
      value: "support@zika.com",
    },
    {
      icon: FaTelegram,
      name: "Telegram",
      value: "t.me/zikaSupport",
    },
  ];
  const statistics = [
    {
      percentNumber: 120,
      title: "More Visitors",
    },
    {
      percentNumber: 60,
      title: "Increase Profit",
    },
    {
      percentNumber: 90,
      title: "Decrease Costs",
    },
  ];

  const steps = [
    "Sign Up",
    "Launch and connect your website",
    "Save min prices and torob links",
    "Turn on robot and enjoy!",
  ];

  const features: string[] = [
    "24/7 suport",
    "7-day free trial",
    "View live reports and logs",
    "Turn the robot on or off",
    "Set a minimum price",
    "Automatically fetch your products",
  ];

  useEffect(() => {
    setDailyCost(numberOfProducts * dailyPriceCheck * checkPrice);
    setMonthlyCost(numberOfProducts * dailyPriceCheck * 30 * checkPrice);
  }, [numberOfProducts, dailyPriceCheck]);
  return (
    <div className="!pt-8">
      {/* First View */}
      <div>
        {/* for mobile */}
        <div className="md:hidden">
          <div>
            <motion.h1
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.1,
              }}
              className="text-[12vw] font-extrabold text-center"
            >
              Torob Pricing
            </motion.h1>
            <div className="w-[80vw] mx-auto !mx-auto">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="flex justify-between items-start"
              >
                <h1 className="text-[12vw] font-extrabold text-left">Robot</h1>

                <div className="w-[26vw] -translate-y-[10px]">
                  <Lottie animationData={heartRate} loop={true} />
                </div>
              </motion.div>

              {/* line bellow */}
              <div className="bg-main-red rounded-full w-[40vw] h-[8px] -translate-y-[17px]"></div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                }}
                className="text-justify text-[#565656] leading-relaxed text-[18px]"
              >
                Outsource the competitive pricing of your WordPress website to a
                24/7 smart bot. Stay on top in Torob, win the Torob Buy Box, and
                maximize your sales.
              </motion.p>

              <motion.div
                initial={{
                  x: 10,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.9,
                }}
              >
                <Link to="/signup">
                  <Button
                    className="!bg-[#e91e33] !mt-6 w-[300px] !h-[50px] !text-[17px] !font-medium
                    max-w-full hover:!text-black hover:!bg-[#c11425]"
                  >
                    Get Started For Free
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* laptop */}
          <div className="relative bg-main-red !mt-[200px] h-[47vw] w-full">
            <motion.img
              src={laptopForMobile}
              alt=""
              className="absolute bottom-[0%] right-1/2 translate-x-1/2"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            />
          </div>
        </div>

        {/* for tablet & laptop */}
        <div
          className="hidden md:flex justify-between items-start w-[1000px] max-w-[90vw]
          !mx-auto lg:w-[1250px]"
        >
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="w-[400px] max-w-[45%]"
          >
            <div className="relative text-justify w-[345px] lg:w-[500px]">
              <h1 className="font-extrabold text-[48px] lg:text-[70px]">
                Torob Pricing Robot
              </h1>
              <div
                className="w-[95px] absolute bottom-[-20px]
                right-0 lg:w-[130px] lg:bottom-[-25px]"
              >
                <Lottie animationData={heartRate} loop={true} />
              </div>
            </div>

            <div className="rounded-full w-[150px] h-[7px] bg-main-red !mt-4"></div>

            <p
              className="text-justify !mt-8 text-[#565656] w-[340px] text-[17px] leading-relaxed
            lg:w-[510px] lg:leading-loose lg:text-[20px]"
            >
              Outsource the competitive pricing of your WordPress website to a
              24/7 smart bot. Stay on top in Torob, win the Torob Buy Box, and
              maximize your sales.
            </p>
            <Link to="/signup">
              <Button
                type="primary"
                className="!text-black !h-[40px] w-[220px] !mt-6 lg:!text-[18px] lg:w-[270px]
                lg:!h-[47px] md:!text-[16px]"
              >
                Get Started For Free
              </Button>
            </Link>
          </motion.div>
          <motion.img
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            src={laptop}
            alt="laptop"
            className="w-[600px] max-w-[47%] lg:w-[620px]"
          />
        </div>
      </div>

      {/* Statistics and Torob */}
      <div>
        {/* for Mobile */}
        <div className="md:hidden">
          <div className="w-[80vw] !mx-auto !mt-16">
            <motion.h2
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="text-[20px] font-extrabold text-justify w-full"
            >
              Your Income Increases, Your Cost Decreases!
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              viewport={{ once: true }}
              className="text-justify text-[#565656] !mt-3"
            >
              The Torob Pricing Robot helps you cut HR costs, boost profits, and
              attract more visitors to your website.
            </motion.p>

            {/* Statistics */}
            <div className="flex justify-between items-center !mt-4">
              {statistics.map((statistic: any, index: number) => {
                if (index >= 2 && isMobile) {
                  return;
                }
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 1.7 + 0.7 * index,
                    }}
                    className="border-l-[1px] !pl-2 md:pl-4"
                    key={"statistic" + index}
                  >
                    <div className="text-main-red font-extrabold text-[20px]">
                      {statistic.percentNumber}%
                    </div>
                    <div className="!mt-2">{statistic.title}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="bg-main-red w-full !mt-[210px] !h-[350px]">
            <motion.img
              src={torobInsideMobile}
              alt="mobile torob website"
              className="-translate-y-1/3 w-[350px] !mx-auto"
              initial={{
                y: 30,
              }}
              whileInView={{
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
            />
          </div>
        </div>

        {/* laptop & tablet */}
        <div
          className="hidden md:flex items-start justify-start
          !mt-24 md:w-[1000px] lg:w-[1500px] max-w-[90%] gap-x-8"
        >
          <img
            src={mobile}
            alt="torob inside a mobile"
            className="md:w-[700px] md:max-w-[45%] lg:w-[550px] lg:max-w-[100000px]"
          />
          <div>
            <motion.div
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-extrabold md:text-[3.55vw] lg:text-[3.9vw]">
                Your Income increases, Your Cost Decreases!
              </h2>
              <span
                className="text-[17px] lg:text-[21px] text-justify !mt-4 block
            text-[#565656] leading-relaxed lg:w-[650px]"
              >
                {isDesktop
                  ? "The Torob Pricing Robot helps you cut HR costs, boost profits, attract more visitors to your website, and automate tedious pricing tasks — saving you time, money, and effort while keeping your store always competitive."
                  : "The Torob Pricing Robot helps you cut HR costs, boost profits, and attract more visitors to your website."}
              </span>
            </motion.div>

            <div className="flex justify-between items-center md:!mt-20 lg:!mt-32">
              {statistics.map((statistic: any, index: number) => {
                if (index >= 2 && isTablet) {
                  return;
                }
                return (
                  <motion.div
                    initial={{
                      x: 20, 
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0, 
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.5,
                    }}
                    viewport={{ once: true }}
                    key={"statistic" + index}
                    className="border-l-[1px] border-black !pl-4 flex
                  flex-col justify-between h-full lg:gap-y-6"
                  >
                    <span
                      className="text-main-red font-bold md:text-[25px]
                    lg:text-[30px]"
                    >
                      {statistic.percentNumber}%
                    </span>
                    <span className="md:!mt-4 lg:!mt-0 lg:text-[22px]">
                      {statistic.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div
        className="max-w-[85vw] !mx-auto !mt-12 md:!mt-24
       md:max-w-[90vw]"
      >
        <motion.div
          initial={{
            y: -50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-[20px] font-extrabold w-full md:text-[25px] lg:text-[32px]">
            Everything you would expect from a robot!
          </h2>
          <p className="text-[#565656] !mt-1 text-justify md:text-[19px] lg:text-[22px]">
            Start using the robot to realize its power
          </p>
          <div className="bg-main-red rounded-full w-[200px] h-[5px] !mt-4"></div>
        </motion.div>

        <div className="lg:flex lg:justify-between lg:items-center">
          <motion.div
            className="lg:max-w-[35%]"
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.4,
            }}
            viewport={{ once: true }}
          >
            <div className="!mt-6">
              {features.map((feature: string, index: number) => (
                <div
                  className="flex justify-start gap-x-2 items-center text-[#2D2D2D]
                    !mt-7"
                  key={"feature" + index}
                >
                  <TiTick className="text-main-red !text-[19px] md:!text-[26px] lg:!text-[27px]" />
                  <span className="block max-w-[69vw] text-justify md:text-[19px] lg:text-[20px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="max-w-[60%]">
            <motion.div
              className="hidden lg:block"
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
              <SampleProduct />
            </motion.div>
            <motion.div
              className="flex justify-start gap-x-4 !mt-8 lg:!mt-12 h-[40px] md:hidden lg:flex"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 1.4,
              }}
            >
              <Link to="/singup">
                <Button
                  className="!text-black !h-full lg:!text-[18px]"
                  type="primary"
                >
                  {isMobile ? "Start now" : "Start for free now"}
                </Button>
              </Link>
              <Button
                className="!bg-main-blue text-white !h-full hover:!bg-[#2393af] lg:!text-[18px]"
                type="primary"
              >
                Free consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="lg:!mt-16">
        {/* for mobile */}
        <div className="max-w-[85vw] !mx-auto md:hidden ">
          <div className="w-[350px] max-w-[85vw] !mx-auto relative !mt-16 !pb-[70px]">
            <img src={StepsImage} alt="steps image" className="" />
            <img
              src={color}
              alt="color"
              className="absolute right-0 bottom-[20px] w-[35px] h-[35px]"
            />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
          >
            <h2 className="text-[20px] font-extrabold">How to Start?</h2>
            <div
              className="!mt-1 bg-gradient-to-r from-main-red to-[#6B839F] h-[5px] rounded-full
              w-[100px]"
            ></div>
          </motion.div>

          {/* steps */}
          <div className="flex flex-col gap-y-12 !mt-10 relative">
            <div
              className="absolute top-0 left-[15px] border-r-[1px] border-[#E2E2E2] h-full
              z-[-1]"
            ></div>

            {steps.map((step: string, index: number) => (
              <motion.div
                initial={{
                  y: -15,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 1.4 + index * 0.7,
                }}
                className="flex justify-start items-center gap-x-3"
              >
                <div
                  className="w-[30px] h-[30px] bg-gradient-to-b from-main-red to-[#6B839E] rounded-full
                  flex items-center justify-center text-white"
                >
                  {index + 1}
                </div>

                <div
                  style={{
                    maxWidth: "calc(100% - 50px)",
                  }}
                >
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* for tablet & laptop */}
        <div
          className="max-w-[90vw] !mx-auto flex justify-between items-start
          hidden md:flex !mt-24"
        >
          <motion.div className="lg:!pt-32">
            <motion.div
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 1,
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-[20px] md:!text-[25px] lg:!text-[32px] font-extrabold">
                How to Start?
              </h2>
              <div
                className="!mt-1 bg-gradient-to-r from-main-red to-[#6B839F] h-[5px] rounded-full
                w-[100px] lg:!mt-6"
              ></div>
            </motion.div>

            {/* steps */}
            <div className="flex flex-col gap-y-12 !mt-10 lg:!mt-16 relative lg:gap-y-24">
              <div
                className="absolute top-0 left-[15px] border-r-[1px] border-[#E2E2E2] h-full
                z-[-1]"
              ></div>

              {steps.map((step: string, index: number) => (
                <motion.div 
                initial={{
                  y: -15, 
                  opacity: 0, 
                }}
                whileInView={{
                  y: 0, 
                  opacity: 1, 
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7, 
                  delay: 1.4 + index * 0.7
                }}
                className="flex justify-start items-center gap-x-3">
                  <div
                    className="w-[30px] h-[30px] bg-gradient-to-b from-main-red to-[#6B839E] rounded-full
                    flex items-center justify-center text-white lg:!w-[34px] lg:!h-[34px] lg:text-[18px]"
                  >
                    {index + 1}
                  </div>

                  <div className="md:text-[19px] lg:text-[23px]">{step}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="w-[350px] max-w-[60%] !mx-auto relative !pb-[50px] lg:w-[650px] lg:max-w-[80%] lg:!mx-0">
            <img src={StepsImage} alt="steps image" className="w-full" />
            <img
              src={color}
              alt="color"
              className="absolute right-0 bottom-[20px] w-[35px] h-[35px]
              lg:h-[75px] lg:w-[75px]"
            />
          </div>
        </div>
      </div>

      {/* Calculation */}
      <div>
        {/* for tablet & mobile */}
        <div className="!mt-65 relative h-[700px] lg:hidden">
          {/* calculate box */}
          <motion.div
            className="bg-white absolute top-[-170px] right-1/2 translate-x-1/2 z-20
            w-[550px] max-w-[85vw] h-[800px] rounded-xl"
            style={{
              boxShadow: "0px 0px 4px rgba(0,0,0,0.2)",
            }}
            initial={{
              y: 100,
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            <h2 className="font-bold text-[20px] text-center !mt-8">
              Price Calculation
            </h2>

            <div
              className="w-[90%] h-[320px] border-[1px] border-[#E3E3E3] rounded-xl max-w-[85vw]
              !mx-auto !mt-8 bg-white absolute right-1/2 top-[60px] translate-x-1/2 z-20 !px-4
              !py-10"
            >
              <div>
                <div className="flex justify-between !px-[5px]">
                  <span>Products: </span>
                  <span className="text-main-red font-semibold">
                    {numberOfProducts}
                  </span>
                </div>
                <Slider
                  min={100}
                  step={100}
                  max={5000}
                  value={numberOfProducts}
                  onChange={(value: number) => setNumberOfProducts(value)}
                />
                <div
                  className="flex justify-between items-start text-[12px] text-[#9CA3AF] leading-0 !mt-[12px]
                  !px-[5px]"
                >
                  <span>100</span>
                  <span>5000</span>
                </div>
              </div>
              <div className="!mt-12">
                <div className="flex justify-between !px-[5px]">
                  <span>Daily price check: </span>
                  <span className="text-main-red font-semibold">
                    {dailyPriceCheck}
                  </span>
                </div>
                <Slider
                  min={1}
                  max={7}
                  value={dailyPriceCheck}
                  onChange={(value: number) => setDailyPriceCheck(value)}
                />
                <div className="flex justify-between items-start text-[12px] text-[#9CA3AF] leading-0 !mt-[12px]">
                  <span>1</span>
                  <span>7</span>
                </div>
              </div>
              <Link to="/signup">
                <Button
                  type="primary"
                  className="!mx-auto !mt-8 !block !w-full !h-[45px] md:!text-[16px]"
                >
                  Start your 7 day free
                </Button>
              </Link>
            </div>

            <div
              className="w-[90%] h-[330px] border-[1px] border-[#E3E3E3] rounded-xl max-w-[85vw]
              !mx-auto !mt-8 bg-white absolute right-1/2 top-[420px] translate-x-1/2 z-20 !px-4 !pb-8 !pt-4"
            >
              <h3 className="text-center font-bold text-[17px]">Cost</h3>
              <div className="!mt-4">
                <div className="flex justify-between">
                  <span>Daily Cost: </span>
                  <span className="text-main-red font-semibold">
                    USD {dailyCost.toLocaleString()}
                  </span>
                </div>
                <hr className="border-[#E3E3E3] !mt-[8px]" />
              </div>
              <div className="!mt-16">
                <div className="flex justify-between">
                  <span>Monthly Cost: </span>
                  <span className="text-main-red font-semibold">
                    USD {monthlyCost.toLocaleString()}
                  </span>
                </div>
                <hr className="border-[#E3E3E3] !mt-[8px]" />
              </div>

              <div
                className="flex justify-center items-center border-[1px] border-main-red
                !h-[45px] !px-4 rounded-lg text-main-red !mt-14 md:!text-[16px]"
              >
                USD 0.01 per check
              </div>
            </div>

            <div
              className="h-[320px] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2
              border-r-[1px] border-[#BABABA]"
            ></div>
          </motion.div>

          {/* red section */}
          <div className="w-full h-[700px] absolute top-[0%] right-0 bg-main-red overflow-hidden"></div>
        </div>

        {/* for laptop */}
        <div className="lg:bg-gradient-to-t lg:from-main-blue lg:via-white lg:to-white lg:!pb-8">
          <div
            className="hidden lg:block relative w-full lg:!mt-16 h-[660px]
          w-full !mx-auto overflow-hidden"
            style={{
              boxShadow: "0px 4px 4px rgba(0,0,0,0.3)",
            }}
          >
            <motion.div
              className="bg-white w-[1400px] max-w-[90%] absolute top-[5%] right-1/2 translate-x-1/2
              !px-8 z-20 rounded-xl !pb-12 z-30 h-[560px]"
              style={{
                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
              }}
              initial={{
                y: 70,
              }}
              whileInView={{
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              <h2 className="font-bold text-[24px] text-center !mt-8">
                Price Calculation
              </h2>

              <div className="!mt-12 flex justify-center items-center gap-x-16 relative">
                <div
                  className="w-[100px] border-t-[1px] border-[#BABABA] absolute top-1/2
                  left-1/2 -translate-x-1/2 translate-y-1/2 !z-[-10]"
                ></div>

                <div className="flex flex-col justify-between items-center bg-white">
                  <div
                    className="border-[1px] border-[#E3E3E3] !py-8 !px-6 w-[500px] h-[400px]
                    rounded-lg relative"
                  >
                    <div className="w-full">
                      <div className="flex justify-between items-start !px-2">
                        <span>Number of Products: </span>
                        <span className="text-main-red font-bold">
                          {numberOfProducts}
                        </span>
                      </div>
                      <Slider
                        min={100}
                        step={100}
                        max={5000}
                        value={numberOfProducts}
                        onChange={(value: number) => setNumberOfProducts(value)}
                      />
                      <div className="flex justify-between items-start !px-2">
                        <span
                          className="text-[#9CA3AF] text-[14px] leading-none block
                          leading-none"
                        >
                          100
                        </span>
                        <span className="text-[#9CA3AF] text-[14px] leading-none block leading-none">
                          5000
                        </span>
                      </div>
                    </div>
                    <div className="w-full !mt-14">
                      <div className="flex justify-between items-end !px-2">
                        <span>Daily price check: </span>
                        <span className="text-main-red font-semibold">
                          {dailyPriceCheck}
                        </span>
                      </div>
                      <Slider
                        min={1}
                        max={7}
                        value={dailyPriceCheck}
                        onChange={(value: number) => setDailyPriceCheck(value)}
                      />
                      <div className="flex justify-between items-start !px-2">
                        <span className="text-[#9CA3AF] text-[14px] leading-none block leading-none">
                          1
                        </span>
                        <span className="text-[#9CA3AF] text-[14px] leading-none block leading-none">
                          7
                        </span>
                      </div>
                    </div>

                    <Link to="signup">
                      <Button
                        type="primary"
                        className="!w-[92%] !h-[45px] !text-[17px] !absolute 
                        !bottom-[10%] right-1/2 translate-x-1/2 bg-yellow-500"
                      >
                        Start your 7 day free
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-center bg-white">
                  <div
                    className="border-[1px] border-[#E3E3E3] !px-6 w-[500px]
                    rounded-lg h-[400px] relative"
                  >
                    <h3 className="text-[18px] font-bold text-center !mt-6">
                      Cost
                    </h3>
                    <div className="w-full !mt-6">
                      <div className="flex justify-between items-start ">
                        <span>Daily Cost</span>
                        <span className="text-main-red font-bold">
                          USD {dailyCost.toLocaleString()}
                        </span>
                      </div>
                      <hr className="border-[#E3E3E3] !mt-3" />
                    </div>
                    <div className="w-full !mt-14">
                      <div className="flex justify-between items-end">
                        <span>Monthly Cost: </span>
                        <span className="text-main-red font-semibold">
                          USD {monthlyCost.toLocaleString()}
                        </span>
                      </div>
                      <hr className="border-[#E3E3E3] !mt-3" />
                    </div>

                    <Button
                      className="!w-[92%] !h-[45px] !mt-12 !text-[17px] !text-main-red !border-main-red
                      !absolute bottom-[10%] right-1/2 translate-x-1/2 !cursor-default"
                    >
                      Just USD 0.01 per price check
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* red section */}
            <div className="bg-main-red absolute top-[20%] w-full h-full z-20"></div>

            {/* blue section */}
            <div
              className="w-[700px] h-[100px] bg-[#3DC3E4] absolute z-30 left-[-19%] bottom-[15%] rotate-[45deg]"
              style={{
                boxShadow: "0px 0px 5px rgba(16, 97, 117, 0.8)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div>
        {/* for mobile */}
        <div className="md:hidden !pb-12">
          <img src={team} alt="our team picture" className="w-full" />

          <div className="w-[700px] max-w-[85vw] !mx-auto">
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
            >
              <h2 className="font-extrabold text-[20px] !mt-8">
                GET IN TOUCH WITH OUR TEAM
              </h2>

              <div className="rounded-full w-[100px] h-[5px] bg-main-red !mt-2"></div>
            </motion.div>

            <div className="flex flex-col gap-y-7 !mt-12 border-r-[5px] border-main-blue">
              {contacts.map((contact: any, index: number) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 1.1 + index * 0.7,
                  }}
                  className="flex justify-start items-center h-[60px] gap-x-4"
                >
                  <div
                    className="rounded-full w-[60px] h-[60px] bg-main-blue border-[6px] 
                    border-[#63E0FF] flex items-center justify-center"
                  >
                    <contact.icon className="text-white text-[25px]" />
                  </div>
                  <div className="flex flex-col justify-between h-full">
                    <span className="font-bold">{contact.name}</span>
                    <span className="text-[#787878]">{contact.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* for tablet & laptop */}
        <div className="hidden md:flex relative justify-between items-start">
          <div className="!pl-[5%]">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-extrabold text-[20px] lg:text-[33px] !mt-8 lg:!mt-16">
                GET IN TOUCH WITH OUR TEAM
              </h2>

              <div className="rounded-full w-[100px] lg:w-[200px] h-[5px] bg-main-red !mt-2 lg:!mt-6"></div>
            </motion.div>
            <div className="flex flex-col gap-y-7 lg:gap-y-16 !mt-12">
              {contacts.map((contact: any, index: number) => (
                <motion.div
                  className="flex justify-start items-center h-[60px] lg:h-[90px] gap-x-4"
                  key={"contact" + index}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: (index + 1.5) * 0.5,
                  }}
                >
                  <div
                    className="rounded-full w-[60px] h-[60px] bg-main-blue border-[5px] 
                    border-[#63E0FF] flex items-center justify-center lg:w-[90px] lg:h-[90px]"
                  >
                    <contact.icon className="text-white text-[25px] lg:text-[40px]" />
                  </div>
                  <div className="flex flex-col justify-between h-full !py-2">
                    <span className="font-bold lg:text-[24px]">
                      {contact.name}
                    </span>
                    <span className="lg:text-[21px] text-[#787878]">
                      {contact.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <img
            src={pcTeam}
            alt="our team picture"
            className="w-[500px] max-w-[55%] lg:w-[670px]"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
