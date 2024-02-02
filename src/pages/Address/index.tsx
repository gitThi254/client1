import { useAddress } from "../../hooks/auth.hook";
import Loader from "../../common/Loader";
import AddressReq from "./AddressReq";
import { useState } from "react";
import ModelAddress from "./ModelAddress";

const Address = () => {
  const { data: address, isPending } = useAddress();
  const [open, setOpen] = useState<boolean>(false);
  if (isPending) return <Loader />;
  return (
    <>
      {address && (
        <section className="h-full min-[800px] flex flex-col gap-4 m-4 overflow-y-scroll overflow-x-scroll">
          <div className="flex justify-between p-10 border-b border-graydark/40">
            <div className="text-xl text-boxdark">Địa chỉ của tôi</div>
            <button
              className="text-white text-md bg-warning/90 hover:bg-warning px-4 py-2 rounded-sm"
              onClick={() => setOpen(true)}
            >
              Thêm mới địa chỉ
            </button>
          </div>
          {address?.map((item: any) => (
            <AddressReq key={item._id} address={item} />
          ))}

          <ModelAddress
            title="Tạo Địa Chỉ"
            description="Bạn vui long nhập vào form này"
            button="Tạo địa chỉ"
            open={open}
            setOpen={setOpen}
          />
        </section>
      )}
    </>
  );
};

export default Address;
