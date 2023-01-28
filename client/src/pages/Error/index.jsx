import React from "react";
import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react";

function Error() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>This page doesn't exist.</AlertDescription>
    </Alert>
  );
}

export default Error;
