export const onRequest = (context, next) => {
  // const name = context.locals.user.email;
  // context.locals.user.email;
  // here validate tockens, it's all for the protected
  console.log("Hi! middleware");
  return next();
};
