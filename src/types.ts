type CreateUser = {
  email: string;
  password: string;
};

type GetUser = CreateUser;

type User = {
  id: string;
  role: "seller" | "admin";
  email: string;
  password: string;
};
