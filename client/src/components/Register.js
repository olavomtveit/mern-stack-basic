import { registerUser } from "../redux/actions/auth";

export default function Register() {
  // get the formData
  // dispatch the action with the formData inside of it
  return (
    <>
      <form
        onSubmit={(e) => {
          onsubmit(e);
        }}
      >
        Name: <br />
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            onchange(e);
          }}
        />
        <br />
        Email: <br />
        <input
          type="text"
          name="email"
          onChange={(e) => {
            onchange(e);
          }}
        />
        <br />
        Password: <br />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            onchange(e);
          }}
        />
        <br />
        <br />
        <input type="submit" name="sumbit" />
      </form>
    </>
  );
}
