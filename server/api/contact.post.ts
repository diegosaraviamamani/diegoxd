import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";
import { Contact } from "~~/types/app";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<Contact>(event);
    const client = serverSupabaseClient<Database>(event);
    const { status } = await client.from("contact").insert(body);
    if (status !== 201) {
      throw new Error("Error al enviar el formulario");
    }
    return { status: 201 };
  } catch (error) {
    throw error;
  }
});
