import type { APIRoute } from "astro";
// import { db, User } from "astro:db";
import { decrypt } from "../../utils/utils";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // const tt = await decrypt(request.json());

  // console.log({ tt });
  // if (request.headers.get("Content-Type") === "application/json") {

  const body: EncodeData = await request.json();
  // const body = await request.json();
  console.log({ body });
  const tt = await decrypt(body);

  console.log({ tt });
  // const tt = await decrypt(body);
  // console.log({ request, body, tt });

  // await db.insert(User).values(body);
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
      message: `User  created`, //${body.userName}
    }),
    { status: 200 }
  );
};
