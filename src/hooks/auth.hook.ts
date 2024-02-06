import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  addressReq,
  createAddressReq,
  deleteAddressReq,
  getAddressReq,
  loginReq,
  logoutReq,
  nofiticationReq,
  registerReq,
  resetPasswordReq,
  updateAddressReq,
  verifyReq,
} from "../api/auth.api";
import toast from "react-hot-toast";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginReq,
    onSuccess: (data) => {
      if (data) {
        localStorage.setItem("auth", JSON.stringify(data));
      }
      queryClient.setQueryData(["auth"], data);
      navigate("/");
    },
    onError(error: any) {
      error.message = error?.response?.data;
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerReq,
    onSuccess: () => {
      navigate("/signin");
    },
    onError(error: any) {
      error.message = error?.response?.data;
    },
  });
};
export const useResetPassword = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resetPasswordReq,
    onSuccess: () => {
      logoutReq();
      localStorage.removeItem("auth");
      queryClient.removeQueries({ queryKey: ["auth"], exact: true });
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      navigate("/signin");
      toast.success("Bạn đã thay đổi mật khẩu thành công");
    },
    onError(error: any) {
      error.message = error?.response?.data;
      toast.error("Bạn đã thay đổi mật khẩu không thành công");
    },
  });
};
export const useVerify = () => {
  const queryClient = useQueryClient();
  const authDefault = JSON.parse(localStorage.getItem("auth") ?? "{}") ?? null;
  const user =
    Object.keys(authDefault).length !== 0
      ? useQuery({
          queryKey: ["auth"],
          queryFn: verifyReq,
          initialData: authDefault,
          refetchIntervalInBackground: false,
          refetchOnMount: false,
          refetchOnWindowFocus: false,
        })
      : null;
  if (user?.error && !user?.isLoading) {
    queryClient.setQueryData(["auth"], null);
    localStorage.removeItem("auth");
  }
  if (user?.data) {
    localStorage.setItem("auth", JSON.stringify(user.data));
  }

  return user;
};

export const useNotification = () => {
  return useQuery({
    queryKey: ["users", "notification"],
    queryFn: nofiticationReq,
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: logoutReq,
    onSuccess: () => {
      localStorage.removeItem("auth");
      queryclient.removeQueries({ queryKey: ["auth"], exact: true });
      queryclient.invalidateQueries({ queryKey: ["auth"] });
      navigate("/signin");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useAddress = () => {
  return useQuery({
    queryKey: ["users", "address"],
    queryFn: addressReq,
  });
};

export const useCreateAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createAddressReq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users", "address"] });
      queryClient.invalidateQueries({ queryKey: ["auth"] });

      toast.success("Tạo địa chỉ thành công");
    },
  });
};

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateAddressReq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users", "address"] });
      toast.success("Cập nhật địa chỉ thành công");
    },
  });
};

export const useDeleteAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAddressReq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users", "address"] });
      toast.success("Xóa địa chỉ thành công");
    },
  });
};
export const useAddressReq = (id?: string) => {
  return useQuery({
    queryKey: ["users", "address", id],
    queryFn: () => getAddressReq(id),
  });
};
