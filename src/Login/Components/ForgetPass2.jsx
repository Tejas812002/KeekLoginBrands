import { Link } from "react-router-dom";

const ForgetPass2 = () => {
  return (
    <div className="px-[35px]">
      <Link to={"/forgotpass"}>
        <div className=" flex item-center mt-[50px] ">
          <h2 className="text-[#000000] text-[16px]"> &lt; Back</h2>
        </div>
      </Link>
      <div className="w-[500px] h-[400px] text-black flex flex-col space-y-9 pt-[111px]">
        <p className=" font-sans text-[#000000] text-[34px]">
          Enter Your Code
          <div className="flex flex-row space-x-2">
            <h4 className="text-lg text-[#8E9090] text-[16px] font-open-sans">
              {" "}
              We’ve sent you code at
            </h4>
            <h1 className="text-lg text-[#0066FF] text-[16px] font-open-sans">
              {" "}
              98XXXXX112 or Holly@gmail.com{" "}
            </h1>
          </div>
        </p>
        <div className="flex space-x-5 mb-4 size-[55px] ">
          <input
            type="text"
            className="w-12 h-12 rounded-xl border border-[#363939] text-center"
            maxLength="1"
          />
          <input
            type="text"
            className="w-12 h-12  rounded-xl border border-[#363939]"
            maxLength="1"
          />
          <input
            type="text"
            className="w-12 h-12  rounded-xl border border-[#363939]"
            maxLength="1"
          />
          <input
            type="text"
            className="w-12 h-12  rounded-xl border border-[#363939]"
            maxLength="1"
          />
        </div>
        <div className="flex flex-row space-x-2">
          <h4 className="text-lg text-[#000000] text-[16px] font-open-sans">
            Didn’t receive the Message?
          </h4>
          <h1 className="text-lg text-[#0066FF] font-open-sans">Resend </h1>
        </div>
        <div className="flex flex-col space-y-8  ">
          <div className="flex flex-col bg-[#0066FF] text-center rounded-[10px] border-[#363939] my-[16px]">
            <button className="text-[#FFFFFF] text-[18px] text-center w-full px-[16px] h-[50px] rounded-md gap-[8px] ">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass2;
