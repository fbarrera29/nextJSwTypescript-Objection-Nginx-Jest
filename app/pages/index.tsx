import { Link, Flex, Heading, Box, Button } from "@chakra-ui/react";
import { useAppSelector } from "../src/store/hooks";
import { useEffect } from "react";
import { useAppDispatch } from "../src/store/hooks";
import { authActions } from "../src/store/auth";

import NextLink from "next/link";
import Login from "../src/components/login";
import Registration from "../src/components/registration";
import LoginRegistration from "../src/components/loginRegistration";
import { _checkToken } from "../src/api";

const Home = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Your code here
    const checking = async () => {
      const response = await _checkToken();
      if (
        response !== false &&
        response.data.success === true &&
        response.data.data === "ok"
      ) {
        dispatch(authActions.login());
      }
    };
    checking();
  }, []);

  const logout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("token");
  };

  return (
    <Flex height="100vh" align="center" direction="column">
      <Box>
        <Heading mb={6}>Home page </Heading>
      </Box>
      <Box>
        {isAuth == false ? (
          <LoginRegistration />
        ) : (
          <Flex justifyContent="center" direction="column">
            Benvenuto
            <Button mb={6} onClick={logout}>
              Log out
            </Button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Home;
