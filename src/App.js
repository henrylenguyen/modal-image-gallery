import { useEffect, useState } from "react";
import Modal from "./components/modal/Modal";
import ItemImages from "./components/modal/ItemImages";
import db from "./db";
import UploadImage from "./components/upload/UploadImage";
import checkTokenExpiration from "./utils/checkToken";

function App() {
  // Gọi hàm kiểm tra token khi component được tạo
  useEffect(() => {
    checkTokenExpiration();
  }, []);

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
          <UploadImage />
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
        </>
      </Modal>
    </>
  );
}

export default App;
