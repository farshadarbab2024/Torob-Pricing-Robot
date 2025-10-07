import React, { useState } from "react";
import { Button, Card, Form, Input, message } from "antd";
import { FcGoogle } from "react-icons/fc";
import { IoArrowBack, IoCloseCircle } from "react-icons/io5";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import Auth from "../services/Auth";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/Images/background-image.png";
import RightSide from "../feature/login/RightSide";
interface MainData {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const schema = z.object({
    email: z.email({ message: "Please enter a valid email address" }),
    password: z
      .string({ message: "Please enter a password" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Za-z]/, {
        message: "Password must contain at least one letter",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number",
      }),
  });
  type formData = z.infer<typeof schema>;
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onFinish = (rawData: formData) => {
    setLoading(true);
    const mainData: MainData = {
      email: rawData.email,
      password: rawData.password,
    };

    Auth.login(mainData)
      .then((response) => {
        navigate("/panel");
        setLoading(false);
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          messageApi.error(error.response.data.message);
        } else {
          messageApi.error("Login failed");
        }
        setLoading(false);
      });

    //   const googleLogin = useGoogleLogin({
    //     onSuccess: async (tokenResponse) => {
    //       const token = tokenResponse.access_token;
    //       navigate("/panel");
    //     },
    //     onError: () => {
    //       messageApi.error("Login Failed");
    //     },
    //   });
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden lg:bg-cover lg:bg-center
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className="bg-main-red w-full h-full lg:w-[850px] lg:h-[550px] lg:max-w-[90vw] lg:max-h-[90vh]
        relative lg:absolute lg:top-1/2 lg:right-1/2 
        lg:translate-x-1/2 lg:-translate-y-1/2 flex flex-col
        justify-between md:flex-row-reverse md:justify-between lg:rounded-xl
        md:bg-white border-[1px] border-white"
      >
        <RightSide />
        <div
          className="bg-white w-screen h-[85.5vh] md:w-[55%] md:h-screen lg:h-full
          rounded-tr-xl rounded-tl-xl !pb-10 !py-5 !px-6 flex flex-col items-center
          relative  md:!rounded-none lg:!rounded-xl 
          md:!shadow-none"
          style={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.25)" }}
        >
          {contextHolder}

          <h1 className="text-center text-2xl font-black text-highest-black">
            Login
          </h1>

          <Form
            onFinish={handleSubmit(onFinish)}
            className="!w-[500px] !max-w-full"
          >
            {/* Login With Google */}
            <Button
              className="!flex !items-center !justify-center gap-x-2 !mx-auto
          !text-lg !w-full !h-15 !mt-10"
              //   onClick={() => googleLogin()}
            >
              <FcGoogle />
              Login With Google
            </Button>

            <span
              className="text-secondary block !my-8 text-center
          text-lg"
            >
              or
            </span>

            <Form.Item
              name="email"
              validateStatus={errors.email ? "error" : ""}
              help={errors.email?.message}
              className="!w-full"
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    autoComplete="off"
                    className="!w-full !h-15 !text-lg !pl-5"
                    placeholder="Email"
                    allowClear={{
                      clearIcon: <IoCloseCircle className="text-2xl" />,
                    }}
                    maxLength={200}
                    {...field}
                    variant="filled"
                    prefix={<MdOutlineEmail className="!mr-2" />}
                  />
                )}
              />
            </Form.Item>

            <Form.Item
              name="password"
              validateStatus={errors.password ? "error" : ""}
              help={errors.password?.message}
              className="!w-full"
            >
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    autoComplete="off"
                    className="!w-full !h-15 !text-lg !pl-5 !mt-2"
                    placeholder="Password"
                    maxLength={200}
                    {...field}
                    variant="filled"
                    prefix={<TbPasswordFingerprint className="!mr-2" />}
                  />
                )}
              />
            </Form.Item>

            <Button
              htmlType="submit"
              className="!w-[180px] !h-[53px] !block
            !bg-main-red !text-xl !font-medium !text-white !rounded-full
            hover:!bg-main-red-hover !absolute bottom-[5%] right-1/2 translate-x-1/2
            !flex !items-center !justify-center !gap-x-0"
              loading={loading}
            >
              <span className="!mx-2">LOGIN</span>
              <IoArrowBack className=" !text-white rotate-180" />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
