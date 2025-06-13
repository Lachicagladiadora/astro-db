export const onRequest = (context, next) => {
  const name = context.locals.user.email;
  console.log("Hi! middleware" + name);
  return next();
};
