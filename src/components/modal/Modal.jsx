import React, { useState } from "react";
import styles from "./modal.module.scss";
import ItemImages from "./ItemImages";
const Modal = () => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className={styles["images-container"]}>
      <div className={styles["images-wrapper"]}>
        <div className={styles["images-box"]}>
          <div className={styles["images-header"]}>
            <h3 className={styles["images-title"]}>Choose a image</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className={styles["images-body"]}>
            <div className={styles["images-list"]}>
              <ItemImages isCheck={isCheck} />
              <ItemImages />
            </div>
          </div>
          <div className={styles["images-footer"]}>
            <button className={styles["cancel-button"]}>Cancel</button>
            <button className={styles["update-button"]} disabled={!isCheck}>
              Update
            </button>
          </div>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Modal;
