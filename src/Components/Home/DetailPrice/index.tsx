import React from "react";
import { ImagePrice, ImageSlide } from "../../../Asets/images";

const dataValue = [
  {
    id: 1,
    title: "Los 2x2 Mulai dari Rp. 64.000.000",
  },
  {
    id: 1,
    title: "Los 3x2 Mulai dari Rp. 94.000.000",
  },
  {
    id: 1,
    title: "Kios 3x3 Mulai dari Rp. 157.500.000",
  },
  {
    id: 1,
    title: "Kios 3x3,25 Mulai dari Rp. 170.625.000",
  },
  {
    id: 1,
    title: "Kios 3x5 Mulai dari Rp. 262.500.000",
  },
];
const DetailPrice = () => {
  return (
    <section className="w-full mt-[50px] bg-[#D9D9D9] p-[30px] rounded-xl">
      <section className="grid grid-cols-2 gap-[30px]  ">
        <div className="w-[604px] h-[402px] ">
          <img src={ImagePrice} alt="" className="w-full h-full rounded-xl" />
        </div>
        <div>
          <h1 className="text-[32px] px-[15px] font-black font-['Inter'] mb-[20px]">
            Harga Pembelian
          </h1>
          <div>
            {dataValue.map((item, index) => (
              <p className="text-black text-xl px-[15px] mb-[20px] font-medium font-['Inter']">
                {item.title}
              </p>
            ))}
          </div>
          <p className=" text-xl font-medium font-['Inter'] px-[15px]">
            Laformasi harga selengkapnya hubungi kantor pemasaran Pasar
            Proklamasi Atau klik Beli Sekarang
          </p>
        </div>
      </section>
      <div className="w-full text-center mt-[30px]">
        <button className="text-white text-center bg-red-700 py-[10px] px-[40px] rounded-xl text-2xl font-bold font-['Inter']">
          BELI SEKARANG
        </button>
      </div>
    </section>
  );
};

export default DetailPrice;
