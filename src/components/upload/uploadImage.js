import React from "react";
import styles from "./upload.module.css";
import avatar from "./../../assets/avatar.png";
import { message } from "antd";
import { getClient } from "../sharepoint/sharepointClient";
import { v4 as uuidv4 } from "uuid";
const UploadImage = () => {
  
 const handleFileUpload = async (e) => {
   const files = e.target.files[0];
   if (!files?.type.startsWith("image/")) {
     message.error("File format must be photo");
   } else {
     try {
       // Create a SharePoint client instance
       const client = getClient();

       // Specify the SharePoint site URL and the folder path to upload the file to
       const siteUrl = "https://your-sharepoint-site-url";
       const folderPath = "/sites/FamilyTree/Shared Documents/avatar";

       // Read the file data
       const fileData = await readFile(files);

       // Generate a UUID for the file name
       const fileName = `${uuidv4()}.${files.name.split(".").pop()}`;

       console.log("file: uploadImage.js:28 ~ fileName:", fileName);
       // Upload the file to SharePoint with the generated UUID as the file name
      const response = await client.uploadFile(
        siteUrl,
        folderPath,
        fileName,
        fileData
      );
       // Lấy URL của tệp trên SharePoint
       const fileUrl = response.webUrl;

       message.success("Photo upload successful").then(async () => {
         // Gửi URL của tệp về backend
         await sendFileUrlToBackend(fileUrl);
       });
     } catch (error) {
       console.error("Error uploading file to SharePoint:", error);
       message.error("Failed to upload photo");
     }
   }
 };

  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };
  return (
    <>
      <div className={styles["upload-item"]}>
        <label className={styles["choose-file"]}>
          <input
            type="file"
            accept="image/jpeg,image/png,image/jpg"
            onChange={handleFileUpload}
          />
        </label>
        <div>
          <div style={{ background: "#CBCCD1" }}>
            <img
              src={avatar}
              alt="default image"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles["upload-text"]}>
            <h3 className={styles["upload-title"]}>Upload an image</h3>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#6d6d6d"
            style={{ width: "50px" }}
            className={styles["add-image"]}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default UploadImage;
