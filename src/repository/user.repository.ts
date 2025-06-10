export const addUser = async (params) => {
  try {
    const response = await fetch("http://localhost:4321/api/signup", {
      method: "POST",
      body: JSON.stringify({
        ...params,
        userId: 3,
        userName: "lu",
        role: "seller",
      }),
    });
    // console.log({ response, data: response.response });
    // return { response };
    return new Response(await response.arrayBuffer());
  } catch (error) {
    console.error({ error });
  }
};
