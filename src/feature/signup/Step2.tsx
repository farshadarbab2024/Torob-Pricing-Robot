import React, { useEffect, useState } from "react";
import { Button, Flex, Form } from "antd";
import OtpInput from "react-otp-input";
import { Statistic } from "antd";
import Auth from "../../services/Auth";
import useMessage from "antd/es/message/useMessage";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom" ; 

const { Timer } = Statistic;


function Step2({
  step, 
  setStep,
}: {
  step: any, 
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const navigator = useNavigate() ; 
  const resendTime = 60; // How long wait user for resend code //ntch change it to 60

  const [otp, setOtp] = useState("");
  const handleTimerFinished = (): void => {
    setIsPermittedResendEmail(true);
  };
  const [messageApi, contextHolder] = useMessage();
  const [isPermittedResendEmail, setIsPermittedResendEmail] =
    useState<boolean>(false);
  const [timer, setTimer] = useState<number>(Date.now() + resendTime * 1000);
  const [resendCodeButtonLoading, setResendCodeButtonLoading] = useState(false);
  const [verifyEmailButtonLoading, setVerifyEmailButtonLoading] = useState(false) ;
  
  // reset time when user go to next step
  useEffect(() => {
    setTimer(Date.now() + resendTime * 1000) ; 
  }, [step]) ; 

  const handleResendCodeClicked = () => {
    setResendCodeButtonLoading(true);

    Auth.resendVerificationCode()
      .then(() => {
        messageApi.success("Your verification code has been sent");
        setTimer(Date.now() + resendTime * 1000);
        setIsPermittedResendEmail(false);
        setResendCodeButtonLoading(false);
      })
      .catch((error) => {
        console.log(error); //ntdelete
        setResendCodeButtonLoading(false);
      });
  };

  const handleVerifyEmail = () => {
    setVerifyEmailButtonLoading(true) ; 

    const data = {
      "code": otp, 
    } ;

    Auth.verfiyEmail(data)
      .then(() => {
        setVerifyEmailButtonLoading(false) ; 
        navigator("/panel") ; 
      })
      .catch((error) => {
        if(error?.response?.data?.message){
          messageApi.error(error.response.data.message) ;
        }else{
          messageApi.error("Email verification failed")
        }
        setVerifyEmailButtonLoading(false) ; 
      }) ;

  }

  return (
    <div
      className="bg-white w-screen h-[85.5vh]
        rounded-tr-xl rounded-tl-xl !pb-10 !pt-20 !px-6 flex flex-col items-center 
        relative md:w-1/2 md:h-full md:rounded-none lg:!shadow-none"
      style={{
        boxShadow: "0px 0px 15px rgba(0,0,0,0.17)",
      }}
    >
      {contextHolder}

      {/* Back Icon */}
      <div className="absolute left-0 top-0 !pl-[25px] !pt-[25px] !pb-[10px] !pr-[10px]
      cursor-pointer"
      onClick={() => setStep(prev => prev - 1)}
      >
        <IoArrowBack className="text-2xl !text-highest-black" />
      </div>

      <h2 className="font-extrabold text-2xl text-highest-black">Email Confirmation</h2>
      <p className="text-center text-secondary !mt-1 text-base">
        Enter the code we sent to your email
      </p>
      <Form className="!w-[500px] !max-w-full !mt-6">
        <Form.Item name="verificationCode">
          <Flex
            gap="middle"
            align="center"
            justify="center"
            className="!max-w-[90vw]"
          >
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  className="!w-[48px] !max-w-[12vw] !h-[48px] !mx-[3px] rounded border-[1px] border-white
                  bg-secondary2 focus:bg-white focus:!border-main-red !outline-none font-medium
                  text-xl text-highest-black"
                />
              )}
            />
          </Flex>
        </Form.Item>

        {/* Resend Section */}
        {!isPermittedResendEmail ? (
          <div className="flex justify-center item-start text-base">
            <span>Wait&nbsp;</span>
            <Timer
              type="countdown"
              value={timer}
              className="!border-b-[1px] !border-main-red !font-bold !text-main-red
            !text-sm"
              onFinish={handleTimerFinished}
              format="mm:ss"
              valueStyle={{ color: "var(--main-red)", fontSize: "16px" }}
            />
            <span>&nbsp;to resend code</span>
          </div>
        ) : (
          <Button
            type="text"
            className="!border-b-[1px] !border-t-0 !border-r-0 !border-l-0 !border-main-red 
            !text-main-red border-dashed text-base !rounded-none !px-0 !pb-[0px] hover:!bg-white 
            !mx-auto !block !h-auto focus:!bg-white"
            loading={resendCodeButtonLoading}
            onClick={handleResendCodeClicked}
          >
            <span className="!ml-[6px] !font-medium">Resend code</span>
          </Button>
        )}

        {/* Verify Email Button */}
        <Button
          htmlType="submit"
          className="!w-[195px] !h-[53px] !block
            !bg-main-red !text-xl !font-medium !text-white !rounded-full
            hover:!bg-main-red-hover !absolute !bottom-[5%] !right-1/2 !translate-x-1/2"
          onClick={handleVerifyEmail}
          loading={verifyEmailButtonLoading}
        >
          <span className="!ml-2">Verify email</span>
        </Button>
      </Form>
    </div>
  );
}

export default Step2;
