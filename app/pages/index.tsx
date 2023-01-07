import { Link, Flex, Heading, Box, Button } from "@chakra-ui/react";
import { useAppSelector } from "../store/hooks";

import NextLink from "next/link";
import Login from "../components/login";
import Registration from "../components/registration";

const Home = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <Flex height="100vh" align="center" direction="column">
      <Box>
        <Heading mb={6}>Home page </Heading>
      </Box>
      <Box>
        {isAuth == false ? <Login /> : <Registration />}
        <Flex justifyContent="center" direction="column">
          <Link as={NextLink} href="/login">
            Login
          </Link>
          <Link as={NextLink} href="/registration">
            Registration
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
