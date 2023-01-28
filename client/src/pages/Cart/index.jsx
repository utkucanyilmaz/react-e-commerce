import { Alert, Image, Button, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { items, removeFromCart } = useCart();

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  console.log(total);
  return (
    <Box p={5}>
      {items.length < 1 && (
        <Alert status="warning">You have not any items in your cart.</Alert>
      )}

      {items.length > 0 && (
        <>
          <ul className="cart">
            {items.map(item => (
              <li key={item._id}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  rowGap={4}
                  p={5}
                  border="1px"
                  borderColor="gray.200"
                  borderRadius="xl"
                >
                  <Text fontSize="18">
                    {item.title} - {item.price} TL
                  </Text>
                  <Link to={`/product/${item._id}`}>
                    <Image
                      htmlWidth={200}
                      src={item.photos[0]}
                      alt={item.title}
                      loading="lazy"
                    />
                  </Link>

                  <Button
                    mt="2"
                    size="sm"
                    colorScheme="pink"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove from Cart
                  </Button>
                </Box>
              </li>
            ))}
          </ul>
        </>
      )}

      <Box mt={10}>
        {total > 0 && <Text fontSize="22">Total: {total} TL</Text>}
      </Box>
    </Box>
  );
}

export default Cart;
