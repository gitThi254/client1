import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import {
  addReviews,
  getProductDetailsReq,
  getProductsReq,
  getReviews,
  topFiveSalesReq,
} from "../api/product.api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useProducts = (query?: any) => {
  return useQuery({
    queryKey: ["products", query?.toString()],
    queryFn: () => getProductsReq(query),
    placeholderData: keepPreviousData,
  });
};

export const useProductDetails = (id?: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductDetailsReq(id),
  });
};

export const useTopFiveSales = () => {
  return useQuery({
    queryKey: ["top-five-best-sell-product"],
    queryFn: topFiveSalesReq,
  });
};

export const useReviews = (id?: string) => {
  return useQuery({
    queryKey: ["products", id, "reviews"],
    queryFn: () => getReviews(id),
  });
};

export const useAddReviews = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: addReviews,
    onSuccess: () => {
      toast.success("Bạn đã tạo comment thành công!");
    },
    onError: (error: any) => {
      toast.error("Bạn đã review sản phẩm này rồi!");
      error.message = error?.response?.data;
    },
    onSettled: () => {
      navigate(-1);
    },
  });
};
