import React, { useEffect, useState } from "react";
import { IconChervon } from "../../Asets/icons";

const KiosPage = () => {
  const [showDetail, setShowDetail] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleOpenDetail = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };
  return (
    <section className="m-[60px]">
      <section className="flex justify-center gap-[20px] ">
        <div className="border p-[30px]  shadow-lg rounded-lg">
          <p className=" text-2xl italic bg-red-600 font-bold  mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
            Pemilik kios
          </p>
          <p className=" text-2xl font-bold  mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
            Ukuran 3 X 3
          </p>
          <p className=" text-2xl font-bold  mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
            Luas 9
          </p>
          <p className=" text-2xl font-bold  mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
            Uang Muka Rp. 80,000,000
          </p>
          <p className=" text-2xl font-bold  mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
            Cicilan 2 Tahun
          </p>
          <div
            onClick={handleOpenDetail}
            className=" flex justify-between text-2xl font-bold w-[600px] hover:bg-slate-300 mb-[20px]  py-[10px] px-[30px] rounded-xl shadow h-[50px] border  font-['Inter']"
          >
            <p>Lihat cicilan anda</p>
            <div className="">{IconChervon("30", "30", "red")}</div>
          </div>
        </div>
        {showDetail && (
          <div className="border p-[30px] shadow-lg rounded-lg w-[500px]">
            <button
              onClick={handleCloseDetail}
              className="text-[20px] font-serif font-bold text-white bg-red-600 hover:bg-red-900 px-[30px] h-[50px] rounded-full mb-[20px]"
            >
              Tutup
            </button>
            <div className=" text-2xl flex justify-between font-bold  mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
              <p>04/07/2024</p>
              <p>Rp. 115,000</p>
            </div>
            <div className=" text-2xl flex justify-between font-bold  mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
              <p>04/07/2024</p>
              <p>Rp. 115,000</p>
            </div>
            <div className=" text-2xl flex justify-between font-bold  mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
              <p>04/07/2024</p>
              <p>Rp. 115,000</p>
            </div>
            <div className=" text-2xl flex justify-between font-bold mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
              <p>04/07/2024</p>
              <p>Rp. 115,000</p>
            </div>
            <div className=" text-2xl flex justify-between font-bold  mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
              <p>04/07/2024</p>
              <p>Rp. 115,000</p>
            </div>
            <div className=" text-2xl flex justify-between font-bold  mb-[20px]  py-[10px] pl-[30px] rounded-xl shadow h-[50px] border  font-['Inter']">
              <p>04/07/2024</p>
              <p>Rp. 115,000</p>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default KiosPage;
