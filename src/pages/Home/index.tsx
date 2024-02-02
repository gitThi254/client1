import Hero from "../../components/Hero";
import Product from "../../components/Product";
import Category from "../../components/Category";
import Gallery from "../../components/Gallery";
import Blog from "../../components/Blog";
import Meta from "../../components/Meta/Meta";

const Home = () => {
  return (
    <>
      <Meta title={"Trang chủ"} />
      <main>
        <Hero />
        <Gallery />
        <Product />
        <Blog />
        <Category />
      </main>
    </>
  );
};

export default Home;
