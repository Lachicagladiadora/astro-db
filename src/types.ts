type FormUser = {
  email: string;
  password: string;
};

type User = {
  id: string;
  role: "seller" | "admin";
  email: string;
  password: string;
};
