import { db, User } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(User).values({
    userId: 1,
    email: "first@th.com",
    userName: "pu",
    password: "123",
  });
}
