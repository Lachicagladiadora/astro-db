import { column, defineDb, NOW } from "astro:db";

// https://astro.build/db/config
export default defineDb({
  tables: {
    columns: {
      id: column.number({ primaryKey: true }),
      author: column.text(),
      content: column.text({ optional: true }),
      published: column.date({ default: NOW }),
    },
  },
});
