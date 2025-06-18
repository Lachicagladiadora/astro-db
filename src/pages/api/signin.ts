import { type APIRoute } from "astro";
import { db, eq, User } from "astro:db";
import jwt from "jsonwebtoken";

import { IS_EMAIL } from "../../utils/regex.utils";
import { SECRET } from "../../constants";
import { getOneHourAfterNow } from "../../utils/date.utils";

// var jwt = require("jsonwebtoken");
export const prerender = false;

export const POST: APIRoute = async ({ cookies, request }) => {
  try {
    console.log("j");
    const body = await request.json();
    if (!body) throw Error("Don't send data");
    console.log("ji");
    if (!IS_EMAIL.test(body.email)) throw Error("Email invalid");
    if (body.password.length !== 8) throw Error("Password invalid");
    console.log("jij");
    // const users = await db.;
    // const user = await db.select().from(User).innerJoin(User, body.email);
    const users = await db
      .select()
      .from(User)
      .where(eq(User.email, body.email))
      .limit(1);
    console.log("jiji", { users });
    const user = users[0];
    //validate user
    if (!user) throw Error("User not found");
    // console.log({ tt });
    console.log("jaja", { user }, { SECRET });
    const accessToken = jwt.sign(user, SECRET, { expiresIn: "1h" });
    console.log("jojo", { accessToken });
    const refreshToken = jwt.sign(user, SECRET, { expiresIn: "7d" });
    console.log("juju", { refreshToken });
    // const accessCookie = `auth_token=${accessToken}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict${
    //   import.meta.env.PROD ? "; Secure" : ""
    // }`;

    // const refreshCookie = `auth_token=${refreshToken}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict${
    //   import.meta.env.PROD ? "; Secure" : ""
    // }`;
    console.log("prepare cookies");
    cookies.set("accessCookies", accessToken, {
      expires: getOneHourAfterNow(),
    });
    cookies.set("refreshCookies", refreshToken, {
      expires: getOneHourAfterNow(),
    });
    // cookies.set(refreshToken, SECRET, { path: "/" });
    // cookies.set("counter", String(counter));

    console.log("send cookies and response with success");
    return new Response(
      JSON.stringify({
        status: 200,
        message: "Congratulations! Access allowed",
        body: { email: body.email },
        // headers: { "Set-Cookie": "token:accessToken ; Path: /" },
      })
    );
  } catch (error) {
    console.error({ error });
    return new Response(
      JSON.stringify({
        message: `${error}`,
      }),
      { status: 500 }
    );
  }
};
