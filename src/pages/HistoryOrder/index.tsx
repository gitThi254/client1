import { useMethod, useOrders } from "../../hooks/order.hook";
import Loader_image from "../../common/Loader_image";
import SelectOrder from "../../components/SelectOrder";
import { useSearchParams } from "react-router-dom";
import Pagination_page from "../../components/Pagination_page";
import DataOrder from "../../components/DataOrder";
import Empty from "../../components/EmptyCart";

const HistoryOrder = () => {
  const [search, setSearch] = useSearchParams();
  const { data: orders, isPending } = useOrders(search);
  const { data: status, isPending: pending } = useMethod();
  if (isPending || pending) return <Loader_image />;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {orders.length === 0 ? (
        <>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  images
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Size
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <SelectOrder method={status} />
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.getAllOrders?.map((item: any) => (
                <DataOrder key={item._id} item={item} />
              ))}
            </tbody>
          </table>

          <Pagination_page
            itemsPerPage={5}
            items={orders?.totalPage[0]?.order_status}
            search={search}
            setSearch={setSearch}
          />
        </>
      ) : (
        <>
          <Empty title={"Bạn chưa có đơn hàng nào"} />
        </>
      )}
    </div>
  );
};

export default HistoryOrder;
