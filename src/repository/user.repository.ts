import { encrypt } from "../utils/utils";

export const addUser = async (params: User) => {
  try {
    const data = await encrypt(
      JSON.stringify({
        ...params,
        userId: crypto.randomUUID(),
        role: "seller",
      })
    );
    console.log({ data });
    const response = await fetch("http://localhost:4321/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return new Response(await response.arrayBuffer());
    // return "hello front";
  } catch (error) {
    console.error({ error });
  }
};
