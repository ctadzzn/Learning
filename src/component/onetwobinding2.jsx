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

function OneTwowaybinding2() {
  const [checked, setChecked] = useState([]);

  console.log(checked);

  const handekCheck = (id) => {
    //CALL API
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
    console.log({ ids: checked });
  };
  const handelSubmit = () => {
    //CALL API
    console.log({ ids: checked });
  };
  return (
    <div style={{ padding: 32 }}>
      {courses.map((courses) => (
        <div key={courses.id}>
          <input
            type="checkbox"
            checked={checked.includes(courses.id)}
            onChange={() => handekCheck(courses.id)}
          />
          {courses.name}
        </div>
      ))}

      <button onClick={handelSubmit}>Register</button>
    </div>
  );
}
export default OneTwowaybinding2;
