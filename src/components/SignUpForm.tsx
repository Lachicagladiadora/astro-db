import { useState } from "react";
import { addUser } from "../repository/user.repository";

export const SignUpForm = () => {
  const [newUser, setNewUser] = useState<User>({
    email: "",
    password: "",
  });

  const onCreateNewUser = async (e: any) => {
    e.preventDefault();
    console.log("initializing");
    await addUser(newUser);
    console.log("success");
    setNewUser({
      email: "",
      password: "",
    });
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
          type="text"
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
