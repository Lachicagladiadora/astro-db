import { encrypt } from "../utils";

export const addUser = async (params: User) => {
  try {
    const response = await fetch("http://localhost:4321/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: await encrypt(
        JSON.stringify({
          ...params,
          userId: crypto.randomUUID(),
          role: "seller",
        })
      ),
    });
    return new Response(await response.arrayBuffer());
    // return "hello front";
  } catch (error) {
    console.error({ error });
  }
};
