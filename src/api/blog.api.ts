import axios from "./axios";
export const blogsReq = async ({ pageParam }: { pageParam?: number }) => {
  return axios
    .get(`/blogs?${pageParam !== 0 ? `limit=3&page=${pageParam}` : 0}`)
    .then((res) => res.data);
};
export const blogReq = async (id?: string) =>
  axios.get(`/blogs/${id}`).then((res) => res.data);

export const likesReq = async (id?: string) =>
  await axios.put("/blogs/likes", { blogId: id }).then((res) => {
    console.log(res.data);
    return res.data;
  });

export const dislikesReq = async (id?: string) =>
  await axios.put("/blogs/dislikes", { blogId: id }).then((res) => {
    console.log(res.data);
    return res.data;
  });
