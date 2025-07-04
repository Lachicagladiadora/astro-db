import { navigate } from "astro/virtual-modules/transitions-router.js";
import { signOut } from "../repository/user.repository";

export const SignOutButton = () => {
  const onSignOut = async () => {
    try {
      const response = await signOut();
      const res = await response.json();
      console.log({ response: res.message });
      navigate("/signin");
    } catch (error) {
      console.error({ error });
    }
  };

  return <button onClick={onSignOut}>SignOutButton</button>;
};
