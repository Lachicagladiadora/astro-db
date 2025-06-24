import jwt from "jsonwebtoken";
import { SECRET } from "./constants";

export const onRequest = (context, next) => {
  console.log("Hi! middleware");
  const access = context.cookies.get("accessCookies");
  console.log({ access });
  // add refresh
  if (!access) return next();
  const userData = jwt.verify(access.value, SECRET);
  context.locals.user = userData;
  //
  console.log({ userData });
  // here validate tockens, it's all for the protected
  return next();
};
