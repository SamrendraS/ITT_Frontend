import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
// const baseUrl = "http://localhost:8081";
const baseUrl = "https://itt-lab-backend.herokuapp.com";

export const useGetPosts = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;

  const { data: posts, error } = useSWR(url, fetcher);

  return { posts, error };
};
