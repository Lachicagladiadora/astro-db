export const addUser = async (params: User) => {
  const response = await fetch("http://localhost:4321/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...params,
      userId: crypto.randomUUID(),
      role: "seller",
    }),
  });
  return new Response(await response.arrayBuffer());
};
