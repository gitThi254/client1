import * as Yup from "yup";
export const loginSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid Email ?"),
  password: Yup.string().required("Password is required"),
});

export const addToCartSchema = Yup.object({
  cart_id: Yup.string().required("not"),
  product_item_id: Yup.string().required("You haven't selected a product"),
  qty: Yup.number()
    .min(1, "select product > 1")
    .required("You have not entered the product quantity")
    .typeError("You have not entered the product quantity"),
});

export const AddressShema = Yup.object({
  hoTen: Yup.string().required("Vui lòng nhập Họ và tên"),
  phone: Yup.string().required("Vui lòng nhập Số điện thoại"),
  thanhPho: Yup.string().required("Vui lòng nhập Thành phố"),
  huyen: Yup.string().required("Vui lòng nhập Huyện"),
  xa: Yup.string().required("Vui lòng nhập Xã"),
  diaChiCuThe: Yup.string().required("Vui lòng nhập Họ và tên"),
});

export const registerSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().required("Email is required").email("Invalid Email ?"),
  password: Yup.string().required("Password is required"),
});
