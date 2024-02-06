import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addCartReq,
  cartsReq,
  deleteCartReq,
  getCartItemReq,
  getShipingMethodsReq,
  getShippingMethodReq,
  updateCartReq,
} from "../api/cart";
import toast from "react-hot-toast";

export const useCarts = () => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: cartsReq,
  });
};

export const useCartItems = () => {
  return useQuery({
    queryKey: ["carts-items"],
    queryFn: getCartItemReq,
  });
};

export const useShippingMethod = () => {
  return useQuery({
    queryKey: ["shipping-method"],
    queryFn: getShippingMethodReq,
  });
};

export const useShippingsMethod = () => {
  return useQuery({
    queryKey: ["shippings-method"],
    queryFn: getShipingMethodsReq,
  });
};

export const useAddCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCartReq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts-items"] });
      queryClient.invalidateQueries({ queryKey: ["users", "notification"] });

      toast.success("Add to cart successfully");
    },
  });
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCartReq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts-items"] });
    },
  });
};

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCartReq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts-items"] });
    },
  });
};
