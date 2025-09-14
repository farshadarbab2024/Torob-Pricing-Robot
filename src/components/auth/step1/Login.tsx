import { Button, Card, Form, Input, message, Typography } from "antd";
import { FcGoogle } from "react-icons/fc";
import { GiConfirmed } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";
import { CheckSquareFilled } from "@ant-design/icons";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react"; //ntdelete
import { IoMdCloseCircle } from "react-icons/io";

function Login({setMode}:{setMode:(mode: "login" | "signup") => any }) {
  const schema = z 
  .object({
    email: z.email({ message: "Enter a valid email address" }),
    password: z
      .string({ message: "Password is required" })
      ,
  })


  type FormData = z.infer<typeof schema>;

  const onFormSubmit = (data: FormData) => {
    alert("OK"); //ntdelete
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSignupClicked = () => {
    setMode("signup") ; 
  }

  return (

    <div
      className="bg-[#E91E33] w-full h-screen relative md:flex md:justify-between lg:h-[580px] 
        lg:w-[1000px] lg:max-w-[90vw] lg:max-h-[90vh] lg:shadow-[0px_0px_7px_rgba(0,0,0,0.25)] lg:rounded-2xl
        "
    >
      <div
        className="md:!w-[40%] !pt-16 !pr-4 !pl-4 md:flex md:justify-center md:items-start !h-screen lg:!bg-[url('/images/login/side-bg.png')] 
          lg:bg-no-repeat lg:bg-cover lg:bg-center rounded-2xl lg:block lg:pt-16 relative lg:!h-full"
      >
        <div className="!hidden md:!block">
          <TypeAnimation
            sequence={[
              "Welcome Back!",
              2000,
              "Something New is on the Way!",
              2000,
            ]}
            wrapper="span"
            speed={35}
            style={{
              fontSize: "25px",
              display: "block",
              textAlign: "center",
              color: "white",
            }}
            repeat={Infinity}
          />
        </div>

        <Button
          className="!border-2 !border-white !bg-[#E91E33] !text-white
            !absolute lg:!top-[70%] !right-1/2 translate-x-1/2 lg:block max-w-full
            !w-[200px] !h-[54px] !rounded-full !text-[20px] hover:!bg-white 
            hover:!text-[#E91E33] top-[3%] md:top-[50%] md:-translate-y-1/2  "
            onClick={handleSignupClicked}
        >
          Signup
        </Button>
      </div>
      <Card
        className="!absolute !bottom-0 !right-0 w-full md:!h-full md:!w-[60%]
          !rounded-br-none !rounded-bl-none
          md:!rounded-none lg:!border-none lg:!rounded-tr-xl lg:!rounded-br-xl 
          lg:!pr-16 lg:!pl-16 !p-0 !pt-1 !pb-2 max-h-[85vh] md:max-h-screen 
          shadow-[-5px_-5px_20px_rgba(0,0,0,0.17)] lg:shadow-none overflow-auto"
      >
        <h1 className="text-center font-black text-[26px] md:text-[30px]">
          Login
        </h1>

        <Button
          className="!mt-6 md:!mt-8 !mx-auto !block !w-full !h-[52px] md:!h-[62px] !text-[18px] 
            md:!text-[20px]
            "
          icon={
            <FcGoogle className="!mr-2 md:!mr-4 !text-[18px] md:!text-[20px]" />
          }
        >
          Login With Google
        </Button>

        <p className="text-center !mt-4 text-[#828282]">Or</p>
        <Form className="!mt-4" onFinish={handleSubmit(onFormSubmit)}>
          <Form.Item
            name="email"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Email"
                  prefix={
                    <HiOutlineMail className="text-[#828282] !mr-2 !mt-2" />
                  }
                  variant="filled"
                  allowClear={{clearIcon: <IoMdCloseCircle className="!text-[25px]" />}}
                  autoComplete="off"
                  className="!text-[18px] !pt-3 !pb-3 !pr-4 !pl-4 md:!p-4 !placeholder-red-500
                  "
                  maxLength={100}
                  {...field}
                />
              )}
            />
            {/* <Input
              placeholder="Email"
              prefix={<HiOutlineMail className="text-[#828282] !mr-2 !mt-2" />}
              variant="filled"
              allowClear
              autoComplete="off"
              className="!text-[18px] !pt-3 !pb-3 !pr-4 !pl-4 md:!p-4 !placeholder-red-500
                "
              maxLength={100}
            /> */}
          </Form.Item>
          <Form.Item
            name="password"
            validateStatus={errors.password ? "error" : ""}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  className="!text-[18px] !pt-3 !pb-3 !pr-4 !pl-4 md:!p-4 !mt-2"
                  variant="filled"
                  placeholder="Password"
                  prefix={
                    <TbPasswordFingerprint className="text-[#828282] !mr-2" />
                  }
                  autoComplete="off"
                  allowClear={{clearIcon: <IoMdCloseCircle className="!text-[25px]" />}}

                  {...field}
                />
              )}
            />
          </Form.Item>
          <Button
            className="!rounded-full !mx-auto !block !bg-[#E91E33] !text-white !text-[20px]
          !w-[200px] !h-[54px] !mt-8 md:!absolute md:bottom-[5%] lg:bottom-[5%] md:right-1/2 md:translate-x-1/2
          hover:!bg-white !border-2 border-[#E91E33] hover:!text-[#E91E33]"
            htmlType="submit"
          >
            LOGIN
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
