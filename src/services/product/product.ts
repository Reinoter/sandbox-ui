/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { fetcher } from "..";

export function getProducts() {
  const { data, error, isLoading } = useSWR(`/products`, fetcher);
  console.log(data, error, isLoading);
  return {
    products: data,
    isLoading,
    isError: error,
  };
}
