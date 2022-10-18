import CheckMount from "./MountAndUnmount/checkmount";
import { useState } from "react";
function Mount() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      {show || <CheckMount />}
    </div>
  );
}
export default Mount;
