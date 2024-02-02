import { Link } from "react-router-dom";
import { useTopFiveSales } from "../../hooks/product.hook";

export default function Product() {
  const { data: products } = useTopFiveSales();
  return (
    <div className="bg-white container mx-auto">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col text-center w-full mb-4">
          <h2 className="text-2xl text-gray-700 text-opacity-80 tracking-widest font-bold title-font mb-1">
            TOP 4 SẢN PHẨM BÁN CHẠY NHẤT SHOP
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product: any) => (
            <Link
              to={`/products/${product?._id?.product_id}`}
              key={product?._id?.product_id}
              className="group relative flex flex-col"
            >
              <div className="flex-1 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-80 lg:h-80">
                <img
                  src={product?.images[0].url}
                  alt={product?.name}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-col justify-between h-[50px]">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product?.name}
                    </a>
                  </h3>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Số lượng đã bán :{" "}
                    <span className="text-lg text-graydark">
                      {product?.sumProductselled}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
