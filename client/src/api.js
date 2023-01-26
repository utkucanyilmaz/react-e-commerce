import axios from "axios";

export const fetchProductList = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_ENDPOINT}/product?page=${pageParam}`
  );

  return data;
};

export const fetchProduct = async id => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_ENDPOINT}/product/${id}`
  );

  return data;
};
