const axios = require("axios");
const qs = require("qs");
var sha1 = require("sha1");
const { host } = require("../config");

async function _login(email: string, password: string) {
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

async function _registration(data: {
  name: string;
  surname: string;
  email: string;
  password: string;
}) {
  console.log("here is the object", data);
  console.log("data.name ", data.name);
  const response = await axios.post(host + "/api/registration", {
    name: data.name,
    surname: data.surname,
    email: data.email,
    pwd_hash: sha1(data.password),
  });
  return response.data;
}

export { _login, _registration };
