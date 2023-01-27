import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Heading } from "@chakra-ui/react";

function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <Heading as="h1">Profile</Heading>
      <code>{JSON.stringify(user)}</code>
    </div>
  );
}

export default Profile;
