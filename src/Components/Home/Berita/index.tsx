import React from "react";
import { ImagePrice } from "../../../Asets/images";

const Berita = () => {
  return (
    <section className="grid grid-cols-4 gap-[20px] mt-[40px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <div className="mb-[20px]  border shadow-sm rounded-lg p-[20px]">
          <div className="w-full h-[200px] ">
            <img
              src={ImagePrice}
              alt=""
              className="w-fukk h-full object-cover  rounded-2xl"
            />
          </div>
          <p className="text-[20px] font-semibold font-inter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum in
            molestiae laboriosam iusto eaque asperiores temporibus
          </p>
        </div>
      ))}
    </section>
  );
};

export default Berita;
