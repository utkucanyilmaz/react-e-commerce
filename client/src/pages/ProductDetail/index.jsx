import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";

import { useCart } from "../../context/CartContext";

function ProductDetail() {
  const { product_id } = useParams();

  const { addToCart, items } = useCart();

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const findCartItem = items.find(item => item._id === product_id);

  const images = data.photos.map(url => ({
    original: url,
  }));

  return (
    <Flex flexDirection="column" rowGap={4}>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>

      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>

      <p>{data.description}</p>
      <Button
        w="300px"
        colorScheme={findCartItem ? "pink" : "green"}
        onClick={() => addToCart(data, findCartItem)}
      >
        {findCartItem ? "Remove from Cart" : "Add to Cart"}
      </Button>
      <Box margin="10">
        <ImageGallery items={images}></ImageGallery>
      </Box>
    </Flex>
  );
}

export default ProductDetail;
