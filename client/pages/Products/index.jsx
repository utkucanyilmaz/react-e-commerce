import React from "react";
import Card from "../../components/Card";
import { Grid } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { fetchProductList } from "../../src/api";

function Products() {
  const { isLoading, error, data } = useQuery("products", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occured: " + error.message;

  console.log(data);

  return (
    <div>
      <Grid templateColumns="repeat(3,1fr)">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Grid>
    </div>
  );
}

export default Products;
