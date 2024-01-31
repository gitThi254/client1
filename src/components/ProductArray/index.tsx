import { ChevronRightIcon } from "@heroicons/react/20/solid";
import DropCheckBox from "../DropCheckbox";
import { Colors, Sizies } from "../../data/Data";
import { useProducts } from "../../hooks/product.hook";
import Loader from "../../common/Loader";
import { Link } from "react-router-dom";

export default function ProductArray() {
  const { data: products, isPending } = useProducts();
  if (isPending) return <Loader />;

  return (
    <div className="bg-white container mx-auto">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <div className="flex text-start w-full mb-4 justify-between items-center">
          <div>
            <h2 className="text-2xl text-gray-700 text-opacity-80 tracking-widest font-bold title-font mb-1">
              SẢN PHẨM MỚI
            </h2>
          </div>

          <div className="flex w-[200px] justify-between">
            <DropCheckBox variation={Sizies} title="Size" />
            <DropCheckBox variation={Colors} title="Color" />
          </div>
          <div>
            <div>gia</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: any) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="group relative"
            >
              <div className="aspect-h-1 border aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-80 lg:h-80">
                <img
                  src={product?.image[0]?.url}
                  alt={product?.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full p-4"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="flex-1">
                  <h3 className="text-sm text-gray-700">
                    <a href={product?.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product?.name}
                    </a>
                  </h3>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900"></p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    ${" "}
                    {`[${product?.min} - ${product?.max}] - ${product?.count}`}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="w-full mx-auto sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
