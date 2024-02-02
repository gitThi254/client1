import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getProductDetailsReq,
  getProductsReq,
  topFiveSalesReq,
} from "../api/product.api";

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
