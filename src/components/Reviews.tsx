import { Rate } from "antd";
const Reviews = ({ data }: { data: any }) => {
  const rating = (rate: any) => {
    const x: any = (rate % 1).toFixed(2);
    const rating = x >= 0.25 && x < 0.75 ? 0.5 : x < 0.25 ? 0 : 1;
    console.log(rating);
    return Number(parseInt(rate) + rating);
  };
  return (
    <>
      <div className="bg-gray-950 w-full flex justify-center items-center">
        <div className="w-full flex flex-col gap-2 p-5 bg-bodydark1 text-white">
          <div>
            <h1 className="py-5 text-lg text-black">Reviews</h1>
            {data ? (
              <span className="flex items-center gap-4">
                <Rate
                  allowHalf
                  className="text-primary border border-graydark p-2"
                  value={rating(data?.totalStats)}
                  disabled
                />
                <span className="text-black text-2xl">
                  {data?.totalStats?.toFixed(2)}
                </span>
              </span>
            ) : (
              <span className="text-2xl text-black-2 font-medium">
                Chưa có bình luận nào !
              </span>
            )}
          </div>
          {data ? (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-4 bg-gray-700 p-4">
                {data?.reviews?.map((item: any, index: any) => (
                  <div key={index}>
                    <div className="flex justify justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="w-7 h-7 text-center rounded-full bg-red-500">
                          <div>{item.name[0]}</div>
                        </div>
                        <div className="flex items-center">
                          <span>{item?.name}</span>
                          <span>
                            <Rate
                              allowHalf
                              className="w-full text-primary border border-graydark p-2"
                              value={item?.rating_value}
                              disabled
                            />
                          </span>
                        </div>
                      </div>
                      <div className="flex p-1 gap-1 text-orange-300"></div>
                    </div>
                    <div>{item?.comment}</div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Reviews;
