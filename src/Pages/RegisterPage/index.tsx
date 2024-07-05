import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconCard,
  IconHome,
  IconLock,
  IconMessage,
  IconTelp,
  IconUser,
} from "../../Asets/icons";
import { IconDone, ImageSlide } from "../../Asets/images";

const RegisterPage = () => {
  const [showSucces, setShowSucces] = useState(false);

  const handleOpenSucces = () => {
    setShowSucces(true);
  };

  const handleClose = () => {
    setShowSucces(false);
  };
  return (
    <main>
      <section>
        {showSucces && (
          <div className="fixed inset-0 bg-black bg-opacity-50 items-center flex justify-center z-50">
            <div className="w-[640px] h-auto py-[30px] bg-white rounded-[10px] text-center ">
              <div className="flex justify-center">
                <img
                  src={IconDone}
                  alt=""
                  className="w-[105px] h-[105px] bg-[#00EE0A] rounded-full border-2 border-white"
                />
              </div>
              <p className="text-center  text-[32px] font-bold font-inter">
                Berhasil !!
              </p>
              <p className="text-center text-black/opacity-60 text-[15px] font-bold font-['Inter']">
                Pendaftaran berhasil, dan data Anda sudah di input, terimakasih.
              </p>
              <Link to="/login">
                <div
                  onClick={handleClose}
                  className="w-[511px] cursor-pointer mx-[20px] mt-[30px] h-[51px] pl-[207px] pr-[225px] py-[11px] bg-red-600 rounded-[5px] justify-start items-center inline-flex"
                >
                  <div className="text-white text-2xl font-bold font-['Inter']">
                    Selesai
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </section>
      <section className="grid grid-cols-2 gap-[50px] mx-[60px] mt-[60px] pb-[100px]">
        <section className="w-[500px] h-[400px] mt-[30px]">
          <img
            src={ImageSlide}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </section>
        <section className="flex justify-center ">
          <div className="w-[556px] h-auto relative pb-[30px] bg-white rounded-[30px] border border-black">
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
                type="text"
                placeholder="NIK KTP"
                className="w-[511px] h-[53px] outline-none pl-[50px]  top-[143px]  bg-white rounded-[5px] border border-black font-inter"
              />
              <div className="absolute mt-[-40px] ml-[10px]">{IconCard()}</div>
            </div>
            <div className="px-[20px] mt-[30px]">
              <input
                type="text"
                placeholder="Alamat Rumah"
                className="w-[511px] h-[53px] outline-none pl-[50px]  top-[143px]  bg-white rounded-[5px] border border-black font-inter"
              />
              <div className="absolute mt-[-40px] ml-[10px]">{IconHome()}</div>
            </div>
            <div className="px-[20px] mt-[30px]">
              <input
                type="text"
                placeholder="No WhhatsApp"
                className="w-[511px] h-[53px] outline-none pl-[50px]  top-[143px]  bg-white rounded-[5px] border border-black font-inter"
              />
              <div className="absolute mt-[-40px] ml-[10px]">{IconTelp()}</div>
            </div>
            <div className="px-[20px] mt-[30px]">
              <input
                type="email"
                placeholder="Email"
                className="w-[511px] h-[53px] outline-none pl-[50px]  top-[143px]  bg-white rounded-[5px] border border-black font-inter"
              />
              <div className="absolute mt-[-40px] ml-[10px]">
                {IconMessage()}
              </div>
            </div>
            <div className="px-[20px] mt-[30px]">
              <input
                type="password"
                placeholder="Password"
                className="w-[511px] h-[53px] outline-none pl-[50px]  top-[143px]  bg-white rounded-[5px] border border-black font-inter"
              />
              <div className="absolute mt-[-40px] ml-[10px]">{IconLock()}</div>
            </div>

            <div
              onClick={handleOpenSucces}
              className="w-[511px] mx-[20px] mt-[30px] h-[51px] pl-[207px] pr-[225px] py-[11px] bg-red-600 rounded-[5px] justify-start items-center inline-flex"
            >
              <div className="text-white text-2xl font-bold font-['Inter']">
                Masuk
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default RegisterPage;
