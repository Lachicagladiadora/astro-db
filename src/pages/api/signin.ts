import { type APIRoute } from "astro";
import { db, User } from "astro:db";
import jwt from "jsonwebtoken";

import { IS_EMAIL } from "../../utils/regex.utils";
import { SECRET } from "../../constants";

// var jwt = require("jsonwebtoken");
export const prerender = false;

export const GET: APIRoute = async ({ cookies, request }) => {
  try {
    const body = await request.json();
    if (!IS_EMAIL.test(body.email)) throw Error("Email invalid");
    if (body.password.length !== 8) throw Error("Password invalid");
    const user = await db.select().from(User).innerJoin(User, body);
    // console.log({ tt });
    const accessToken = jwt.sign(user, SECRET, { expireIn: "1h" });
    const refreshToken = jwt.sign(user, SECRET, { expireIn: "7d" });

    // const accessCookie = `auth_token=${accessToken}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict${
    //   import.meta.env.PROD ? "; Secure" : ""
    // }`;

    // const refreshCookie = `auth_token=${refreshToken}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict${
    //   import.meta.env.PROD ? "; Secure" : ""
    // }`;
    cookies.set("accessCookies", accessToken, { expires: "" });
    // cookies.set(refreshToken, SECRET, { path: "/" });
    // cookies.set("counter", String(counter));

    return new Response(
      JSON.stringify({
        status: 200,
        message: "Congratulations! Access allowed",
        body: { email: body.email },
        // headers: { "Set-Cookie": "token:accessToken ; Path: /" },
      })
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
