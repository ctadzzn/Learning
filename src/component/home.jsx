import { useState } from "react";
function Home() {
  const orders = [100, 200, 300];
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    console.log(total);
    return total;
  });

  const handelToggle = () => {
    //setCounter(counter +1)
    setCounter((prevState) => prevState + 1);
  };

  const [infor, setInfor] = useState({
    name: "Cao Tuấn Anh",
    age: "18",
    address: "Ha Noi, VN",
  });

  const handelInfor = () => {
    // setInfor({
    //   ...infor,
    //   bio: 'Yeu mau hong ^^!'
    // })

    setInfor((prev) => {
      // logic
      return {
        ...prev,
        bio: "Yeu mau hong ^^!",
      };
    });
  };
  console.log(infor);
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handelToggle}>Toggle</button>
      <hr style={{ height: 5 }}></hr>
      <h1>{JSON.stringify(infor)}</h1>
      <button onClick={handelInfor}>Change Information</button>
    </div>
  );
}
export default Home;