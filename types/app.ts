import { Database } from "./supabase";

export type Contact = Pick<
  Database["public"]["Tables"]["contact"]["Row"],
  "name" | "email" | "message" | "env"
>;
