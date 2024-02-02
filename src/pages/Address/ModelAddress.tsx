import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddressShema } from "../../schemas/formSchema";
import { useCreateAddress, useUpdateAddress } from "../../hooks/auth.hook";

const ModelAddress = ({
  title,
  description,
  button,
  open,
  setOpen,
  data,
}: {
  title: string;
  description: string;
  button: string;
  open: any;
  setOpen: (x: boolean) => void;
  data?: any;
}) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>({
    defaultValues: {
      hoTen: data?.hoTen ?? "",
      phone: data?.phone ?? "",
      thanhPho: data?.thanhPho ?? "",
      huyen: data?.huyen ?? "",
      xa: data?.xa ?? "",
      diaChiCuThe: data?.diaChiCuThe ?? "",
    },
    resolver: yupResolver(AddressShema),
  });
  const { mutate: createAddressMutation, isPending } = useCreateAddress();
  const { mutate: updateAddressMutation, isPending: pending } =
    useUpdateAddress();

  const onSubmit = (address: Address) => {
    if (data) {
      updateAddressMutation({ id: data._id, data: address });
    } else {
      createAddressMutation(address);
    }
    setOpen(false);
    reset();
  };
  return (
    <>
      <div className="rounded-sm  border border-stroke bg-white p-10 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap justify-center gap-5">
          <div x-data="{modalOpen: false}">
            <div
              x-show="modalOpen"
              x-transition=""
              className="fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5"
              style={{ display: open ? "" : "none" }}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-142.5 h-full rounded-lg bg-white px-8 text-center dark:bg-boxdark md:px-17.5 md:py-15"
              >
                <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  {title}
                </h3>
                <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
                <p className="mb-4 font-medium">{description}</p>
                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col flex-1">
                      <input
                        type="text"
                        placeholder="Nhập họ tên"
                        className="border p-2"
                        {...register("hoTen")}
                      />
                      <span className="text-danger">
                        {errors?.hoTen?.message}
                      </span>
                    </div>

                    <div className="flex flex-col flex-1">
                      <input
                        type="text"
                        placeholder="Nhập số điện thoại"
                        {...register("phone")}
                        className="border p-2"
                      />
                      <span className="text-danger">
                        {errors?.phone?.message}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Nhập thành phố"
                      className="border p-2"
                      {...register("thanhPho")}
                    />
                    <span className="text-danger">
                      {errors?.thanhPho?.message}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Nhập huyện"
                      {...register("huyen")}
                      className="border p-2"
                    />
                    <span className="text-danger">
                      {errors?.huyen?.message}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Nhập xã"
                      className="border p-2"
                      {...register("xa")}
                    />
                    <span className="text-danger">{errors?.xa?.message}</span>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Nhập địa chỉ cụ thể"
                      className="border p-2"
                      {...register("diaChiCuThe")}
                    />
                    <span className="text-danger">
                      {errors?.diaChiCuThe?.message}
                    </span>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap gap-y-4">
                  <div className="w-full px-3 2xsm:w-1/2">
                    <button
                      type="button"
                      className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="w-full px-3 2xsm:w-1/2">
                    <button
                      className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                      disabled={isPending || pending}
                    >
                      {isPending || pending ? "Loading..." : button}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelAddress;
