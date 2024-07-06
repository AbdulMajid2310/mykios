import React, { useEffect } from "react";
import { ImagePrice } from "../../Asets/images";
import { Link } from "react-router-dom";

const Denah = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="m-[60px] ">
      <div className="w-full h-[800px]">
        <img src={ImagePrice} alt="" className="h-full w-full object-fill" />
      </div>
      <Link to="/detail-payment">
        {" "}
        <div className="w-full text-center ">
          <button className="text-white bg-red-600 px-[100px] h-[50px] hover:bg-red-900 rounded-full  text-[25px] font-black font-['Inter']">
            LANJUTKAN
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Denah;
