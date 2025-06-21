import { useState } from "react";

export const Protected = () => {
  const [protectedData, setProtectedData] = useState(
    "Press button for access to content"
  );

  const getProtectedData = () => {
    console.log("loading protected data");
  };

  return (
    <div>
      {protectedData}
      <button onClick={}>get protected contend</button>
    </div>
  );
};
