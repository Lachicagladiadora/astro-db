export const SignOutButton = () => {
  const onSignOut = () => {
    try {
      console.log("success, session closed");
    } catch (error) {
      console.error({ error });
    }
  };
  return <button onClick={onSignOut}>SignOutButton</button>;
};
