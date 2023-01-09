import { useState } from "react";
import Login from "./login";
import Registration from "./registration";
import { Box } from "@chakra-ui/react";

const LoginRegistration = () => {
  const [registration, setRegistration] = useState(false);

  function changeRegistrationHandler(value: boolean) {
    setRegistration(value);
  }

  return (
    <Box>
      {registration === false ? (
        <Login onChangeRegistration={changeRegistrationHandler} />
      ) : (
        <Registration onChangeRegistration={changeRegistrationHandler} />
      )}
    </Box>
  );
};

export default LoginRegistration;
