import { useState } from "react";

type SignOutButtonProps = { currentUser: string };

export const SignOutButton = ({ currentUser }: SignOutButtonProps) => {
  const [user, setUser] = useState<string | null>(currentUser);

  const onSignOut = () => {
    try {
      console.log("success, session closed");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <>
      {!user && (
        <>
          <a href="/signin">Sign In</a>
          <a href="/signup">Create Account</a>
        </>
      )}
      {user && <button onClick={onSignOut}>SignOutButton</button>}
    </>
  );
};
