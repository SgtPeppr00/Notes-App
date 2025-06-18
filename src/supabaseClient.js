import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://cazucpeacpmqthpryoft.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhenVjcGVhY3BtcXRocHJ5b2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMjQyMzcsImV4cCI6MjA2NTgwMDIzN30.a4zDwsGweU0JtBda_pGjA6QbVFBdCFXaw7RkMoMD90o';

export const supabase = createClient(supabaseUrl, supabaseKey);