import axios from "axios";

export const fetchProductList = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_ENDPOINT}/product`
  );

  return data;
};

export const fetchProduct = async id => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_ENDPOINT}/product/${id}`
  );

  return data;
};
