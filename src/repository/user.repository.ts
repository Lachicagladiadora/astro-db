export const addUser = async (params) => {
  await fetch("http://localhost:4321/api/signup", {
    method: "POST",
    body: { ...params, userId: 3, userName: "lu", role: "seller" },
  });
  console.log(
    { params },
    { ...params, userId: 3, userName: "lu", role: "seller" }
  );
  // return;<
};
