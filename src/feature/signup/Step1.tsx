import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { FcGoogle } from "react-icons/fc";
import { IoArrowBack, IoCloseCircle } from "react-icons/io5";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import Auth from "../../services/Auth";
interface MainData {
  email: string;
  password: string;
}

function Step1({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const schema = z
    .object({
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
      confirmPassword: z
        .string({ message: "Please enter a password" })
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[A-Za-z]/, {
          message: "Password must contain at least one letter",
        })
        .regex(/[0-9]/, {
          message: "Password must contain at least one number",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
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

    Auth.register(mainData)
      .then(() => {
        setLoading(false);
        setStep(2);
      })
      .catch((error) => {
        if (error?.response?.data?.message?.email) {
          const errorText: string = error.response.data.message.email[0];
          setError("email", { type: "server", message: errorText });
        } else if (error?.response?.data?.message?.password) {
          const errorText: string = error.response.data.message.password[0];
          setError("password", { type: "server", message: errorText });
        } else {
          messageApi.error("Registration failed");
        }
        setLoading(false);
      });
  };

  return (
    <div
      className="bg-white w-screen h-[85.5vh] md:w-1/2 md:h-screen lg:h-full
        lg:rounded-tr-xl lg:rounded-tl-xl !pb-10 !py-5 !px-6 flex flex-col items-center
        relative  md:!rounded-none 
        lg:!shadow-none"
      style={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.17)" }}
    >
      {contextHolder}

      <h1 className="text-center text-2xl font-black text-highest-black">
        Sign Up
      </h1>

      <Form
        onFinish={handleSubmit(onFinish)}
        className="!w-[500px] !max-w-full "
      >
        {/* Signup With Google */}
        <Button
          className="!flex !items-center !justify-center gap-x-2 !mx-auto
          !text-lg !w-full !h-15 !mt-4"
        >
          <FcGoogle />
          Sign Up With Google
        </Button>

        <span
          className="text-secondary block !my-4 text-center
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
        <Form.Item
          name="confirmPassword"
          validateStatus={errors.confirmPassword ? "error" : ""}
          help={errors.confirmPassword?.message}
          className="!w-full"
        >
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input.Password
                autoComplete="off"
                className="!w-full !h-15 !text-lg !pl-5 !mt-2"
                placeholder="Confirm Password"
                maxLength={200}
                {...field}
                variant="filled"
                prefix={<GiConfirmed className="!mr-2" />}
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
          <span className="!mx-2">SIGN UP</span>
          <IoArrowBack className=" !text-white rotate-180" />
        </Button>
      </Form>
    </div>
  );
}

export default Step1;
