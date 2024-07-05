import React from "react";
import Slide from "../../Components/Slide";
import BahanPokok from "../../Components/Home/BahanPokok";
import DetailPrice from "../../Components/Home/DetailPrice";
import Berita from "../../Components/Home/Berita";

const BerandaPage = () => {
  return (
    <section className="mx-[60px] pb-[40px]">
      <div>
        <Slide />
      </div>
      <div>
        <BahanPokok />
      </div>
      <div>
        <DetailPrice />
        <Berita />
      </div>
    </section>
  );
};

export default BerandaPage;
