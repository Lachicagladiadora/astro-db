import type { APIRoute } from "astro";
import { db, User } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  //validacion is an email?, the password have 8 characters?
  const tt = await db.insert(User).values(body);
  console.log({ tt });
  return new Response(
    JSON.stringify({
      message: `User ${body.userName} created`,
    }),
    { status: 200 }
  );
};
