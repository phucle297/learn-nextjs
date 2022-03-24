import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Company(props) {
  const router = useRouter();
  const { cid } = router.query;
  const [company, setCompany] = useState({});
  useEffect(() => {
    axios
      .get(`https://phone-book-api.online/api/companies/get-by-id/${cid}`)
      .then((res) => setCompany(res.data.data));
  }, []);
  console.log(company);
  return (
    <>
      <h1 className="text-center font-bold text-2xl">{company.companyName}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat qui
        cum, vitae consectetur numquam voluptate minus ut! Corrupti ut veritatis
        voluptatibus dolore, harum minus deserunt. Neque repellat id impedit
        ipsa ut molestiae sapiente suscipit deleniti fugit ad sunt laudantium
        hic voluptatum nemo, veritatis sed ex ea sint alias sequi eligendi
        assumenda. Quod illum necessitatibus distinctio quis, repellat
        voluptatibus ab omnis, minima, architecto dolores eligendi beatae libero
        sit quidem a adipisci velit vel repellendus voluptatum sed eum. Incidunt
        impedit distinctio facilis rem vel, neque reprehenderit a nesciunt, odit
        magni, illum ipsum. Voluptate tenetur tempore quae ullam assumenda iste
        porro consequuntur impedit ipsam perspiciatis. Soluta consequatur
        aliquam eum, laudantium nisi libero error unde alias. Doloribus,
        deleniti. A ipsam, sunt dicta exercitationem, similique ea, reiciendis
        velit distinctio harum quam eum nesciunt accusantium dolor eius facere
        saepe totam unde necessitatibus culpa et dignissimos ex repellat
        cupiditate. Incidunt id, vero libero consectetur, dignissimos cupiditate
        dolorem optio corrupti labore provident, facilis architecto ipsa
        reprehenderit quaerat deserunt aspernatur quo mollitia eligendi itaque
        enim! Nulla, natus saepe tempora corporis labore consequatur eius
        officiis fugiat amet expedita aut voluptas sint tempore a aspernatur
        quam distinctio necessitatibus molestiae, itaque delectus autem hic
        ratione! Atque quidem nobis omnis saepe exercitationem! Voluptatem,
        possimus iste magni molestias omnis at nisi officiis ea minus quos,
        asperiores maiores autem iure suscipit illo. Beatae nam error natus
        corporis similique est velit delectus ipsam. Assumenda, magnam? Eaque,
        numquam architecto nemo dolore vero dolorem a quae enim perspiciatis,
        velit, unde quo minus atque nisi! Quaerat reiciendis quidem soluta
        recusandae, adipisci eum! Voluptas officia saepe eius, tempore delectus
        dolor, quidem possimus earum omnis animi ex excepturi incidunt pariatur
        dicta vel, alias sint quia facilis molestias vero commodi dolorem
        nostrum ea labore! Aut consequatur architecto vero voluptas placeat
        necessitatibus vitae beatae consectetur, dolorem illo, repudiandae nulla
        odio consequuntur saepe inventore!
      </p>
      <h1 className="">Lorem ipsum dolor sit.</h1>
      <br />
      <p className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta corporis
        rem, impedit quod quo at repellat consectetur voluptate, repellendus
        deserunt magnam neque sapiente fugit porro accusantium? Reiciendis
        impedit temporibus iusto error inventore natus doloremque nulla numquam
        facere veniam excepturi deserunt vitae, quia necessitatibus provident
        nisi ab ut illo voluptatum hic accusamus possimus quis delectus commodi?
        Quam odit explicabo facilis nulla possimus velit incidunt fuga
        voluptates hic earum voluptatum natus expedita voluptas reprehenderit
        nihil, eveniet atque maiores nesciunt. Iusto voluptatibus sequi
        veritatis dolor quas nobis dignissimos rerum sint ipsum, veniam,
        provident sit labore, eligendi expedita minus ex ut inventore? Provident
        vel, non incidunt facilis officiis nostrum debitis accusamus error?
        Voluptatem esse dolorem accusamus, maiores ex laudantium omnis vel
        voluptates facilis odio repellat similique maxime iste officia rerum
        earum veritatis hic cumque, officiis, possimus totam recusandae!
        Deserunt optio dicta eius nam, ipsum voluptate incidunt similique
        eveniet, obcaecati magni vitae quae molestiae dolore cumque commodi
        explicabo excepturi debitis corporis repellendus quaerat! Sit,
        reiciendis tenetur facere maxime repudiandae rerum officiis omnis
        quisquam, eius iure, blanditiis cumque doloribus tempore cum quae vero
        eum dolore explicabo totam necessitatibus in aperiam accusantium
        voluptate. Sapiente, magni ipsam minus possimus ullam incidunt vel
        accusamus sequi non suscipit maxime ut fugiat! Quasi vel quia ducimus
        impedit aliquid eligendi, optio error, porro est eveniet eum quas
        distinctio explicabo delectus enim doloribus consequatur ipsum quod
        quis. Est laboriosam, dolores ratione ad corporis nihil expedita dolore
        sit neque suscipit amet! Magnam fuga, quasi nemo, aperiam blanditiis eum
        doloribus in natus dolor optio est impedit vitae veritatis laboriosam
        cupiditate? Nisi eaque laudantium dolores nostrum eius quia error qui
        nihil facere aut pariatur, fugiat voluptatum iste, saepe deserunt
        voluptates quae asperiores porro adipisci nemo soluta vero. Saepe,
        reiciendis eum! Ipsum aut impedit rem earum assumenda adipisci, commodi
        molestiae, quibusdam, possimus ea incidunt sint libero voluptatum.
      </p>
      <h1 className="text-center font-bold text-4xl">Company {cid}</h1>
      <div className="flex items-center justify-center mt-5">
        <Image
          src={
            company.image
              ? `https://${company.image.replaceAll(" ", "%20")}`
              : "https://picsum.photos/200"
          }
          className="rounded-full "
          alt="Image"
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
    </>
  );
}

// Company.getInitialProps = async (props) => {
//   try {
//     let company = await axios.get(
//       `https://phone-book-api.online/api/companies/get-by-id/${props.query.cid}`
//     );
//     return company;
//   } catch (error) {
//     throw error;
//   }
// };

// export async function getStaticProps({ params }) {
//   console.log(params);
// }

export async function getServerSideProps({ params }) {
  // let company = await axios.get(
  //   `https://phone-book-api.online/api/companies/get-by-id/${params.cid}`
  // );
  return {
    props: {
      cid: params.cid,
      // data: company.data,
    },
  };
}
