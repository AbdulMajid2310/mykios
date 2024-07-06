import React, { useEffect, useState } from "react";
import { IconChervon } from "../../Asets/icons";
import { ImageDana } from "../../Asets/images";

const DetailPaymen = () => {
  const [ewalletVisible, setEwalletVisible] = useState(false);
  const [virtualAccountVisible, setVirtualAccountVisible] = useState(false);
  const [convenienceStoreVisible, setConvenienceStoreVisible] = useState(false);

  const toggleEwallet = () => {
    setEwalletVisible(!ewalletVisible);
  };

  const toggleVirtualAccount = () => {
    setVirtualAccountVisible(!virtualAccountVisible);
  };

  const toggleConvenienceStore = () => {
    setConvenienceStoreVisible(!convenienceStoreVisible);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="m-[60px] border rounded-2xl max-w-[1440px] p-[60px]">
      <section className=" ">
        <div>
          <p className="text-black text-2xl font-bold mb-[20px] font-['Inter']">
            BURHAN NUDIN
          </p>{" "}
          <p className="text-black text-2xl font-bold mb-[20px] font-['Inter']">
            123456789101112
          </p>{" "}
          <p className="text-black text-2xl font-bold mb-[20px] font-['Inter']">
            DUSUN KARAJAN TIMUR
          </p>{" "}
          <p className="text-black text-2xl font-bold mb-[20px] font-['Inter']">
            0895-1111-2222
          </p>{" "}
          <p className="text-black text-2xl font-bold mb-[20px] font-['Inter']">
            burhanudin111@gmail.com
          </p>
          <p className="border rounded-lg bordr-[3px] border-red-600 h-[50px] text-red-600 text-2xl font-bold font-['Inter'] py-[10px] px-[20px]">
            Membeli kios dengan ukuran 3 x 3 dan luas 9 Tarif cicilan / hari Rp.
            115,0000
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
          <div className=" flex justify-between border-[2px] border-black rounded-lg">
            <p className="text-black text-2xl px-[30px] py-[20px] h-[50px] font-bold font-['Inter']">
              Pakai uang muka Rp. 10,000,000
            </p>
            <input
              type="checkbox"
              className="h-[30px] w-[30px] rounded-full  m-[20px]"
            />
          </div>
          <div className=" flex justify-between border-[2px] border-black rounded-lg">
            <p className="text-black text-2xl px-[30px] py-[20px] h-[50px] font-bold font-['Inter']">
              Pakai uang muka Rp. 10,000,000
            </p>
            <input
              type="checkbox"
              className="h-[30px] w-[30px] rounded-full  m-[20px]"
            />
          </div>
          <div className=" flex justify-between border-[2px] border-black rounded-lg">
            <p className="text-black text-2xl px-[30px] py-[20px] h-[50px] font-bold font-['Inter']">
              Pakai uang muka Rp. 10,000,000
            </p>
            <input
              type="checkbox"
              className="h-[30px] w-[30px] rounded-full  m-[20px]"
            />
          </div>
          <div className=" flex justify-between border-[2px] border-black rounded-lg">
            <p className="text-black text-2xl px-[30px] py-[20px] h-[50px] font-bold font-['Inter']">
              Pakai uang muka Rp. 10,000,000
            </p>
            <input
              type="checkbox"
              className="h-[30px] w-[30px] rounded-full m-[20px]"
            />
          </div>
        </div>
      </section>
      <section className="mt-[30px] border rounded-lg shadow-md">
        <div
          className="bg-red-600 rounded-lg flex justify-between px-[60px] py-[20px] cursor-pointer"
          onClick={toggleEwallet}
        >
          <p className="text-white text-2xl font-bold font-['Inter']">
            E-Wallet
          </p>
          <div className="rotate-90">{IconChervon("24", "24", "white")}</div>
        </div>
        {ewalletVisible && (
          <div className="grid grid-cols-4 item-right px-[60px] my-[20px]">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <img src={ImageDana} alt="" />
              </div>
            ))}
          </div>
        )}
      </section>
      {/* Repeat similar sections for Virtual Account and Convenience Store */}
      <section className="mt-[30px] border rounded-lg shadow-md">
        <div
          className="bg-red-600 rounded-lg flex justify-between px-[60px] py-[20px] cursor-pointer"
          onClick={toggleVirtualAccount}
        >
          <p className="text-white text-2xl font-bold font-['Inter']">
            Virtual Account
          </p>
          <div className="rotate-90">{IconChervon("24", "24", "white")}</div>
        </div>
        {virtualAccountVisible && (
          <div className="grid grid-cols-4 item-right px-[60px] my-[20px]">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <img src={ImageDana} alt="" />
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="mt-[30px] border rounded-lg shadow-md">
        <div
          className="bg-red-600 rounded-lg flex justify-between px-[60px] py-[20px] cursor-pointer"
          onClick={toggleConvenienceStore}
        >
          <p className="text-white text-2xl font-bold font-['Inter']">
            Convenience Store
          </p>
          <div className="rotate-90">{IconChervon("24", "24", "white")}</div>
        </div>
        {convenienceStoreVisible && (
          <div className="grid grid-cols-4 item-right px-[60px] my-[20px]">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <img src={ImageDana} alt="" />
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="flex justify-center mx-auto text-center mt-[40px]">
        <p className="text-white w-[600px] rounded-full bg-red-600 hover:bg-red-900 text-[40px] font-bold font-['Inter']">
          BAYAR SEKARANG
        </p>
      </section>
    </main>
  );
};

export default DetailPaymen;
