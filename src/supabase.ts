import { createClient } from "@supabase/supabase-js";
import { Database } from "./schema";

const supabaseUrl = "https://qhldrngmafkciecohmxz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobGRybmdtYWZrY2llY29obXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMDg3MzcsImV4cCI6MjAxOTY4NDczN30.IZdl_1hMApYDr3-LRWHiESokMQasQhp8XhjE3KTAmns";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
