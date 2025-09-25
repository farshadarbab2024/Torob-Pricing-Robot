import { Button, Result } from "antd";
import notFoundSrc from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="bg-main-red-light w-screen h-screen">
      <div
        className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2
      w-[85vw]"
      >
        <img src={notFoundSrc} alt="Not Found" className="w-96 !mx-auto " />
        <h1 className="font-black text-center !mt-8 text-[28px]">Not Found!</h1>
        <p className="text-center !mt-2 text-[18px] text-secondary3">
          The page you’re looking for doesn’t exist.
        </p>

        <Link to="/">
          <Button
            type="primary"
            className="!block !mx-auto !mt-10"
            size="large"
          >
            Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
