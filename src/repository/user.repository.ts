export const addUser = async (params: CreateUser) => {
  const response = await fetch("http://localhost:4321/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...params,
      id: crypto.randomUUID(),
      role: "seller",
    }),
  });
  return new Response(await response.arrayBuffer());
};

export const getUser = async (params: GetUser) => {
  const response = await fetch("http://localhost:4321/api/signin", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  return new Response(await response.arrayBuffer());
};
