import { useState } from "react";

function Twowaybinding() {

    const gifts = [
        'CPU i9',
        'Ram 32 GB',
        'Keyboard'
    ]
    const [qua, setQua] = useState('Chưa có quà')

    const GiveForMe = () =>{
        const index = Math.floor(Math.random() * gifts.length)  

        console.log(gifts[index]);

        setQua(gifts[index]);
    }
    
  return (
    <div style={{ padding: 32 }}>
      <h1>{qua}</h1>
      <button onClick={GiveForMe}>Lấy thưởng</button>
    </div>
  );
}
export default Twowaybinding;
