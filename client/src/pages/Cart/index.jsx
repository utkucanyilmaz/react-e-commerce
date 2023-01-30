import {
  Alert,
  Image,
  Button,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { postOrder } from "../../api";
import { useCart } from "../../context/CartContext";

function Cart() {
  const [address, setAddress] = useState("");
  const { items, removeFromCart, emptyCart } = useCart();
  const initialRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitForm = async () => {
    const itemIds = items.map(item => item._id);

    const input = {
      address,
      items: JSON.stringify(itemIds),
    };

    const res = await postOrder(input);
    emptyCart();
    onClose();
  };

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <>
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

        {items.length > 0 && (
          <Button mt={2} size="sm" colorScheme="orange" onClick={onOpen}>
            Order
          </Button>
        )}
      </Box>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Textarea
                ref={initialRef}
                placeholder="Address"
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmitForm} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cart;
