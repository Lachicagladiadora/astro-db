import type { APIRoute } from "astro";
import { db, User } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  await db.insert(User).values(body);
  return new Response(
    JSON.stringify({
      message: `User ${body.userName} created`,
    }),
    { status: 200 }
  );
};
