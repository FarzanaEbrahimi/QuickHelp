import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ajpqwujxqpxowzrakbwr.supabase.co";

const supabaseKey = "sb_publishable_FzY8IHhlZG8Ya-gddZdrqw_IcjqYsp7";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);