import React, { useEffect } from "react";
import { ImageStory } from "../../Asets/images";

const Tentang = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mx-[60px]">
      <div>
        <img src={ImageStory} alt="" />
      </div>
    </section>
  );
};

export default Tentang;
