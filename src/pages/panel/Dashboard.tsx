import React, { useEffect, useState } from "react";
import { Button, ConfigProvider, Input, message, Spin, Statistic } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { IoCloseCircle, IoSearch } from "react-icons/io5";
import { HiRefresh } from "react-icons/hi";
import Products from "../../services/Products";
import InfiniteScroll from "react-infinite-scroll-component";
import { RiEdit2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Lottie from "lottie-react";
import live from "../../assets/animation/live.json";
import FetchProduct from "../../feature/public/FetchProducts";

const { Search } = Input;

interface Product {
  id: number;
  title: string;
  sku: string;
  current_price: number;
  min_price: number;
  torob_link: string;
  is_active: boolean;
  average_rank: number;
  image: string;
}

const { Timer } = Statistic;

function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [productStates, setProductStates] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [robotStatusLoading, setRobotStatusLoading] = useState(false);
  const [timeHeight, setTimeHeight] = useState(0);
  const [isChangePriceSuccessfull, setIsChangePriceSuccessfull] =
    useState<boolean>(false);
  const periodTime = 30;
  const [deadline, setDeadline] = useState(Date.now() + 1000 * periodTime);
  const [fetchingStatus, setFetchingStatus] = useState<
    "noStatus" | "error" | "success" | "fetching"
  >("noStatus");
  const [fetchingProductsLoading, setFetchingProductsLoading] = useState<boolean>(false) ; 
  const [robotStatus, setRobotStatus] = useState() ; 
  const setState = (productId: number, stateName: any, stateValue: any) => {
    setProductStates((prev) => ({
      ...prev,
      [productId]: { ...(prev[productId] || {}), [stateName]: stateValue },
    }));
  };

  const getProducts = async () => {
    const page = Math.floor(products.length / 3 + 1);
    const result = await Products.getProducts(page);
    const newProducts = result.products;

    setHasMore(result.has_more);
    setProducts((prev) => [...prev, ...newProducts]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleStatusClick = (productId: number, currentStatus: boolean) => {
    setState(productId, "statusLoading", true);
    setTimeout(() => {
      setState(productId, "statusLoading", false);
      setState(productId, "isActive", !currentStatus);
    }, 1000);
  };

  const handleMinPriceEditClick = (id: number) => {
    setState(id, "showMinPriceInput", true);

    // Wait for next render
    setTimeout(() => {
      const input = document.getElementById("minPriceInput" + id);
      input?.focus();
    }, 2);
  };

  const handleMinPriceChange = (e: any, productId: number) => {
    const newValue = e.currentTarget.value;
    setState(productId, "minPrice", newValue);
  };

  const handleMinPriceInputBlur = (productId: number) => {
    setState(productId, "isMinPriceLoading", true);
    setTimeout(() => {
      setState(productId, "isMinPriceLoading", false);
    }, 1000);
    if (productStates[productId].minPrice == "") {
      setState(productId, "minPrice", 0);
    }
    setState(productId, "showMinPriceInput", false);
  };
  const handleTorobLinkEditClick = (id: number) => {
    setState(id, "showTorobLinkInput", true);

    // Wait for next render
    setTimeout(() => {
      const input = document.getElementById("torobLinkInput" + id);
      input?.focus();
    }, 2);
  };

  const handleTorobLinkChange = (e, productId: number) => {
    const newValue = e.currentTarget.value;
    setState(productId, "torobLink", newValue);
  };

  const isTorobLinkStandard = (torobLink) => {
    if (
      !torobLink.startsWith("https://torob.com/p/") &&
      !torobLink.startsWith("https://www.torob.com/p/") &&
      !torobLink.startsWith("http://torob.com/p/") &&
      !torobLink.startsWith("http://www.torob.com/p/")
    ) {
      return false;
    }
    return true;
  };

  const handleTorobLinkInputBlur = (productId: number, torobLink: string) => {
    if (!isTorobLinkStandard(torobLink)) {
      messageApi.error("Torob Link is invalid");
      return false;
    }
    setState(productId, "isTorobLinkLoading", true);
    setTimeout(() => {
      setState(productId, "isTorobLinkLoading", false);
    }, 1000);

    setState(productId, "showTorobLinkInput", false);
  };

  const handleRobotStatus = () => {
    setRobotStatusLoading(true);
    setTimeout(() => {
      setRobotStatus((prev:boolean) => !prev);
      setRobotStatusLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      if (timeHeight < 170) {
        setTimeHeight((prev) => prev + 1);
      } else {
      }
    }, periodTime * (90 / 17));
  }, [timeHeight]);

  const handleWaitEnds = () => {
    setIsChangePriceSuccessfull(true);
    setTimeout(() => {
      setTimeHeight(0);
      setIsChangePriceSuccessfull(false);
      setDeadline(Date.now() + 1000 * periodTime);
    }, 2000);
  };

  const handleFetchProductsButtonClicked = () => {
    setFetchingProductsLoading(true) ; 
    setTimeout(() => {
      setFetchingStatus("fetching");
      setFetchingProductsLoading(false) ; 
    }, 1000);
  };
  return (
    <div
      className="bg-white w-[1000px] max-w-[95%] min-h-[90vh] !mx-auto
      rounded !px-12 !py-8"
    >
      {contextHolder}
      <h1 className="text-center font-bold text-[24px]">Dashboard</h1>

      <FetchProduct
        fetchingStatus={fetchingStatus}
        setFetchingStatus={setFetchingStatus}
      />
      {/* Navbar */}
      <div
        className="w-full flex items-center justify-between
      rounded !mt-6"
      >
        <div className="flex items-center justify-start gap-x-2 !h-[40px]">
          <Button
            className="!h-full hover:!text-main-red group"
            onClick={handleRobotStatus}
            style={{
              color: robotStatus ? "var(--main-red)" : "#bbbbbb",
              borderColor: robotStatus ? "var(--main-red)" : "#bbbbbb",
            }}
            loading={robotStatusLoading}
          >
            {robotStatus ? (
              <div className="w-[13px] h-[13px]">
                <Lottie animationData={live} loop={true} />
              </div>
            ) : (
              <div
                className="rounded-full bg-[#bbbbbb] w-[10px] h-[10px] group-hover:bg-main-red
                transition duration-300"
              ></div>
            )}

            {robotStatus ? "Robot On" : "Robot Off"}
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
                clearIcon: <IoCloseCircle className="text-xl" />,
              }}
              autoComplete="off"
              size="large"
            />
          </ConfigProvider>
        </div>
        <Button
          className="!bg-main-red !text-white !font-medium !h-[40px]"
          loading={fetchingProductsLoading ? true : false}
          onClick={handleFetchProductsButtonClicked}
        >
          <HiRefresh className="!text-[16px]" /> Update Products
        </Button>
      </div>

      <hr className="border-[#B2B2B2] !mt-4" />

      {/* Products */}
      <InfiniteScroll
        dataLength={products.length}
        next={getProducts}
        hasMore={hasMore}
        loader={<span className="!mt-4 block">Loading...</span>}
        style={{ overflow: "visible" }}
      >
        {products.map((product, index: number) => {
          const minPriceInputShow =
            productStates[product.id]?.showMinPriceInput || false;
          const torobLinkInputShow =
            productStates[product.id]?.showTorobLinkInput || false;
          const minPrice =
            productStates[product.id]?.minPrice ?? product.min_price;
          const torobLink =
            productStates[product.id]?.torobLink ?? product.torob_link;
          const isActive =
            productStates[product.id]?.isActive ?? product.is_active;
          const isMinPriceLoading =
            productStates[product.id]?.isMinPriceLoading ?? false;
          const isTorobLinkLoading =
            productStates[product.id]?.isTorobLinkLoading ?? false;

          return (
            <div
              key={"product" + index}
              className="flex justify-start items-center
              bg-[#F5F5F5] !mt-4 h-[170px] gap-x-4 rounded relative 
              group"
              style={{
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              }}
            >
              <div
                className="absolute top-0 left-0 bg-[#f5f5f5]/90 w-[2px] h-[170px] rounded-tr-[50%]
              rounded-br-[50%] group-hover:w-[85px] transition-all duration-300"
                style={{
                  display: robotStatus ? "block" : "none",
                }}
              >
                <div
                  className="bg-main-blue w-[2px] absolute left-0 top-0"
                  style={{
                    height: timeHeight,
                    backgroundColor: isChangePriceSuccessfull
                      ? "var(--success-green)"
                      : "var(--main-blue)",
                    boxShadow: isChangePriceSuccessfull
                      ? "0px 0px 5px var(--success-green)"
                      : "none",
                  }}
                ></div>
                <span
                  className="text-[25px] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2
                text-[#1F1F1F] opacity-0 group-hover:opacity-100 transition duration-500"
                >
                  {isChangePriceSuccessfull ? (
                    <CheckOutlined className="!text-success-green" />
                  ) : (
                    <Timer
                      type="countdown"
                      value={deadline}
                      onFinish={handleWaitEnds}
                      format="mm:ss"
                      valueStyle={{
                        fontSize: "18px",
                        fontWeight: "semibold",
                      }}
                    />
                  )}
                </span>
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="h-full
                rounded"
              />
              <div className="w-full">
                <span className="font-bold text-[18px] block">
                  {product.title}
                </span>
                <div
                  className="flex justify-start w-full
                  gap-x-16 !mt-4"
                >
                  <div>
                    <span className="block text-[#4D4D4D]">
                      Current Price: {product.current_price}
                    </span>
                    <span className="block text-[#4D4D4D] !mt-2">
                      SKU: {product.sku}
                    </span>
                    <span className="block text-[#4D4D4D] !mt-2">
                      Average Rank: {product.average_rank}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[#4D4D4D] flex justify-start items-center gap-x-2">
                      Minimum Price:
                      <span
                        style={{
                          display: minPriceInputShow ? "none" : "inline",
                        }}
                      >
                        {isMinPriceLoading ? (
                          <Spin size="small" />
                        ) : (
                          " $" + minPrice
                        )}
                      </span>
                      <RiEdit2Fill
                        className="!text-main-blue
                    !text-[18px] !cursor-pointer hover:!text-[#2792ad]"
                        onClick={() => handleMinPriceEditClick(product.id)}
                        style={{
                          display: minPriceInputShow ? "none" : "inline",
                        }}
                      />
                      <Input
                        className="!w-[50px] !h-[22px] !rounded-none !bg-[#f5f5f5]
                        !pl-0 !text-[17px]"
                        id={"minPriceInput" + product.id}
                        style={{
                          display: minPriceInputShow ? "block" : "none",
                        }}
                        variant="underlined"
                        value={minPrice}
                        onChange={(e) => handleMinPriceChange(e, product.id)}
                        onBlur={() => handleMinPriceInputBlur(product.id)}
                        onPressEnter={() => handleMinPriceInputBlur(product.id)}
                      />
                    </span>
                    <span className="block text-[#4D4D4D] !mt-2">
                      Torob Link:&nbsp;
                      <span
                        style={{
                          display: torobLinkInputShow ? "none" : "inline",
                        }}
                      >
                        {isTorobLinkLoading ? (
                          <Spin size="small" />
                        ) : torobLink.length > 20 ? (
                          torobLink.slice(0, 20) + "..."
                        ) : (
                          torobLink
                        )}
                      </span>
                      <RiEdit2Fill
                        className="!text-main-blue
                        !text-[18px] !cursor-pointer hover:!text-[#2792ad]
                        !ml-2"
                        onClick={() => handleTorobLinkEditClick(product.id)}
                        style={{
                          display: torobLinkInputShow ? "none" : "inline",
                        }}
                      />
                      <Input
                        className="!w-[300px] !h-[22px] !rounded-none !bg-[#f5f5f5]
                        !pl-0 !text-[17px]"
                        id={"torobLinkInput" + product.id}
                        style={{
                          display: torobLinkInputShow ? "inline" : "none",
                        }}
                        variant="underlined"
                        value={torobLink}
                        onChange={(e) => handleTorobLinkChange(e, product.id)}
                        onBlur={() =>
                          handleTorobLinkInputBlur(product.id, torobLink)
                        }
                        onPressEnter={() =>
                          handleTorobLinkInputBlur(product.id, torobLink)
                        }
                      />
                    </span>
                    <span className="block text-[#4D4D4D] !mt-2">
                      Status:{" "}
                      <Button
                        loading={
                          productStates[product.id]?.statusLoading ?? false
                        }
                        style={{
                          color: isActive
                            ? "var(--success-green)"
                            : "var(--main-red)",
                        }}
                        className="cursor-pointer inline-flex justify-start items-center
                        !p-0 !bg-[#f5f5f5] hover:!bg-[#f5f5f5] !border-none !text-[16px]
                        !font-medium"
                        onClick={() => handleStatusClick(product.id, isActive)}
                      >
                        {isActive ? "Active" : "Inactive"}

                        <CheckOutlined
                          className="!text-success-green"
                          style={{
                            display: isActive ? "block" : "none",
                          }}
                        />
                        <RxCross2
                          className="text-main-red"
                          style={{
                            display: isActive ? "none" : "block",
                          }}
                        />
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default Dashboard;
