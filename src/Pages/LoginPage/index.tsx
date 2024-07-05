import React from "react";
import { IconLock, IconUser } from "../../Asets/icons";
import { Link } from "react-router-dom";
import { ImageShare, ImageSlide } from "../../Asets/images";

const LoginPage = () => {
  return (
    <main
      className="grid grid-cols-2 gap-[50px] mx-[60px] mt-[60px] pb-[100px]
    "
    >
      <section className="w-[500px] h-[400px] mt-[30px]">
        <img
          src={ImageSlide}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </section>
      <section className="flex justify-center ">
        <div className="w-[556px] h-[479px] relative bg-white rounded-[30px] border border-black">
          <div className=" w-full text-center  text-black text-[40px] font-bold font-inter pt-[20px]">
            <p>Masuk Ke akun Anda</p>
            <p className="left-[93px] top-[95px]  text-black/opacity-50 text-base font-bold font-inter">
              Baru di Website pasar proklamasi?
            </p>
            <p className="left-[365px] top-[95px]  text-red-600 text-base font-bold font-['Inter']">
              Daftar disini
            </p>
          </div>

          <div className="px-[20px] mt-[20px]">
            <input
              type="email"
              placeholder="Email"
              className="w-[511px] h-[53px] outline-none pl-[50px]  top-[143px]  bg-white rounded-[5px] border border-black font-inter"
            />
            <div className="absolute mt-[-40px] ml-[10px]">{IconUser()}</div>
          </div>
          <div className="px-[20px] mt-[30px]">
            <input
              type="password"
              placeholder="Password"
              className="w-[511px] h-[53px] outline-none pl-[50px]  top-[143px]  bg-white rounded-[5px] border border-black font-inter"
            />
            <div className="absolute mt-[-40px] ml-[10px]">{IconLock()}</div>
          </div>
          <Link to="/">
            <div className="w-[511px] mx-[20px] mt-[30px] h-[51px] pl-[207px] pr-[225px] py-[11px] bg-red-600 rounded-[5px] justify-start items-center inline-flex">
              <div className="text-white text-2xl font-bold font-['Inter']">
                Masuk
              </div>
            </div>
          </Link>
          <Link to="/forgot-password">
            <div className="text-right mr-[20px] mt-[20px] text-red-600 text-base font-bold font-['Inter']">
              Lupa Kata Sandi?
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
