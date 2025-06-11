import { useState } from "react";
import { addUser } from "../repository/user.repository";

// type SignUpFormProps = { redirectPath: string };
// const cookie = Astro.request.headers.get("cookie");
// if (!isLoggedIn(cookie)) {
//   return Astro.redirect("/login");
// }

export const SignUpForm = () => {
  const [newUser, setNewUser] = useState<User>({
    email: "",
    password: "",
  });

  const onCreateNewUser = async (e: any) => {
    e.preventDefault();
    const response = await addUser(newUser);
    setNewUser({
      email: "",
      password: "",
    });
    if (response.status === 200) {
      console.log("redirect to signin");
      return;
    }
    console.log("not redirect");
    return;
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
