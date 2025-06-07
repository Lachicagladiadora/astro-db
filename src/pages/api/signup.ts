import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async (params, request) => {
  console.log({ params, request });
  //run middleware
  // region todo: get bady , send to bd , save and redirect
  // return new Response("User created", { status: 200 });
  return new Response(
    JSON.stringify({
      message: "User created!",
      path: new URL(params.url.origin).pathname,
    }),
    { status: 200, statusText: "User created" }
  );
};
