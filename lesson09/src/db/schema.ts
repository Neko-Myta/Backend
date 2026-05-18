import { pgTable, uuid, varchar, boolean, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  done: boolean("done").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),

});