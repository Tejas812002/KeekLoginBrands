/* eslint-disable no-unused-vars */
import img1 from "../../assets/unsplash_img1.png";
import profile from "../../assets/Intersect.svg";
import { MdStar } from "react-icons/md";
const ImagePanel = () => {
  return (
    <div className="relative">
      <img className="w-[874px] h-[975px]" src={img1} alt="" />
      <div className="absolute bottom-12 left-16 w-[600px]">
        <h1 className="font-greatMango text-white text-5xl tracking-wider leading-[120%]">
          POWERED BY CREATORS AROUND THE WORLD
        </h1>
        <p className="text-white text-2xl mb-8">
          Collaborate with your favourite influencers from trending social media
          platforms easily
        </p>
        <div className="flex gap-3 ">
          <div className="flex items-center -gap-3">
            <img src={profile} alt="" />
            <img src={profile} alt="" />
            <img src={profile} alt="" />
            <img src={profile} alt="" />
          </div>
          <div>
            <span className="flex text-[#FFB700] text-2xl gap-1 items-center">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <span className="text-white text-base">5.0</span>
            </span>
            <span className="text-white">200+ Influencer joined</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePanel;
