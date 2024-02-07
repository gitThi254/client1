import { Link } from "react-router-dom";
import { useBlogs } from "../../hooks/blog.hook";
import Meta from "../../components/Meta/Meta";
import Loader_image from "../../common/Loader_image";

const Blog = () => {
  const {
    data: blogs,
    isPending,
    error,
    hasNextPage,
    fetchNextPage,
  } = useBlogs();
  if (isPending) return <Loader_image />;
  if (error) return <p>{error.message}</p>;
  alert(blogs && JSON.stringify(blogs.pages[0]));
  return (
    <>
      <Meta title={"Bài viết"} />
      <section className="text-gray-600 body-font w-full contanier mx-auto">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap flex-col -m-4 gap-4 mb-4">
            {blogs &&
              blogs?.pages?.map((page: any) =>
                page?.data?.map((blog: any) => (
                  <div
                    className="-my-8 divide-y-2 divide-gray-100 p-4"
                    key={blog._id}
                  >
                    <div className="py-8 flex gap-10 md:flex-nowrap">
                      <div
                        className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col overflow-hidden"
                        style={{
                          backgroundImage: `url(${blog?.images[0].url})`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="text-white bg-black-2/50 text-center">
                          <span className="font-semibold title-font ">
                            {blog.category_name}
                          </span>
                          <span className="mt-1 text-sm px-4">
                            {new Date(blog?.createdAt).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                          {blog.title}
                        </h2>
                        <p className="leading-relaxed line-clamp-2">
                          {blog.description}
                        </p>
                        <Link
                          to={`/blog/${blog._id}`}
                          className="text-indigo-500 inline-flex items-center mt-4 p-2 bg-primary/95 hover:bg-primary rounded-md text-white"
                        >
                          Đọc thêm
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
        <div className="w-full text-center">
          {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              className="px-4 py-2 bg-meta-3 text-white font-semibold text-xl rounded mb-4"
            >
              Tải thêm bài viết
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
