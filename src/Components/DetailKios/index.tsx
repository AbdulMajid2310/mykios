import React, { useEffect } from "react";
import { ImagePrice } from "../../Asets/images";

const DetailKios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const kiosData = [
    {
      ukuran: "3 x 3",
      luas: 9,
      tarifSebelum: "Rp 80,000",
      tarifTerbaru: "Rp 60,000",
    },
    {
      ukuran: "4 x 4",
      luas: 16,
      tarifSebelum: "Rp 100,000",
      tarifTerbaru: "Rp 80,000",
    },
  ];

  return (
    <main className="flex justify-center gap-[20px] m-[60px]">
      <section className="w-[500px] h-[400px]">
        <img src={ImagePrice} alt="" className="w-full h-full" />
      </section>
      <section>
        <section className="border shadow-lg rounded-lg py-[24px] px-[32px] ]">
          <div>
            <h1 className="text-black italic text-[40px] font-bold font-['Inter']">
              Sewa Kios
            </h1>
            <table className="table-auto ">
              <thead>
                <tr>
                  <th className=" w-[150px] px-4 py-2">Ukuran</th>
                  <th className=" w-[80px] px-4 py-2">Luas</th>
                  <th className="w-[150px] px-4 py-2">
                    Tarif Sewa / Hari (Sebelum)
                  </th>
                  <th className=" w-[150px] px-4 py-2">
                    Tarif Sewa / Hari (Terbaru)
                  </th>
                </tr>
              </thead>
              <tbody>
                {kiosData.map((kios, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {kios.ukuran}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {kios.luas}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 ">
                      {kios.tarifSebelum}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {kios.tarifTerbaru}
                    </td>
                    <button className="border text-red-600 font-semibold hover:text-red-900 border-gray-300 px-4 py-2 ml-[10px]">
                      {" "}
                      Sewa Sekarang
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-[30px]">
            <h1 className="text-black italic text-[40px] font-bold font-['Inter']">
              Sewa Los
            </h1>
            <table className="table-auto ">
              <thead>
                <tr>
                  <th className=" w-[150px] px-4 py-2">Ukuran</th>
                  <th className=" w-[80px] px-4 py-2">Luas</th>
                  <th className="w-[150px] px-4 py-2">
                    Tarif Sewa / Hari (Sebelum)
                  </th>
                  <th className=" w-[150px] px-4 py-2">
                    Tarif Sewa / Hari (Terbaru)
                  </th>
                </tr>
              </thead>
              <tbody>
                {kiosData.map((kios, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {kios.ukuran}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {kios.luas}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 ">
                      {kios.tarifSebelum}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {kios.tarifTerbaru}
                    </td>
                    <button className="border text-red-600 font-semibold hover:text-red-900 border-gray-300 px-4 py-2 ml-[10px]">
                      {" "}
                      Sewa Sekarang
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="border shadow-lg rounded-lg py-[24px] px-[32px] mt-[60px]">
          <div>
            <h1 className="text-black italic text-[40px] font-bold font-['Inter']">
              Cicilan Kios
            </h1>
            <table className="table-auto ">
              <thead>
                <tr>
                  <th className=" w-[150px] px-4 py-2">Ukuran</th>
                  <th className=" w-[80px] px-4 py-2">Luas</th>
                  <th className="w-[150px] px-4 py-2">
                    Tarif Sewa / Hari (Sebelum)
                  </th>
                  <th className=" w-[150px] px-4 py-2">
                    Tarif Sewa / Hari (Terbaru)
                  </th>
                </tr>
              </thead>
              <tbody>
                {kiosData.map((kios, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {kios.ukuran}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {kios.luas}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 ">
                      {kios.tarifSebelum}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {kios.tarifTerbaru}
                    </td>
                    <button className="border text-red-600 font-semibold hover:text-red-900 border-gray-300 px-4 py-2 ml-[10px]">
                      {" "}
                      Sewa Sekarang
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-[30px]">
            <h1 className="text-black italic text-[40px] font-bold font-['Inter']">
              Cicilan Los
            </h1>
            <table className="table-auto ">
              <thead>
                <tr>
                  <th className=" w-[150px] px-4 py-2">Ukuran</th>
                  <th className=" w-[80px] px-4 py-2">Luas</th>
                  <th className="w-[150px] px-4 py-2">
                    Tarif Sewa / Hari (Sebelum)
                  </th>
                  <th className=" w-[150px] px-4 py-2">
                    Tarif Sewa / Hari (Terbaru)
                  </th>
                </tr>
              </thead>
              <tbody>
                {kiosData.map((kios, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {kios.ukuran}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {kios.luas}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 ">
                      {kios.tarifSebelum}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {kios.tarifTerbaru}
                    </td>
                    <button className="border text-red-600 font-semibold hover:text-red-900 border-gray-300 px-4 py-2 ml-[10px]">
                      {" "}
                      Sewa Sekarang
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
};

export default DetailKios;
