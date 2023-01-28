import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
} from "@chakra-ui/react";

import { fetchLogin } from "../../../api";
import { useFormik } from "formik";
import validationSchema from "./validations";

import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await fetchLogin({
          email: values.email,
          password: values.password,
        });
        login(registerResponse);
        navigate("/profile");
      } catch (e) {
        bag.setErrors({ general: e.response.data.message });
      }
    },
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my="5">
            {formik.errors.general && (
              <Alert status="error">{formik.errors.general}</Alert>
            )}
          </Box>
          <Box my="5" textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>

              <Button onClick={formik.handleSubmit} mt={4}>
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Login;
