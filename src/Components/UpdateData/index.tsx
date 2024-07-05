import React from "react";
import { ImageData } from "../../Asets/images";

// Data dinamis
const dataItems = [
  {
    name: "Beras",
    image: ImageData,
    hargaAwal: 10000,
    persentase: "10%",
    perubahanHarga: 100000,
    status: "Naik",
  },
  {
    name: "Gula",
    image: ImageData,
    hargaAwal: 8000,
    persentase: "5%",
    perubahanHarga: 8400,
    status: "Naik",
  },
  {
    name: "Minyak",
    image: ImageData,
    hargaAwal: 15000,
    persentase: "-2%",
    perubahanHarga: 14700,
    status: "Turun",
  },
];

const UpdateData: React.FC = () => {
  return (
    <section className="mt-10 rounded-2xl p-[20px] border shadow-md bg-slate-200">
      <div className="flex justify-between text-lg font-semibold">
        <p className="w-1/6">Gambaran</p>
        <p className="w-1/6">Harga Awal</p>
        <p className="w-1/6">Persentase</p>
        <p className="w-1/6 text-center">Perubahan Harga</p>
        <p className="w-1/6 text-center">Status</p>
      </div>
      <div>
        {dataItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border text-center mt-2 bg-white rounded-lg"
          >
            <div className="flex gap-10px]">
              <div className="w-[100px] h-[100px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-lg font-black flex items-center">
                {item.name}
              </p>
            </div>
            <p className="w-1/6 text-base font-medium justify-center flex items-center">
              {item.hargaAwal}
            </p>
            <p className="w-1/6 text-base font-medium justify-center flex items-center">
              {item.persentase}
            </p>
            <p className="w-1/6 text-base font-medium justify-center flex items-center">
              {item.perubahanHarga}
            </p>
            <p
              className={`w-1/6 text-base font-medium flex justify-center items-center ${
                item.status === "Naik" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpdateData;
