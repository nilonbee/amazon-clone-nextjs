import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ForExample from "../components/Example";
import ProductFeed from "../components/ProductFeed";

export default function Home(props) {
  console.log(props.data);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* productlist */}
        <ProductFeed products={props.data} />
      </main>
      
      <div className="footer">Footer</div>
    </div>
  );
}

export async function getServerSideProps () {

    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();

  return {
    props: {
      data
    }
  };
};
