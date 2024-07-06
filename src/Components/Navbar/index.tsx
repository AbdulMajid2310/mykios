import React from "react";
import { ImagePrice, ImageShare } from "../../Asets/images";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="max-w-[1440px] h-[167px] bg-red-600 shadow py-[35px] px-[60px]">
      <div className="flex justify-between w-full">
        <div className="pl-3.5 left-[475px] top-[38px] gap-[27px] inline-flex">
          <div className="text-black text-2xl ml-[150px] font-bold font-Inter">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white rounded-[20px] w-[730px] py-[11px] pl-[50px]"
            />
          </div>
          <img
            className="w-[31px] h-[31px] absolute ml-[160px] my-[10px]"
            src={ImageShare}
          />
        </div>
        <div className="inline-flex gap-3">
          <Link to="/register">
            <div className="px-[37px] py-3 top-[38px] bg-white hover:bg-black hover:text-white rounded-[20px] justify-center items-center">
              <div className=" text-2xl font-bold font-['Inter']">Daftar</div>
            </div>
          </Link>
          <Link to="/login">
            <div className="pl-[35px] pr-[34px] py-3 top-[38px] bg-white hover:bg-black hover:text-white rounded-[20px] border-2 border-black justify-center items-center">
              <div className=" text-2xl font-bold font-['Inter']">Masuk</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex gap-[50px] absolute ml-[175px] mt-[20px]">
        <Link
          to="/"
          className={location.pathname === "/" ? "text-white" : "text-black"}
        >
          <div className="text-2xl font-bold font-['Inter'] hover:text-white">
            BERANDA
          </div>
        </Link>
        <Link to="/tentang">
          <div className="text-2xl font-bold font-['Inter'] hover:text-white">
            TENTANG
          </div>
        </Link>
        <Link
          to="/statistik"
          className={
            location.pathname === "/statistik" ? "text-white" : "text-black"
          }
        >
          <div className="text-2xl font-bold font-['Inter'] hover:text-white">
            STATISTIK
          </div>
        </Link>
        <Link
          to="/berita"
          className={
            location.pathname === "/berita" ? "text-white" : "text-black"
          }
        >
          <div className="text-2xl font-bold font-['Inter'] hover:text-white">
            BERITA
          </div>
        </Link>
      </div>
      <Link to="/profile">
        <div className="w-[105px] h-[105px] absolute mt-[-70px]  rounded-full ">
          <img
            src={ImagePrice}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
