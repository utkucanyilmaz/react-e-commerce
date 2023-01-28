import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    logout(() => {
      navigate("/");
    });
  };

  return (
    <Flex
      alignItems="start"
      justifyContent="center"
      flexDir="column"
      rowGap={5}
    >
      <Heading as="h1">Profile</Heading>
      <code>{JSON.stringify(user)}</code>
      <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
        Logout
      </Button>
    </Flex>
  );
}

export default Profile;
