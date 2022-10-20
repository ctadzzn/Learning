import CheckMount from "./MountAndUnmount/checkmount";
import API from "./useeffectwithapi";
import { useState, useEffect } from "react";
function Mount() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  useEffect(() => {});

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle1
      </button>
      {show || <CheckMount />}

      <hr />

      <button
        onClick={() => {
          setShow1(!show1);
        }}
      >
        Toggle2
      </button>
      {show1 || <API />}
    </div>
  );
}
export default Mount;
