import React, { useState } from "react";
import { validateEmail } from "../../src/utils";
import { _login } from "../../src/api";
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const loginBackground = useColorModeValue("gray.200", "gray.800");
  const [email, setEmail] = useState("");

  const login = async () => {
    const response = await _login(email, "ciao");
    console.log(response.data);
  };
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validateEmail(event.target.value)) setEmail(event.target.value);
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input
          placeholder="login@email.com"
          variant="filled"
          mb={3}
          type="email"
          onChange={onEmailChange}
        />
        <Input placeholder="******" variant="filled" mb={3} type="password" />
        <Button mb={6} background={loginBackground} onClick={login}>
          Log in
        </Button>
        <Button mb={6} colorScheme="teal">
          Registration
        </Button>
        <Button onClick={toggleColorMode}>Color mode</Button>
      </Flex>
    </Flex>
  );
};

export default Login;
