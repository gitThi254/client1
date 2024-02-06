type SignIn = {
  email: string;
  password: string;
};

type AddtoCart = {
  cart_id: string;
  product_item_id: string;
  qty: number;
  product_name: string;
};

type CartOrder = {
  cart_id: Array;
  method: string;
};

type Order = {
  payment_method_id: string;
  shipping_address: string;
  shipping_method: string;
  order_status: string;
  order_total: number;
};

type Address = {
  hoTen: string;
  phone: string;
  thanhPho: string;
  huyen: string;
  xa: string;
  diaChiCuThe: string;
};

type SignUp = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
};

type Reivews = {
  comment: string;
  rating_value: number;
};

type ResetPassword = {
  old_password: string;
  new_password: string;
  confirm_password: string;
};
