const axios = require("axios");
const qs = require("qs");
var sha1 = require("sha1");
const { host } = require("../config");

async function _login(email: string, password: string) {
  console.log(host + "/api/login");
  const response = await axios.post(
    host + "/api/login",
    qs.stringify({
      email: email,
      password: sha1(password),
    }),
    {
      headers: {
        "accept-encoding": "application/json",
      },
    }
  );
  return response.data;
}

export { _login };
