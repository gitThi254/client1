import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { reviewsSchema } from "../../schemas/formSchema";
import { Rate } from "antd";
import { useAddReviews } from "../../hooks/product.hook";

const ModelReviews = ({
  title,
  description,
  button,
  open,
  setOpen,
}: {
  title: string;
  description: string;
  button: string;
  open: any;
  setOpen: (x: boolean) => void;
}) => {
  const { id } = useParams();
  const [rating, setRating] = useState<number>(0);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Reivews>({
    defaultValues: {
      rating_value: undefined,
      comment: "",
    },
    resolver: yupResolver(reviewsSchema),
  });
  useEffect(() => {
    setValue("rating_value", rating);
  }, [rating]);
  const { mutate: addReviews, isPending } = useAddReviews();
  const onSubmit = (data: Reivews) => {
    addReviews({ id, data });
    setOpen(false);
  };
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center gap-5">
          <div x-data="{modalOpen: false}">
            <div
              className="fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5"
              style={{ display: open ? "" : "none" }}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col justify-center max-w-142.5 h-full rounded-lg bg-stroke px-8 text-center dark:bg-boxdark md:px-17.5 md:py-15"
              >
                <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  {title}
                </h3>
                <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
                <p className="mb-4 font-medium">{description}</p>
                <div className="flex flex-col gap-4 mb-4">
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white text-start">
                      comment
                    </label>
                    <textarea
                      {...register("comment")}
                      placeholder="Add Review"
                      className="border border-graydark px-4 py-2 text-boxdark flex-1 w-full"
                    />
                    <div className="text-danger">
                      {errors?.comment?.message}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white text-start">
                      rating
                    </label>
                    <Rate
                      allowHalf
                      className="w-full text-primary border border-graydark p-2"
                      value={rating}
                      onChange={(e: any) => setRating(e)}
                    />
                    <div className="text-danger">
                      {errors?.rating_value?.message}
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap gap-y-4">
                  <div className="w-full px-3 2xsm:w-1/2">
                    <Link
                      to="/order/history/"
                      type="button"
                      className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Link>
                  </div>
                  <div className="w-full px-3 2xsm:w-1/2">
                    <button
                      className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                      disabled={isPending}
                    >
                      {isPending ? "Loading..." : button}
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

export default ModelReviews;
