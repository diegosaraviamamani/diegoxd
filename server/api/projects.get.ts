import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  try {
    const client = serverSupabaseClient<Database>(event);
    const { data: projects, error } = await client.from("projects").select("*");
    if (error) throw error;
    return projects.map((project) => ({
      ...project,
      tags: project.tags.split(","),
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
});
