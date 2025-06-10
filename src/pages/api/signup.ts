import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ params, request }) => {
  // const tt = await request.json();
  // console.log({ tt });
  // if (request.headers.get("Content-Type") === "application/json") {
  const body = await request.json();
  console.log({ params, request, body });
  //run middleware
  // region todo: get bady , send to bd , save and redirect
  // return new Response("User created", { status: 200 });
  return new Response(
    JSON.stringify({
      message: "User created!",
      // path: new URL(params.url.origin).pathname,
    }),
    { status: 200, statusText: "User created" }
  );
  // }
  // return new Response(
  //   JSON.stringify({
  //     message: "are you crazy?, you don't send body correctly",
  //   }),
  //   { status: 500 }
  // );
};
