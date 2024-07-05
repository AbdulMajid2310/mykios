import React, { useState } from "react";
import { IconMessage } from "../../Asets/icons";
import { ImageMessage } from "../../Asets/images";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const [showSucces, setShowSucces] = useState(false);

  const handleOpenSucces = () => {
    setShowSucces(true);
  };

  const handleClose = () => {
    setShowSucces(false);
  };
  return (
    <section>
      {showSucces && (
        <div className="fixed inset-0 bg-black bg-opacity-50 items-center flex justify-center z-50">
          <div className="w-[690px] px-[23px] h-auto py-[30px] bg-white rounded-[10px] text-center ">
            <div className="flex justify-center">
              <img
                src={ImageMessage}
                alt=""
                className="w-[105px] h-[105px] bg-[#00EE0A] rounded-full border-2 border-white"
              />
            </div>
            <p className="text-center  text-[32px] font-bold font-inter">
              Email Notifikasi Berhasil Terkirim
            </p>
            <p className="text-center text-black/opacity-60 text-[15px] font-bold font-['Inter']">
              Jika email anda sudah terdaftar, anda akan menerima pesan untuk
              mengatur ulang kata sandi di email anda dalam beberapa menit.
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
      <div className="text-center mt-[50px]">
        <p className="text-black text-[40px] font-bold font-inter">
          Lupa Kata Sandi
        </p>
        <p className="text-center text-black/opacity-50 text-base font-bold font-inter">
          Masukkan e-mail yang terdaftar. Kami akan mengirimkan <br />
          pesan untuk atur ulang kata sandi Anda.
        </p>
        <div className="px-[20px] mt-[30px]">
          <input
            type="email"
            placeholder="Email"
            className="w-[511px] h-[53px] outline-none pl-[60px]  top-[143px]  bg-white rounded-[5px] border border-black font-inter"
          />
          <div className="absolute  mt-[-40px] ml-[420px]">{IconMessage()}</div>
        </div>
        <div
          onClick={handleOpenSucces}
          className="w-[511px] mx-[20px] mt-[30px] h-[51px] pl-[207px] pr-[225px] py-[11px] bg-red-600 rounded-[5px] justify-start items-center inline-flex"
        >
          <div className="text-white text-2xl font-bold font-['Inter']">
            Kirim
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
