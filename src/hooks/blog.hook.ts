import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { blogReq, blogsReq, dislikesReq, likesReq } from "../api/blog.api";

export const useBlogs = (page: number = 1) => {
  return useInfiniteQuery({
    queryKey: ["blogs", page],
    queryFn: blogsReq,
    initialPageParam: 1,
    getNextPageParam: (lastpage: any, pages: any) => {
      const current = pages.length;
      const totalPage = lastpage.totalPage;
      if (current * 3 < totalPage) {
        return current + 1;
      } else {
        return undefined;
      }
    },
  });
};

export const useBlogsCarousel = () => {
  return useQuery({
    queryKey: ["blogs", "carousel"],
    queryFn: () => blogsReq({ pageParam: 0 }),
  });
};

export const useBlog = (id?: string) => {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: () => blogReq(id),
  });
};

export const useLikes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: likesReq,
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData(["blogs", data._id], data);
    },
  });
};

export const useDisLikes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: dislikesReq,
    onSuccess: (data) => {
      queryClient.setQueryData(["blogs", data._id], data);
    },
  });
};
