import React from "react";
import { useQuery } from "react-query";
import { fetchOrders } from "../../../api";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  TableCaption,
  Heading,
} from "@chakra-ui/react";

function AdminOrders() {
  const { isLoading, isError, data } = useQuery("admin:orders", fetchOrders);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Heading>Orders</Heading>

      <Table mt={10} variant="simple">
        <TableCaption>User Orders</TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Address</Th>
            <Th isNumeric>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(item => {
            return (
              <Tr key={item._id}>
                <Td>{item.user.email}</Td>
                <Td>{item.adress}</Td>
                <Td isNumeric>{item.items.length}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}

export default AdminOrders;
