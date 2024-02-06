import { useState } from "react";
import { Link } from "react-router-dom";
import ModelReviews from "../pages/ProductDetail/ModelReview";

const DataOrder = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <tr
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        key={item.id}
      >
        <th className="w-[100px] border m-4">
          <img
            src={item?.product_image[0]?.url ?? null}
            alt={item?.product_name}
          />
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {item?.product_name}
        </th>
        <td className="px-6 py-4">
          <span
            className={`inline-block w-16 h-8 border border-g`}
            style={{
              backgroundColor: `${item?.value?.find((data: any) =>
                data.startsWith("#")
              )}`,
            }}
          ></span>
        </td>
        <td className="px-6 py-4">
          {item?.value?.find((data: any) => !data.startsWith("#"))}
        </td>
        <td className="px-6 py-4">{item.qty}</td>

        <td className="px-6 py-4">{item?.category_name}</td>
        <td className="px-6 py-4">
          ${(Number(item.qty) * Number(item.price)).toFixed(2)}
        </td>
        <td className="px-6 py-4">{item.order} </td>
        <td className="px-6 py-4">
          <Link
            to={`/products/${item?.product_id}`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Buy again
          </Link>{" "}
          {item?.order === "Đã giao hàng" ? (
            <>
              |{" "}
              <Link
                to={`/order/history/${item?.order_id}`}
                onClick={() => setIsOpen(true)}
              >
                Reviews
              </Link>
            </>
          ) : null}
        </td>
      </tr>
      <ModelReviews
        title="Form nhập Reviews"
        description="Vui lòng điền vào form này!"
        button="Thêm Reviews"
        open={isOpen}
        setOpen={setIsOpen}
      />
    </>
  );
};

export default DataOrder;
