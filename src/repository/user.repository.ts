export const addUser = async (
  params: FormUser
): Promise<{ message: string }> => {
  const response = await fetch("http://localhost:4321/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...params,
      id: crypto.randomUUID(),
      role: "seller",
    }),
  });
  // response.status
  if (response.status !== 200) {
    throw Error("Email or password invalid");
  }
  return await response.json();
};

export const getUser = async (params: FormUser) => {
  const response = await fetch("http://localhost:4321/api/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  if (response.status !== 200) {
    throw Error("Email or password invalid");
  }
  return response;
};
