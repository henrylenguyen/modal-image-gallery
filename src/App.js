import { useState } from "react";
import Modal from "./components/modal/Modal";
import ItemImages from "./components/modal/ItemImages";
import db from "./db";
import styles from "./components/modal/modal.module.scss";
import avatar from './assets/avatar.png'
function App() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [value, setValue] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  // Check or uncheck choose Image
  const handleCheckImage = (data) => {
    if (data.name === selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(data.name);
      setValue(data);
    }
  };

  const handleSubmit = (data) => {
    console.log("file: App.js:26 ~ data:", data);
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src="https://img.thuthuat123.com/uploads/2019/07/12/anh-canh-dep-thien-nhien-eo-bien-navagio_085322165.jpg"
          alt="ảnh"
          style={{ width: "100%", objectFit: "cover" }}
        />

        <button
          style={{
            width: "100px",
            height: "50px",
            background: "green",
            color: "white",
            borderRadius: "5px",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
          onClick={handleOpen}
        >
          Mở modal
        </button>
      </div>
      <Modal
        showModal={open}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        value={value}
        isSelected={value?.name === selectedId}
      >
        <>
          {db?.map((item) => (
            <ItemImages
              key={item?.name}
              img={item?.img}
              name={item?.name}
              editor={item?.editor}
              isSelected={item?.name === selectedId}
              handleCheckImages={handleCheckImage}
            />
          ))}
          <>
            <div className={styles["images-item"]}>
              <label className={styles["choose-file"]}>
                <input type="file" />
              </label>
              <div>
                <div style={{ background: "#CBCCD1" }}>
                  <img
                    src={avatar}
                    alt="default image"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles["images-text"]}>
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Upload an image
                  </h3>
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
        </>
      </Modal>
    </>
  );
}

export default App;
