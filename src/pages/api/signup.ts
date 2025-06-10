import type { APIRoute } from "astro";
import { db, User } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // const tt = await request.json();
  // console.log({ tt });
  // if (request.headers.get("Content-Type") === "application/json") {
  const body = await request.json();
  // console.log({ params, request, body });
  await db.insert(User).values(body);
  // await db.batch(User);
  //run middleware
  // region todo: validate, check saved & redirect in front

  // return new Response("User created", { status: 200 });
  // return new Response({
  //   statusCode: 200,
  //   statusText: "User created",
  // });
  // }
  return new Response(
    JSON.stringify({
      message: `User ${body.userName} created`,
    }),
    { status: 200 }
  );
};
