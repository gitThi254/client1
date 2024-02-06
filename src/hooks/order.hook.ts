import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  createOrdersReq,
  getAllOrderReq,
  getMethodReq,
} from "../api/order.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createOrdersReq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users", "notification"] });

      navigate("/order/history");
      toast.success("create order successfully");
    },
  });
};

export const useOrders = (query?: any) => {
  return useQuery({
    queryKey: ["orders", query?.toString()],
    queryFn: () => getAllOrderReq(query),
    placeholderData: keepPreviousData,
  });
};

export const useMethod = () => {
  return useQuery({
    queryKey: ["method"],
    queryFn: getMethodReq,
  });
};
