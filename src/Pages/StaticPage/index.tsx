import React, { useEffect } from "react";
import BahanPokok from "../../Components/Home/BahanPokok";
import UpdateData from "../../Components/UpdateData";

const StatisticPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="m-[60px] ">
      <BahanPokok />
      <UpdateData />
    </div>
  );
};

export default StatisticPage;
