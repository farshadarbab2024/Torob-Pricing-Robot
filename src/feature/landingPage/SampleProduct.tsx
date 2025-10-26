import { CheckOutlined } from "@ant-design/icons";
import { Input, message, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

function SampleProduct() {
  const [isActive, setIsActive] = useState(true);
  const [minPrice, setMinPrice] = useState(176.0);
  const [torobLink, setTorobLink] = useState(
    "https://torob.com/p/0e5d2c04-55f4-469a-abb9-558b5049747d/%D8%AC%D8%A7%D8%B1%D9%88-%D8%B1%D8%A8%D8%A7%D8%AA%DB%8C%DA%A9-%D8%B4%DB%8C%D8%A7%DB%8C%D9%88%D9%85%DB%8C-%D9%85%D8%AF%D9%84-x20-max/"
  );
  const [torobLinkEdit, setTorobLinkEdit] = useState<boolean>(false);
  const [minPriceEdit, setMinPriceEdit] = useState<boolean>(false);
  const product = {
    title: "Samsung Gear S2 Smartwatch with Rubber Strap",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/7d4f98b261c6d4915e1c49c094fd74d609d080f5_1739711253.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  };
  const shortTorobLink = torobLink.slice(0, 20) + "...";
  const minPriceInput = useRef(null);
  const torobLinkInput = useRef(null);
  const [isMinPriceLoading, setIsMinPriceLoading] = useState(false);
  const [isTorobLinkLoading, setIsTorobLinkLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [isStatusLoading, setIsStatusLoading] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);
  const [priceChangeStatus, setPriceChangeStatus] = useState<"no_status" | "success" | "failed">("no_status") ; 
  const [timeDivShow, setTimeDivShow] = useState(false) ; 

  useEffect(() => {
    if (lineHeight >= 45) {
      setPriceChangeStatus("success") ;
    }
    const timer = setTimeout(() => {
      setPriceChangeStatus("no_status")
      setLineHeight((prev) => prev + 1);
    }, 1000);

    if(lineHeight >= 45){
      setLineHeight(0);
    }

    return () => clearTimeout(timer) ; 
  }, [lineHeight]);

  const handleMinPriceEdit = () => {
    setMinPriceEdit(true);
    setTimeout(() => {
      minPriceInput.current.focus();
    }, 0);
  };
  const handleTorobLinkEdit = () => {
    setTorobLinkEdit(true);
    setTimeout(() => {
      torobLinkInput.current.focus();
    }, 0);
  };

  const handleMinPriceBlur = () => {
    setMinPriceEdit(false);
    setIsMinPriceLoading(true);
    setTimeout(() => {
      setIsMinPriceLoading(false);
      messageApi.success("Min Price has changed successfully!");
    }, 1000);
  };
  const handleTorobLinkBlur = () => {
    setTorobLinkEdit(false);
    setIsTorobLinkLoading(true);
    setTimeout(() => {
      setIsTorobLinkLoading(false);
      messageApi.success("Min Price has changed successfully!");
    }, 1000);
  };

  const handleStatusClicked = () => {
    setIsStatusLoading(true);
    setTimeout(() => {
      setIsActive((prev) => !prev);
      setIsStatusLoading(false);
      messageApi.success("Product status has successfully changed");
    }, 1000);
  };
  return (
    <div
      className="flex justify-start items-start !py-4
      h-[180px] bg-white gap-x-2 !pr-8 !w-[720px] relative rounded-tr rounded-br overflow-hidden"
      style={{
        boxShadow: "0px 0px 4px rgba(0,0,0,0.3)",
      }}
      onMouseOver={() => setTimeDivShow(true)}
      onMouseLeave={() => setTimeDivShow(false)}
    >
      {contextHolder}

      <div
        className="absolute left-0 top-0 bg-main-blue transition duration-1000 w-[3px] z-30"
        style={{
          height: lineHeight * 4,
          backgroundColor: priceChangeStatus == "no_status" ? "var(--main-blue)" : priceChangeStatus == "success" ? "var(--success-green)" : "var(--main-red)", 
        }}
      >
      </div>

      <div
      className="absolute top-0 left-0 h-full rounded-full bg-white/95 w-[180px]
       overflow-x-hidden transition duration-500"
      style={{
        transform: timeDivShow ? "translateX(-50%)" : "translateX(-100%)"
      }}
      >
        <span
        className="text-[25px] font-medium block absolute left-[75%] top-1/2
        -translate-x-1/2 -translate-y-1/2 text-main-blue"
        >
          {priceChangeStatus == "no_status" ? (45 - lineHeight) : priceChangeStatus == "success" ? <CheckOutlined className="text-success-green" /> : <RxCross2 />}
        </span>
        
      </div>


      <img src={product.image} alt="sample image" className="h-full" />
      <div>
        <div className="font-bold text-[17px]">{product.title}</div>

        <div>
          <div className="flex items-center gap-x-2 !mt-2">
            Minimume Price:{" "}
            <span style={{ display: minPriceEdit ? "none" : "block" }}>
              {isMinPriceLoading ? <Spin /> : "$" + minPrice}
            </span>
            <Input
              autoComplete="off"
              style={{
                display: minPriceEdit ? "block" : "none",
              }}
              onBlur={handleMinPriceBlur}
              onPressEnter={() => minPriceInput.current.blur()}
              className="!w-[100px] !h-[23px] !py-[4px]"
              ref={minPriceInput}
              value={minPrice}
              onChange={(e: any) => setMinPrice(e.currentTarget.value)}
            />
            <RiEdit2Fill
              className="text-main-red cursor-pointer"
              style={{
                display: minPriceEdit ? "none" : "block",
              }}
              onClick={handleMinPriceEdit}
            />
          </div>
          <div className="flex items-center gap-x-2 !mt-2">
            Torob Link:{" "}
            {torobLinkEdit ? (
              ""
            ) : isTorobLinkLoading ? (
              <Spin />
            ) : torobLink.length > 20 ? (
              shortTorobLink
            ) : (
              torobLink
            )}
            <RiEdit2Fill
              className="text-main-red cursor-pointer"
              onClick={handleTorobLinkEdit}
              style={{
                display: torobLinkEdit ? "none" : "block",
              }}
            />
            <Input
              autoComplete="off"
              style={{
                display: torobLinkEdit ? "block" : "none",
              }}
              onBlur={handleTorobLinkBlur}
              onPressEnter={() => torobLinkInput.current.blur()}
              className="!w-[300px] !h-[23px] !py-[4px] max-w-full"
              ref={torobLinkInput}
              value={torobLink}
              onChange={(e: any) => setTorobLink(e.currentTarget.value)}
            />
          </div>
          <div className="!mt-2">
            Status:{" "}
            <span
              className="cursor-pointer"
              style={{
                color: isActive ? "var(--success-green)" : "var(--main-red)",
              }}
              onClick={handleStatusClicked}
            >
              {isStatusLoading ? (
                <Spin />
              ) : isActive ? (
                <span>
                  Active <CheckOutlined />
                </span>
              ) : (
                <span>
                  Inactive <RxCross2 className="inline" />
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute right-0 top-0 h-full w-[40px] flex flex-col justify-between
        rounded-tr rounded-br overflow-hidden"
      >
        <Link
          target="_blank"
          to="https://torob.com/p/0f722af0-6a3d-4e12-8a03-cb02d404ecf8/%DA%A9%DB%8C%D8%A8%D9%88%D8%B1%D8%AF-%D8%B1%D8%AF%D8%B1%D8%A7%DA%AF%D9%88%D9%86-fizz-k617-%D8%A8%D8%A7%D8%B3%DB%8C%D9%85/"
          className="block h-[50%] w-full !bg-main-red flex items-center justify-center"
        >
          <img src={logo} alt="logo" className="w-[25px] h-[25px]" />
        </Link>
        <Link
          target="_blank"
          to="https://www.etsy.com/de-en/listing/1580061524/tea-towel-for-wedding-anniversary?ref=shop_home_feat_1&bes=1&sts=1&logging_key=98db4577e2b79f338f3273bc329d27c0470a3e98%3A1580061524"
          className="block h-[50%] w-full bg-main-blue flex items-center justify-center"
        >
          <BiSolidShoppingBagAlt className="w-[20px] h-[20px] !text-white" />
        </Link>
      </div>
    </div>
  );
}

export default SampleProduct;
