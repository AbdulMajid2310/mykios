import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DataValue = [
  {
    id: 1,
    title: "Gula",
    value: 12000.0,
    percentage: 10.0,
    data: {
      day: [10000, 11000, 12000, 13000, 14000, 15000, 16000],
      month: [
        300000, 310000, 320000, 330000, 340000, 350000, 360000, 370000, 380000,
        390000, 400000, 410000,
      ],
      year: [
        3600000, 3700000, 3800000, 3900000, 4000000, 4100000, 4200000, 4300000,
        4400000, 4500000, 4600000, 4700000,
      ],
    },
  },
  {
    id: 2,
    title: "Beras",
    value: 15000.0,
    percentage: 8.0,
    data: {
      day: [12000, 13000, 14000, 15000, 16000, 17000, 18000],
      month: [
        350000, 360000, 370000, 380000, 390000, 400000, 410000, 420000, 430000,
        440000, 450000, 460000,
      ],
      year: [
        4200000, 4300000, 4400000, 4500000, 4600000, 4700000, 4800000, 4900000,
        5000000, 5100000, 5200000, 5300000,
      ],
    },
  },
  {
    id: 3,
    title: "Minyak Goreng",
    value: 20000.0,
    percentage: 15.0,
    data: {
      day: [15000, 16000, 17000, 18000, 19000, 20000, 21000],
      month: [
        400000, 410000, 420000, 430000, 440000, 450000, 460000, 470000, 480000,
        490000, 500000, 510000,
      ],
      year: [
        4800000, 4900000, 5000000, 5100000, 5200000, 5300000, 5400000, 5500000,
        5600000, 5700000, 5800000, 5900000,
      ],
    },
  },
  {
    id: 4,
    title: "Telur",
    value: 6000.0,
    percentage: 5.0,
    data: {
      day: [5000, 5500, 6000, 6500, 7000, 7500, 8000],
      month: [
        150000, 160000, 170000, 180000, 190000, 200000, 210000, 220000, 230000,
        240000, 250000, 260000,
      ],
      year: [
        1800000, 1900000, 2000000, 2100000, 2200000, 2300000, 2400000, 2500000,
        2600000, 2700000, 2800000, 2900000,
      ],
    },
  },
  {
    id: 5,
    title: "Daging",
    value: 25000.0,
    percentage: 12.0,
    data: {
      day: [20000, 22000, 24000, 26000, 28000, 30000, 32000],
      month: [
        600000, 620000, 640000, 660000, 680000, 700000, 720000, 740000, 760000,
        780000, 800000, 820000,
      ],
      year: [
        7200000, 7400000, 7600000, 7800000, 8000000, 8200000, 8400000, 8600000,
        8800000, 9000000, 9200000, 9400000,
      ],
    },
  },
  {
    id: 6,
    title: "Susu",
    value: 13000.0,
    percentage: 7.0,
    data: {
      day: [11000, 12000, 13000, 14000, 15000, 16000, 17000],
      month: [
        330000, 340000, 350000, 360000, 370000, 380000, 390000, 400000, 410000,
        420000, 430000, 440000,
      ],
      year: [
        3960000, 4070000, 4180000, 4290000, 4400000, 4510000, 4620000, 4730000,
        4840000, 4950000, 5060000, 5170000,
      ],
    },
  },
  {
    id: 7,
    title: "Daging",
    value: 32000.0,
    percentage: 14.0,
    data: {
      day: [26000, 28000, 30000, 32000, 34000, 36000, 38000],
      month: [
        780000, 800000, 820000, 840000, 860000, 880000, 900000, 920000, 940000,
        960000, 980000, 1000000,
      ],
      year: [
        9360000, 9580000, 9800000, 10000000, 10200000, 10400000, 10600000,
        10800000, 11000000, 11200000, 11400000, 11600000,
      ],
    },
  },
  {
    id: 8,
    title: "Susu",
    value: 15000.0,
    percentage: 9.0,
    data: {
      day: [12000, 14000, 16000, 18000, 20000, 22000, 24000],
      month: [
        360000, 380000, 400000, 420000, 440000, 460000, 480000, 500000, 520000,
        540000, 560000, 580000,
      ],
      year: [
        4320000, 4540000, 4760000, 4980000, 5200000, 5420000, 5640000, 5860000,
        6080000, 6300000, 6520000, 6740000,
      ],
    },
  },
];

type PeriodType = "day" | "month" | "year";

const BahanPokok: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [period, setPeriod] = useState<PeriodType>("day");

  const handleProductClick = (id: number) => {
    setActiveProduct(id);
  };

  const handlePeriodClick = (period: PeriodType) => {
    setPeriod(period);
  };

  const activeData = DataValue.find((product) => product.id === activeProduct);

  const chartData = {
    labels:
      period === "day"
        ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        : period === "month"
        ? [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]
        : [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025",
            "2026",
            "2027",
            "2028",
            "2029",
            "2030",
            "2031",
          ],
    datasets: [
      {
        label: activeData?.title || "Pilih Produk",
        data: activeData?.data[period] || [],
        fill: false,
        backgroundColor: "red",
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <main className="w-full mt-[40px] ">
      <section>
        <h1 className="text-black mb-[30px] text-2xl font-bold font-['Inter']">
          Harga Barang Kebutuhan Pokok
        </h1>
        <div>
          <div className="flex gap-[50px] w-full">
            <div className="w-auto h-[450px] overflow-auto relative rounded-[10px] shadow">
              {DataValue.map((data) => (
                <div
                  key={data.id}
                  className={`w-[350px] h-auto border my-2 cursor-pointer ${
                    activeProduct === data.id ? "bg-red-500 text-white" : ""
                  }`}
                  onClick={() => handleProductClick(data.id)}
                >
                  <p className="px-[30px] text-2xl font-bold font-['Inter']">
                    {data.title}
                  </p>
                  <div className="flex justify-between px-[30px]">
                    <p
                      className={`text-[13px] font-medium font-['Inter'] ${
                        activeProduct === data.id ? "text-white" : "text-black"
                      }`}
                    >
                      {data.value}
                    </p>
                    <p
                      className={`text-[13px] font-medium font-['Inter'] ${
                        activeProduct === data.id
                          ? "text-white"
                          : "text-green-500"
                      }`}
                    >
                      {data.percentage}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Chart Section */}
            <div className=" w-[800px]">
              <div className="flex mb-4">
                <button
                  onClick={() => handlePeriodClick("day")}
                  className={`px-4 py-2 mr-2 ${
                    period === "day" ? "bg-red-500 text-white" : "bg-gray-200"
                  }`}
                >
                  Per Hari
                </button>
                <button
                  onClick={() => handlePeriodClick("month")}
                  className={`px-4 py-2 mr-2 ${
                    period === "month" ? "bg-red-500 text-white" : "bg-gray-200"
                  }`}
                >
                  Per Bulan
                </button>
                <button
                  onClick={() => handlePeriodClick("year")}
                  className={`px-4 py-2 ${
                    period === "year" ? "bg-red-500 text-white" : "bg-gray-200"
                  }`}
                >
                  Per Tahun
                </button>
              </div>
              <Line data={chartData} options={options} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BahanPokok;
