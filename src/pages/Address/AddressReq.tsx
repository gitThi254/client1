import { useState } from "react";
import ModelAddress from "./ModelAddress";
import { useDeleteAddress } from "../../hooks/auth.hook";

const AddressReq = ({ address }: { address: any }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { mutate: deleteAddresMutation, isPending } = useDeleteAddress();
  return (
    <>
      <div className="flex justify-between px-10">
        <div className="flex flex-col gap-1 items-start">
          <div className="text-xl text-boxdark-2">
            {address?.hoTen} | {address?.phone}
          </div>
          <p className="text-lg">
            {address?.xa} ,{address?.huyen}, {address.thanhPho}
          </p>
          <p className="text-lg">{address?.diaChiCuThe}</p>
          <button className="border-2 border-warning py-2 px-4 text-warning rounded-md">
            Mặc định
          </button>
        </div>
        <div className="flex flex-col">
          <div className="text-lg text-meta-5">
            <button onClick={() => setOpen(true)}>Cập nhật</button> |{" "}
            <button
              onClick={() => deleteAddresMutation(address._id)}
              disabled={isPending}
            >
              {isPending ? "Loading..." : "Xóa"}
            </button>
          </div>
          <button className="text-lg text-meta-4/60 border border-meta-4/70 px-8 py-2 border-rounded">
            Thiết lập mặc định
          </button>
        </div>
      </div>

      <ModelAddress
        title="Cập nhật Địa Chỉ"
        description="Bạn vui long nhập vào form này"
        button="Cập nhật địa chỉ"
        open={open}
        setOpen={setOpen}
        data={address}
      />
    </>
  );
};

export default AddressReq;
