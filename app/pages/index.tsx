import { Link, Flex, Heading, Box } from "@chakra-ui/react";

import NextLink from "next/link";

const Home = () => {
  return (
    <Flex height="100vh" align="center" direction="column">
      <Box>
        <Heading mb={6}>Home page</Heading>
      </Box>
      <Box>
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
