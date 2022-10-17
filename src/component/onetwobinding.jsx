import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Java",
  },
  {
    id: 3,
    name: ".NET",
  },
];

function OneTwowaybinding() {
  const [name, setName] = useState("");
  const [checked, setchecked] = useState();
  console.log(name);
  console.log(checked);

  const handelSubmit = () => {
    //CALL API
    console.log({ id: checked });
  };
  return (
    <div style={{ padding: 32 }}>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={() => setName("Nguyen Van BBB")}>Change</button>

      <hr />

      {courses.map((courses) => (
        <div key={courses.id}>
          <input
            type="radio"
            checked={checked === courses.id}
            onChange={() => setchecked(courses.id)}
          />

          {courses.name}
        </div>
      ))}

      <button onClick={handelSubmit}>Register</button>
    </div>
  );
}
export default OneTwowaybinding;
