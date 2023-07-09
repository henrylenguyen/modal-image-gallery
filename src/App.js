import { useEffect, useState } from "react";

import checkTokenExpiration from "./utils/checkToken";
import { useDispatch, useSelector } from "react-redux";
import { checkCollection, createNewCollection } from "./checkCollection";

function App() {
  // Gọi hàm kiểm tra token khi component được tạo
  useEffect(() => {
    checkTokenExpiration();
    dispatch(checkCollection());

  }, []);
  const dispatch = useDispatch();

  const { check } = useSelector((state) => state.sharepoint);
  useEffect(() => {
    console.log("Sắp")
    if (!check) {
      setInterval(() => {
        console.log("chạy")
        dispatch(checkCollection());
      }, 1000 * 60);
    }
    else{
      console.log("Ngừng")
        clearInterval();
    }
    return () => {
      clearInterval();
    };
  }, [check]);
  const created = localStorage.getItem("haveCollection");
  return (
    <>
      {!check && !created && (
        <div>
          <button onClick={() => dispatch(createNewCollection())}>
            Create new collection
          </button>
        </div>
      )}
      {created && <div>Loading</div>}
      {check && (
        <div>
          <button disabled>Create new collection</button>
          <button>Create new document</button>
        </div>
      )}
    </>
  );
}

export default App;
