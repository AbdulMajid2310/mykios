import React, { useEffect } from "react";
import { ImagePrice } from "../../Asets/images";

const DetailBerita = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100">
      <div className=" bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 w-full">
          <img
            src={ImagePrice}
            alt="Detail Image"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Judul Berita</h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            illo nihil ipsam vitae, perspiciatis ipsum ipsa asperiores commodi
            laudantium eius vero impedit at dicta quo nisi culpa reprehenderit
            eum sunt quam, harum aperiam ad numquam. Repudiandae laudantium quod
            vel, id nihil recusandae doloremque doloribus neque architecto
            mollitia temporibus rem unde deleniti minima, beatae quas ipsum
            molestiae itaque voluptatibus ratione voluptatum. Aliquam dolorem
            quod perferendis obcaecati dolor quisquam dolore, tenetur nesciunt
            voluptas nostrum, deleniti nisi ipsum officiis, esse corrupti cumque
            neque laborum. Voluptate hic quae minus eum placeat quasi
            accusantium! Labore impedit explicabo perferendis quia corrupti
            dignissimos a illum doloremque consequatur.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            magnam voluptate error veritatis perspiciatis ratione ut fugiat
            accusantium quaerat facere! Dolores cum voluptates ipsam adipisci
            magni quasi nisi quidem deleniti nemo culpa assumenda incidunt minus
            voluptatibus, reiciendis molestias voluptatem ipsa. Culpa labore
            vitae fuga dolorum voluptatibus sed iure alias quidem distinctio.
            Velit exercitationem consequuntur doloribus ut perferendis! Sit
            aliquid vel similique animi! Placeat quo odio aperiam exercitationem
            beatae, laboriosam earum quidem repellendus consectetur totam veniam
            aliquam rem minus quibusdam voluptatem voluptatibus qui ratione
            iusto laborum deserunt. Optio illo minus fuga quas ipsam facere quos
            quidem rerum quia officia ex architecto dicta laboriosam, veritatis,
            voluptate sed nisi vel voluptates. A, accusantium ex aliquam
            pariatur exercitationem repellat quos deleniti odio vel in vitae
            animi error dolorum iste corporis minus consequuntur quasi dolores
            hic recusandae veniam neque aspernatur eius! Atque voluptate
            obcaecati omnis ratione id accusamus assumenda consequuntur, sequi
            labore voluptatem amet, aperiam sit esse cum excepturi consequatur
            cupiditate repellendus porro officiis molestiae quam. Dolore cum sit
            aliquid quo perspiciatis sint rerum, amet, commodi deleniti
            consequatur rem porro praesentium veniam nihil vel impedit sequi.
            Eveniet distinctio veniam reiciendis odio iure ad reprehenderit
            debitis aliquam? Saepe laboriosam sit voluptatibus deleniti quae
            nihil aliquid rerum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailBerita;
