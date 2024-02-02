import Carousel from "../Carousel";

const Blog = () => {
  return (
    <>
      <div className="container bg mx-auto pb-8 bg-meta-9">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-6 lg:max-w-none lg:py-6">
            <div className="flex flex-col text-center w-full">
              <h2 className="text-xl text-gray-800 tracking-widest font-bold title-font mb-1">
                NEM’S BLOG
              </h2>
              <h1 className="sm:text-xl text-lg font-medium title-font text-gray-500">
                ĐÓN ĐẦU XU HƯỚNG, ĐỊNH HÌNH PHONG CÁCH
              </h1>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Blog;
