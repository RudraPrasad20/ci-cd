// pages/index.tsx or pages/index.js
"use client"
import { useState } from 'react';
import { FileUpload } from '@/components/file-upload'; // Adjust the import path as needed
import Model from '@/components/model';

const HomePage = () => {
  const [fileUrl, setFileUrl] = useState<string>("");

  const handleFileChange = (url?: string) => {
    setFileUrl(url || ""); // Ensure url is a string, defaulting to an empty string if undefined
  };

  return (
    <div>
      <h1>Upload your file</h1>
      <FileUpload value={fileUrl} onChange={handleFileChange} />
      {fileUrl && (
        <div>
          <p>Uploaded File URL: {fileUrl}</p>
        
        </div>
      )}  
      <div>
            <Model title='random title' description='randm desc'/>
          </div>
    </div>
  );
};

export default HomePage;
