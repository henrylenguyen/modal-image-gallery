import styles from "./modal.module.scss";
import React, { useState } from "react";

const ItemImages = ({
  img = "https://thuthuatnhanh.com/wp-content/uploads/2018/07/hinh-nen-4k-dep-cho-may-tinh-tivi-smartphone.jpg",
  isCheck = false,
  name = "Hello-word",
  editor = "Titan technology corporation",
}) => {
  return (
    <>
      <button className={styles["images-item"]}>
        <div>
          <img src={img} alt={name} />
          <div className={styles["images-text"]}>
            <h3 className={styles["images-name"]}>{name}</h3>
            <span className={styles["images-editor"]}>Edit by - {editor}</span>
          </div>
        </div>
        {isCheck && (
          <div className={styles["isCheck"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              className={styles["check"]}
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </button>
    </>
  );
};

export default ItemImages;