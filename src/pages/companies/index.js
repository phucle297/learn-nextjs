import { useRouter } from "next/router";
import axios from "axios";

export default function Companies(props) {
  const router = useRouter();
  return (
    <div>
      <h1>Companies</h1>
      {props.data?.map((item, index) => (
        <div key={index}>
          {/* <Link href={`/companies?id=${item.companyId}`}>
        <a>{item.companyName}</a>
      </Link> */}
          <button
            type="button"
            onClick={() => {
              router.push({
                pathname: "/companies/[cid]",
                query: { cid: item.companyId },
              });
            }}
          >
            {item.companyName}
          </button>
        </div>
      ))}
    </div>
  );
}

Companies.getInitialProps = async () => {
  try {
    let companies = {};
    await axios
      .get("https://phone-book-api.online/api/companies/get-all")
      .then((res) => {
        companies = res.data;
      });
    return companies;
  } catch (error) {
    throw error;
  }
};
