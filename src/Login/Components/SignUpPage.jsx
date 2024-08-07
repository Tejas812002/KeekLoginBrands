import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [shoPass, setShowPass] = useState(false);
  return (
    <div>
      <div className="ml-11 mt-[66px]">
        <h1 className="">
          <span className="font-semibold text-[32px] text-[#384EDD]">
            Sign up |{" "}
          </span>
          <span className="text-[24px]">Brands</span>
        </h1>
        <div className="mb-[26px] mt-2">
          <p className="text-[#8E9090]">
            Welcome to Keek, please enter your data to create <br /> your
            account.
          </p>
        </div>
        <div className="flex items-center gap-5 mb-[34px]">
          <button className="border py-[14px] px-[80px] rounded-lg flex items-center">
            <FcGoogle className="text-2xl mr-3" /> <span>Google</span>
          </button>
          <Link to={"/mobilesignup"}>
            <button className="border py-[14px] px-[44px] rounded-lg flex items-center">
              <FaMobileAlt className="text-2xl mr-3 opacity-60" />{" "}
              <span>Mobile number</span>
            </button>
          </Link>
        </div>
        <div className="flex items-center mb-5">
          <hr className="w-1/2 text-[#B1B2B2] " />
          <span className="px-6 text-sm text-[#B1B2B2]">OR</span>
          <hr className="w-1/2 text-[#B1B2B2]" />
        </div>
        <div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-5">
              <label htmlFor="" className="text-lg block">
                Name<span className="text-[#06F]">*</span>
              </label>
              <input
                className="border border-[#363939] px-5 py-3 w-[500px] rounded-lg"
                type="text"
                name=""
                id=""
                placeholder="John.doe@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-lg block">
                Email<span className="text-[#06F]">*</span>
              </label>
              <input
                className="border border-[#363939] px-5 py-3 w-[500px] rounded-lg"
                type="email"
                name=""
                id=""
                placeholder="John.doe@gmail.com"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="" className="text-lg block">
                Password<span className="text-[#06F]">*</span>
              </label>
              <input
                className="border border-[#363939] px-5 py-3 w-[500px] rounded-lg"
                type={`${shoPass ? "text" : "password"}`}
                name=""
                id=""
                placeholder="Password"
                required
              />
              <div
                onClick={() => {
                  setShowPass(!shoPass);
                }}
                className="absolute top-11 right-6 pl-3 flex items-center"
              >
                {shoPass ? (
                  <IoEyeOutline className="text-2xl opacity-50" />
                ) : (
                  <BsEyeSlash className="text-2xl opacity-50" />
                )}
              </div>
            </div>
            <div className="mb-[26px] mt-1.5 text-[#8E9090] text-sm">
              Must be at least 8 characters.
            </div>
            <div className="mb-7">
              <input type="checkbox" name="" id="term" className="mr-2" required/>
              <label htmlFor="term">
                I Agree to
                <span className="text-[#06F]">Terms & Condition</span>
              </label>
            </div>
            <div className="mb-[42px]">
              <button
                type="submit"
                className="w-full text-center text-white py-4 rounded-[10px] bg-[#0066FF]"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="mb-[26px]">
            <hr className="text-[#B1B2B2]" />
          </div>
          <div className="text-center mb-6">
            Already Have an account?{" "}
            <Link to={"/"}>
              <span className="text-[#06F]">Login</span>
            </Link>
          </div>
          <div className="text-center">
            Want to Sign up as a creator? &nbsp;
            <span className="text-[#06F]">
              Influencers page
              <RiArrowRightUpLine className="inline-block text-lg text-[#06F]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
