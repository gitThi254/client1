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
  product_name: Yup.string().required("product name is required"),
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

export const reviewsSchema = Yup.object({
  comment: Yup.string().required("You don't enter comment"),
  rating_value: Yup.number()
    .min(0.5, "you don't enter rating")
    .required("You don't enter rating")
    .typeError("You don't enter rating"),
});

export const OrderSchema = Yup.object({
  payment_method_id: Yup.string().required(
    "Bạn chưa chọn phương thức thanh toán"
  ),
  shipping_address: Yup.string().required("Bạn chưa có địa chỉ giao hàng;"),
  shipping_method: Yup.string().required("Bạn chưa có phương thức vận chuyển"),
  order_status: Yup.string().required("Bạn chưa có trạng thái thanh toán"),
  order_total: Yup.number().required("Bạn chưa có số tiền thanh toán"),
});

export const ResetPasswordSchema = Yup.object({
  old_password: Yup.string().required("Bạn chưa nhập mật khẩu cũ"),
  new_password: Yup.string().required("Bạn chưa nhập mật khẩu mới"),
  confirm_password: Yup.string()
    .required("Bạn chưa xác nhận mật khẩu")
    .oneOf([Yup.ref("new_password")], "Mật khẩu không khớp vui lòng nhập lại!"),
});
