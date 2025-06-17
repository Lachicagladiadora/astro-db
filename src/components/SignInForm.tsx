import { useState } from "react";
import { getUser } from "../repository/user.repository";
import { navigate } from "astro:transitions/client";
import { IS_EMAIL } from "../utils/regex.utils";
import { EMPTY_USER } from "../constants";

export const SignInForm = () => {
  const [user, setUser] = useState<CreateUser>(EMPTY_USER);

  const onSignIn = async (e: any) => {
    try {
      e.preventDefault();
      if (!IS_EMAIL.test(user.email)) {
        throw Error("Email invalid");
      }
      if (user.password.length !== 8) {
        throw Error("The password will have 8 characters");
      }
      const response = await getUser(user);
      setUser(EMPTY_USER);

      if (response.status !== 200) {
        throw Error("Email or password invalid");
      }
      navigate("/");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <form
      onSubmit={(e) => onSignIn(e)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        gap: "20px",
      }}
    >
      <label>
        Email:{" "}
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser((p) => ({ ...p, email: e.target.value }))}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="text"
          value={user.password}
          onChange={(e) => setUser((p) => ({ ...p, password: e.target.value }))}
        />
      </label>
      {/* <label>
        Confirm password: <input type="text" />
      </label> */}
      <button>Create account</button>
    </form>
  );
};
