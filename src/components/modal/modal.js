import React, { useState } from "react";
import styles from "./modal.module.css";

const Modal = ({
  showModal = false,
  handleCloseModal,
  children,
  handleSubmit,
  value,
  isSelected,
}) => {
  return (
    <>
      <div
        className={`${styles["images-container"]}  ${
          showModal ? styles.open : styles.close
        }`}
      >
        <div className={styles["images-wrapper"]}>
          <div className={styles["images-box"]}>
            <div className={styles["images-header"]}>
              <h3 className={styles["images-title"]}>Choose or upload an image</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={styles.icon}
                onClick={handleCloseModal}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className={styles["images-body"]}>
              <div className={styles["images-list"]}>{children}</div>
            </div>
            <div className={styles["images-footer"]}>
              <button
                className={styles["cancel-button"]}
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className={styles["update-button"]}
                onClick={() => handleSubmit(value)}
                disabled={!isSelected}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div className={styles.overlay} onClick={handleCloseModal}></div>
      </div>
    </>
  );
};

export default Modal;
