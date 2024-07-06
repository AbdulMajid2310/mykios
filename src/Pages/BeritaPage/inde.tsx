import React, { useEffect } from "react";
import { ImagePrice } from "../../Asets/images";
import { Link } from "react-router-dom";

const BeritaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="m-[60px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <Link to="/detail-berita" className="flex gap-[40px] mb-[20px]">
          <div className="w-[600px] h-[300px]">
            <img
              src={ImagePrice}
              alt=""
              className="w-full h-full object-fill rounded-lg"
            />
          </div>
          <div className="w-[700px] mt-[30px]">
            <p className="text-[25px] font-bold font-serif">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, eos!
            </p>
            <p className="text-[18px] ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              saepe quo similique quidem illum quas, fugit necessitatibus! Quam
              nesciunt exercitationem iste, sint nemo autem, minus vero saepe
              laudantium sit doloremque aliquid placeat ducimus, sequi atque non
              ipsam? Obcaecati, ab a molestias, cupiditate accusantium
              consectetur ullam commodi nesciunt illum necessitatibus maiores.
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default BeritaPage;
