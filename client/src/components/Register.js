import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/auth";

export default function Register() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const updateFields = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // { fieldName: "value" }
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        Name: <br />
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            updateFields(e);
          }}
        />
        <br />
        Email: <br />
        <input
          type="text"
          name="email"
          onChange={(e) => {
            updateFields(e);
          }}
        />
        <br />
        Password: <br />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            updateFields(e);
          }}
        />
        <br />
        <br />
        <input type="submit" name="sumbit" />
      </form>
    </>
  );
}
