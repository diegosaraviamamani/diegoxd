import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";

// type Contact = Database["public"]["Tables"]["contact"]["Row"];
// only declare type with required fields
type Contact = Pick<
  Database["public"]["Tables"]["contact"]["Row"],
  "name" | "email" | "message"
>;
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<Contact>(event);
    const client = serverSupabaseClient<Database>(event);
    await client.from("contact").insert(body);
    return { statusCode: 200, statusMessage: "OK" };
  } catch (error) {
    console.error(error);
    throw error;
  }
});
