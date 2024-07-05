import React from "react";
import { ImageShare } from "../../Asets/images";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[167px]  bg-red-600 shadow py-[20px] px-[60px]">
      <div className="flex justify-between w-full">
        <div className=" pl-3.5   left-[475px] top-[38px]    gap-[27px] inline-flex">
          <div className="text-black text-2xl ml-[200px] font-bold font-Inter">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white rounded-[20px] w-[597px] py-[11px] pl-[50px]"
            />
          </div>
          <img
            className="w-[31px] h-[31px] absolute ml-[210px] my-[10px]"
            src={ImageShare}
          />
        </div>
        <div className="inline-flex gap-3">
          <Link to="/register">
            <div className="px-[37px] py-3  top-[38px]  bg-black rounded-[20px] justify-center items-center ">
              <div className="text-white text-2xl font-bold font-['Inter']">
                Daftar
              </div>
            </div>
          </Link>
          <Link to="/login">
            <div className="pl-[35px] pr-[34px] py-3  top-[38px]  bg-white rounded-[20px] border-2 border-black justify-center items-center ">
              <div className="text-black text-2xl font-bold font-['Inter']">
                Masuk
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Link to="/">
          <div className="left-[377px] top-[131px] absolute text-black text-2xl font-bold font-['Inter']">
            BERANDA
          </div>
        </Link>
        <div className="left-[578px] top-[131px] absolute text-black text-2xl font-bold font-['Inter']">
          TENTANG
        </div>
        <div className="left-[820px] top-[131px] absolute text-black text-2xl font-bold font-['Inter']">
          STATISTIK
        </div>
        <div className="left-[1080px] top-[131px] absolute text-black text-2xl font-bold font-['Inter']">
          BERITA
        </div>
        <div className="w-[105px] h-[105px] left-[47px] top-[31px] absolute bg-white rounded-full border-2 border-black" />
      </div>
    </div>
  );
};

export default Navbar;
