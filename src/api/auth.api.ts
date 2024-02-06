import axios from "./axios";

export const loginReq = (data: SignIn) =>
  axios.post("users/login", data).then((res) => res.data);

export const registerReq = (data: SignIn) =>
  axios.post("users/register", data).then((res) => res.data);
export const resetPasswordReq = (data: ResetPassword) =>
  axios.post("users/reset-password", data).then((res) => res.data);

export const verifyReq = async () =>
  axios.get("/users/verify").then((res) => {
    return res.data;
  });

export const nofiticationReq = async () =>
  axios.get("/users/nofitications").then((res) => {
    return res.data;
  });

export const getUsersReq = async () =>
  axios.get("/users/all-users").then((res) => {
    return res.data;
  });

export const logoutReq = async () => axios.post("/users/logout");

export const addressReq = async () =>
  axios.get("/users/addresses").then((res) => res.data);

export const createAddressReq = async (data: any) =>
  axios.post("/users/address", data).then((res) => res.data);

export const getAddressReq = async (id?: string) =>
  axios.get(`/users/address/${id}`).then((res) => res.data);

export const deleteAddressReq = async (id?: string) =>
  axios.delete(`/users/address/${id}`).then((res) => res.data);

export const updateAddressReq = async ({
  id,
  data,
}: {
  id?: string;
  data?: any;
}) => axios.put(`/users/address/${id}`, data).then((res) => res.data);
