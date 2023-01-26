import React from "react";
import Card from "../../components/Card";
import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";

import { fetchProductList } from "../../src/api";

function Products() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchProductList, {
    getNextPageParam: (lastPage, pages) => {
      const morePagesExist = lastPage?.length === 12;

      if (!morePagesExist) {
        return;
      }

      return pages.length + 1;
    },
  });
  console.log(data);
  if (status === "loading") return "Loading...";

  if (status === "error") return "An error has occured: " + error.message;

  return (
    <div>
      <Grid templateColumns="repeat(3,1fr)">
        {data.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.map(item => (
              <Box key={item._id} w="100%">
                <Card item={item} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>

      <Flex mt="10" justifyContent="center">
        <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
    </div>
  );
}

export default Products;
