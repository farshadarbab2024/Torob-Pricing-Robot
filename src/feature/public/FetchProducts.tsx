import { Progress } from "antd";
import React, { useEffect, useState } from "react";
function FetchProduct({fetchingStatus, setFetchingStatus}: {fetchingStatus:any, setFetchingStatus:any}) {
  console.log("fetchingStatus: " + fetchingStatus) ; //ntdelete
  if(fetchingStatus == "noStatus"){
    return <div></div> ;
  }
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if(percent == 100){
        setFetchingStatus("success") ;
        setTimeout(() => {
            setFetchingStatus("noStatus") ;
        }, 4000) 
    }
    setTimeout(() => {
      setPercent((prev: number) => prev + 1);
    }, 200);
  }, [percent]);

  return (
    <div
      className="fixed rounded-full bg-white group flex
        bottom-[50px] right-[70px] justify-between items-center
        w-[60px] h-[60px] hover:w-[330px] transition-all duration-500 z-20
        hover:!pl-6 cursor-default"
      style={{
        boxShadow: "0px 0px 5px rgba(0,0,0,0.4)",
      }}
    >
      <p
        className=" transition duration-1000 overflow-x-hidden
            whitespace-nowrap"
      >
        {
            fetchingStatus==="fetching" ? "Fetching your products..." : fetchingStatus == "success" ? "Products fetched successfully" : "Failed fetching products"
        }
      </p>
      <Progress
        type="circle"
        percent={percent}
        size="small"
        strokeColor={fetchingStatus == "error" ? "#e91e33" : fetchingStatus == "success" ? "#45a717" : "#17849f" }
      />
    </div>
  );
}

export default FetchProduct;
