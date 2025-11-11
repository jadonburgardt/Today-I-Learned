import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://thwvfagtrywyesyewrjs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRod3ZmYWd0cnl3eWVzeWV3cmpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxODUyOTIsImV4cCI6MjAwMzc2MTI5Mn0.WrIfO5aSdOPcg5sT6JWvLhxLVtJ8RZ-pGSni_LyOmFo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
