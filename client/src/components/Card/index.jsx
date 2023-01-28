import React from "react";
import moment from "moment";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

function Card({ item }) {
  const { addToCart, items } = useCart();

  const findCartItem = items.find(cartItem => cartItem._id === item._id);
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/product/${item._id}`}>
        <Image src={item.photos[0]} alt="product" loading="lazy" />
        <Box p="6">
          <Box d="plex" alignItems="baseline">
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {item.title}
          </Box>

          <Box>{item.price} TL</Box>
        </Box>
      </Link>
      <Button
        onClick={() => addToCart(item, findCartItem)}
        variant="solid"
        colorScheme={findCartItem ? "pink" : "green"}
      >
        {findCartItem ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </Box>
  );
}

export default Card;
