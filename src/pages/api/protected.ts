import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request, locals }) => {
  // return new Response("Hi PROTECTED", { status: 200 });

  try {
    console.log("hi protected");
    const user = locals.user;
    if (!user) throw Error("You need access for this content");

    return new Response(
      JSON.stringify({
        message: "Great!, you have access",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: `${error}`,
      }),
      { status: 500 }
    );
  }
};
