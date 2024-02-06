import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateOrder } from "../../hooks/order.hook";
import Model from "../../components/Model";
import ModelAddress from "../Address/ModelAddress";
import { yupResolver } from "@hookform/resolvers/yup";
import { OrderSchema } from "../../schemas/formSchema";

const Order = ({
  cart,
  user,
  shipping,
  address,
}: {
  cart: any;
  user: any;
  shipping: any;
  address: any;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>({
    defaultValues: {
      payment_method_id: "",
      shipping_address: user?.address?.default?._id ?? "",
      shipping_method: cart?.method ?? "",
      order_status: "65a5ec3f4a4a86cae890b658",
      order_total: cart?.total ?? 0,
    },
    resolver: yupResolver(OrderSchema),
  });
  const { mutate: createOrderMutation, isPending } = useCreateOrder();
  const onSubmit = (data: any) => {
    const carts_id = cart?.cart?.map((item: any) => item._id);
    createOrderMutation({ ...data, cart: carts_id });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex lg:flex-row flex-col mt-10 min-h-screen border"
      >
        <div className="flex-1 flex flex-col gap-4 p-20">
          <div className="text">Thông tin liên hệ</div>
          <div className="w-full flex flex-col">
            <label>Email address</label>
            <input
              type="email"
              className="p-2 border-2 rounded-sm"
              value={user.email}
              disabled={true}
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2>Select Address</h2>
            <button
              className="bg-warning/90 hover:bg-warning text-dark px-4 py-2 text-boxdark-2 rounded-md font-bold self-start"
              onClick={() => setOpen(true)}
            >
              Thêm Địa chỉ
            </button>
            <div className="flex flex-col gap-5">
              {address?.map((item: any) => (
                <label
                  htmlFor={item._id}
                  className="flex justify-between border-b"
                  key={item._id}
                >
                  <div>
                    <h1>Số Điện Thoại : {item.phone}</h1>
                    <h1>
                      Địa chỉ : {item.xa} - {item.huyen} - {item.thanhPho}
                    </h1>
                    <h1>Địa chỉ cụ thể : {item.diaChiCuThe}</h1>
                  </div>
                  <div>
                    <input
                      type="radio"
                      {...register("shipping_address")}
                      id={item._id}
                      value={item._id}
                    />
                  </div>
                </label>
              ))}
            </div>
            <div className="text-danger">
              {errors?.shipping_address?.message}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-20">
          <div>
            <h2>Select method payment</h2>
            <div className="flex gap-10 p-4 justify-between flex-wrap">
              {shipping.map((item: any) => (
                <div key={item._id}>
                  <label htmlFor={item._id}>{item.name}</label>
                  <input
                    type="radio"
                    {...register("payment_method_id")}
                    id={item._id}
                    value={item._id}
                  />
                </div>
              ))}
            </div>
            <div className="text-danger">
              {errors?.payment_method_id?.message}
            </div>
          </div>
          <div className="text">Order summary</div>
          <hr />
          {cart?.cart?.map((item: any) => (
            <div className="flex justify-between p-6" key={item._id}>
              <div className="flex gap-4">
                <img
                  src={item.product_image[0].url}
                  className="h-[150px] object-contain"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <p>{item.name}</p>
                    {item?.variation_options.map(
                      (variation: string, index: any) => {
                        if (variation.startsWith("#")) {
                          return (
                            <p
                              className="inline-block w-16 h-8"
                              style={{ backgroundColor: `${variation}` }}
                              key={index}
                            ></p>
                          );
                        } else {
                          return <p key={index}>{variation}</p>;
                        }
                      }
                    )}
                  </div>
                  <div>$32.00</div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="text-end">Delete</div>
                <div>
                  <input
                    type="number"
                    value={item?.qty}
                    className="w-[60px] border-2 px-2 py-1"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="bg-sky-100 flex flex-col">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>
                  $ {(Number(cart?.total) - Number(cart?.shipping)).toFixed(2)}{" "}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Shipping</div>
                <div>$ {cart?.shipping?.toFixed(2)}</div>
              </div>
            </div>
            <hr />
            <div className="flex justify-between">
              <div>Total</div>
              <div>$ {cart?.total?.toFixed(2)}</div>
            </div>
            <Model
              model="Xác nhận đặt hàng"
              title="Bạn có đặt hàng không"
              description="Hàng sẽ được giao từ 3 đến 4 ngày"
              button="Xác nhận"
              pending={isPending}
            />
          </div>
        </div>
      </form>
      <ModelAddress
        title="Tạo Địa Chỉ"
        description="Bạn vui long nhập vào form này"
        button="Tạo địa chỉ"
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Order;
