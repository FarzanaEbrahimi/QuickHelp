import { useState } from "react";
import { supabase } from "../lib/supabase";

function UploadDocument() {
  console.log("UploadDocument rendered");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const uploadFile = async () => {
    if (!file) {
      setMessage("Please select a file");
      return;
    }

    setMessage("Uploading...");

    const filePath = `${Date.now()}-${file.name}`;

    // Upload to Storage
    const { data, error } = await supabase.storage
      .from("support-docs")
      .upload(filePath, file);

    if (error) {
      console.log(error);
      setMessage("Upload failed");
      return;
    }


    // Get public URL
    const { data: urlData } = supabase.storage
      .from("support-docs")
      .getPublicUrl(filePath);


    // Save information in database
    const { error: dbError } = await supabase
      .from("support_documents")
      .insert([
        {
          file_name: file.name,
          file_url: urlData.publicUrl,
        },
      ]);


    if (dbError) {
      console.log(dbError);
      setMessage("File uploaded but database failed");
      return;
    }


    setMessage("✅ File uploaded successfully!");
    setFile(null);
  };
  console.log("Upload button clicked", file);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-xl font-bold mb-4">
        Upload Knowledge Document
      </h2>


      <input
        type="file"
        id="fileInput"
        onChange={(e) => {
            const selectedFile = e.target.files[0];

            console.log("Selected file:", selectedFile);

            setFile(selectedFile);
        }}
        className="mb-4"
        />


      <button
        onClick={uploadFile}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        Upload
      </button>


      <p className="mt-3 text-sm">
        {message}
      </p>

    </div>
  );
}

export default UploadDocument;