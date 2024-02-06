import { useProductDetails, useReviews } from "../../hooks/product.hook";
import Loader from "../../common/Loader";
import { useParams } from "react-router-dom";
import ProductInfo from "../../components/productInfo";
import { useCarts } from "../../hooks/cart.hook";
import Meta from "../../components/Meta/Meta";
import Reviews from "../../components/Reviews";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isPending } = useProductDetails(id);
  const { data: cart, isPending: pending } = useCarts();
  const { data: reviews, isPending: pendingReviews } = useReviews(id);

  if (isPending || pending || pendingReviews) return <Loader />;

  return (
    <>
      <Meta title={`Sản phẩm - ${id}`} />
      <section className="w-full p-10">
        {product && <ProductInfo data={product[0]} cart={cart[0]} />}
      </section>
      <Reviews data={reviews[0]} />
    </>
  );
};

export default ProductDetail;
