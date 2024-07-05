import { sql } from "drizzle-orm";
import { text, pgTable, uuid, timestamp } from "drizzle-orm/pg-core";

export const task = pgTable("task", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
