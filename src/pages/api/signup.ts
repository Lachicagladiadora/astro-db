import type { APIRoute } from "astro";
import { db, User } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async (body) => {
  console.log({
    body,
    jiji: body.body,
    jij: body.headers,
    ji: body.client,
    j: body.url,
  });

  // db.insert(User).values(params);
  return new Response("User created", { status: 200 });
  // return new Response(
  //   // "User created", { status: 200 }
  //   JSON.stringify({
  //     path: new URL("/").pathname,
  //   })
  // );
};
