import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config
const User = defineTable({
  columns: {
    userId: column.text({ primaryKey: true }),
    // userName: column.text(),
    email: column.text({ unique: true }),
    role: column.text(),
    password: column.text(),
  },
  indexes: [{ on: ["userId"], unique: true }],
});
export default defineDb({
  tables: { User },
});
//   tables: {
//     columns: {
// id: column.number({ primaryKey: true }),
// userName: column.text(),
// email: column.text({ unique: true }),
// password: column.text(),
//     },
//   },
// });
