import { useState, useEffect } from "react";
function CheckMount() {
  const [title, setTitle] = useState("F8-learning");
  useEffect(() => {
    document.title = title;
  });
  return (
    <div>
      <h1>Xin chào lại là mình đây</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}
export default CheckMount;
