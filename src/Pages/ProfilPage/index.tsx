import React, { useEffect } from "react";
import { ImagePrice } from "../../Asets/images";
import { IconCam, IconChervon } from "../../Asets/icons";
import { Link } from "react-router-dom";

const ProfilPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="m-[60px]">
      <section className="flex gap-[50px]">
        <div>
          <div className="w-[350px] h-[300px] ">
            <img
              src={ImagePrice}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute ml-[305px] mt-[-60px] bg-slate-400 hover:bg-slate-100 border h-[60px] w-[60px] p-[11px] rounded-full">
            {IconCam()}
          </div>
        </div>
        <div>
          <p className=" text-2xl font-bold w-[600px] mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
            BURHAN NUDIN
          </p>
          <p className=" text-2xl font-bold w-[600px] mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
            123456789101112
          </p>
          <p className=" text-2xl font-bold w-[600px] mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
            DUSUN KARAJAN TIMUR
          </p>
          <p className=" text-2xl font-bold w-[600px] mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
            0895-1111-2222
          </p>
          <p className=" text-2xl font-bold w-[600px] mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
            burhanudin111@gmail.com
          </p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-3 gap-[30px] mt-[30px] cursor-pointer">
          <Link to="/my-kios">
            <div className="text-white flex justify-between bg-red-600 hover:bg-red-900 py-[10px] px-[25px] rounded-xl text-[25px] font-bold font-['Inter']">
              <p>Pemilik kios</p>
              <div className="pt-[5px]">{IconChervon("30", "30", "white")}</div>
            </div>
          </Link>
          <Link to="/detail-kios">
            <div className="text-white flex justify-between bg-red-600 hover:bg-red-900 py-[10px] px-[25px] rounded-xl text-[25px] font-bold font-['Inter']">
              <p>Bayar cicilan Hari ini</p>
              <div className="pt-[5px]">{IconChervon("30", "30", "white")}</div>
            </div>
          </Link>
          <Link to="/login">
            <div className="text-white flex justify-between bg-red-600 hover:bg-red-900 py-[10px] px-[25px] rounded-xl text-[25px] font-bold font-['Inter']">
              <p>Logout</p>
              <div className="pt-[5px]">{IconChervon("30", "30", "white")}</div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProfilPage;
