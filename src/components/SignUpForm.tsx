import { useState } from "react";
import { addUser } from "../repository/user.repository";
import { navigate } from "astro:transitions/client";
import { IS_EMAIL } from "../utils/regex.utils";

export const SignUpForm = () => {
  const [newUser, setNewUser] = useState<User>({
    email: "",
    password: "",
  });

  const onCreateNewUser = async (e: any) => {
    try {
      e.preventDefault();
      if (!IS_EMAIL.test(newUser.email)) {
        throw Error("Email invalid");
      }
      if (newUser.password.length !== 8) {
        throw Error("The password will have 8 characters");
      }
      const response = await addUser(newUser);
      setNewUser({
        email: "",
        password: "",
      });
      if (response.status !== 200) {
        throw Error("Email or password invalid");
      }
      navigate("/signin");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <form
      onSubmit={(e) => onCreateNewUser(e)}
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
          value={newUser.email}
          onChange={(e) => setNewUser((p) => ({ ...p, email: e.target.value }))}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="text"
          value={newUser.password}
          onChange={(e) =>
            setNewUser((p) => ({ ...p, password: e.target.value }))
          }
        />
      </label>
      {/* <label>
        Confirm password: <input type="text" />
      </label> */}
      <button>Create account</button>
    </form>
  );
};
