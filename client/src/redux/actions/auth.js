import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/actionTypes";

export const registerUser = ({ firstName, email, password }) => async (
  dispatch
) => {
  const userData = JSON.stringify({
    firstName: firstName,
    email: email,
    password: password,
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/auth", userData, config);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
