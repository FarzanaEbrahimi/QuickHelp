import { supabase } from "./supabase";

async function testConnection() {
  const { data, error } = await supabase
    .from("support_documents")
    .select("*");

  if (error) {
    console.log("Supabase Error:", error.message);
  } else {
    console.log("Connected:", data);
  }
}

testConnection();