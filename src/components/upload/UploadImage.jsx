import React, { useEffect } from "react";
import styles from "./upload.module.scss";
import avatar from "./../../assets/avatar.png";
import { message } from "antd";

const UploadImage = () => {


  const handleFileUpload = async (e) => {
    // get file attribute on upload
    const file = e.target.files[0];

    // check type of file, if it doesn't start with "image", then show warning
    if (!file?.type.startsWith("image/")) {
      message.error("File format must be photo");
      return;
    }
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
