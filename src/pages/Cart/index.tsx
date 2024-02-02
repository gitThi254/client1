import { useCartItems, useShippingMethod } from "../../hooks/cart.hook";
import Loader from "../../common/Loader";
import CartReq from "./req";
import Meta from "../../components/Meta/Meta";

const Cart = () => {
  const { data: carts, isPending } = useCartItems();
  const { data: shippingMethod, isPending: pending } = useShippingMethod();
  if (isPending || pending) return <Loader />;

  return (
    <>
      <Meta title="Giỏ hàng" />
      {carts && shippingMethod && (
        <CartReq carts={carts} shipping={shippingMethod} />
      )}
    </>
  );
};

export default Cart;
