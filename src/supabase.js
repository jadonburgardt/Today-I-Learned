import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qarpmihabntptipkoxhq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcnBtaWhhYm50cHRpcGtveGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NDA5ODgsImV4cCI6MjA3ODIxNjk4OH0.SxSZhQw2nofbRpM2xqLtxxdQR39c8Rp7RuZGYtfFxDc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
