import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import homeStyles from "../styles/home.module.css";

export default function Home(props) {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="../src/style/globals.css" />
      </Head>

      <Link href="/companies">
        <a>Companies</a>
      </Link>
    </div>
  );
}
