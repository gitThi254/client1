import Order from "./req";
import { useAddress, useVerify } from "../../hooks/auth.hook";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "../../common/Loader";
import { useShippingsMethod } from "../../hooks/cart.hook";

const OrderReq = () => {
  const queryClient = useQueryClient();
  const cart = queryClient.getQueryData(["cart_order"]);
  const { data: address, isPending: pendingAddress } = useAddress();
  const { data: shippingMethod, isPending: pending } = useShippingsMethod();
  const user = useVerify();
  if (user?.isPending || pending || pendingAddress) return <Loader />;

  return (
    <>
      {user && (
        <Order
          cart={cart}
          user={user?.data}
          shipping={shippingMethod}
          address={address}
        />
      )}
    </>
  );
};

export default OrderReq;
