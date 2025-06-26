import { useState } from "react";

// const currentUser = Astro.locals.user;

export const Protected = () => {
  const [protectedData, setProtectedData] = useState(
    "Press button for access to content"
  );

  const getProtectedData = () => {
    try {
      console.log("loading protected data");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div>
      {protectedData}
      <button onClick={getProtectedData}>get protected contend</button>
    </div>
  );
};
