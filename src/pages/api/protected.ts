import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  try {
    console.log("hi protected");
    const user = context.locals.user;
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
