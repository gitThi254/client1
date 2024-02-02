import { useProductDetails } from "../../hooks/product.hook";
import Loader from "../../common/Loader";
import { useParams } from "react-router-dom";
import ProductInfo from "../../components/productInfo";
import { useCarts } from "../../hooks/cart.hook";
import Meta from "../../components/Meta/Meta";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isPending } = useProductDetails(id);
  const { data: cart, isPending: pending } = useCarts();

  if (isPending || pending) return <Loader />;

  return (
    <>
      <Meta title={`Sản phẩm - ${id}`} />
      <section className="w-full p-10">
        {product && <ProductInfo data={product[0]} cart={cart[0]} />}
      </section>
    </>
  );
};

export default ProductDetail;
