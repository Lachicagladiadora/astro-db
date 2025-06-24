import jwt from "jsonwebtoken";
import { SECRET } from "./constants";
import { getOneHourAfterNow } from "./utils/date.utils";

export const onRequest = (context, next) => {
  console.log("Hi! middleware");
  const access = context.cookies.get("accessCookies");
  const refresh = context.cookies.get("refreshCookies");
  console.log({ access, refresh });
  if (!access) return next();
  if (!refresh) return next();
  const userDataAccess = jwt.verify(access.value, SECRET);
  const userDataRefresh = jwt.verify(refresh.value, SECRET);
  if (!userDataAccess) {
    const accessToken = jwt.sign({ userId: userDataRefresh.userId }, SECRET, {
      expiresIn: "1h",
    });
    context.cookies.set("accessCookies", accessToken, {
      expires: getOneHourAfterNow(),
    });
    context.locals.user = userDataAccess.userId;
    return next();
  }
  context.locals.user = userDataAccess;
  //
  console.log({ userDataAccess, userDataRefresh });
  // here validate tockens, it's all for the protected
  return next();
};
