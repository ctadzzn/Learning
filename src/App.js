import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./component/about";
import Home from "./component/home";
import Twowaybinding from "./component/twobinding";
import OneTwowaybinding from "./component/onetwobinding";
import OneTwowaybinding2 from "./component/onetwobinding2";
import ToDoList from "./component/todolist";
import Mount from "./component/unmount";
import API from "./component/useeffectwithapi";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/bt1">Two-way binding</Link>
            </li>
            <li>
              <Link to="/bt2">One-Two-way binding</Link>
            </li>
            <li>
              <Link to="/bt3">One-Two-way binding2</Link>
            </li>
            <li>
              <Link to="/bt4">ToDo List</Link>
            </li>
            <li>
              <Link to="/bt5">Mount and Unmount</Link>
            </li>
            <li>
              <Link to="/bt6">useEffect with API</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/bt1" element={<Twowaybinding />}></Route>
          <Route path="/bt2" element={<OneTwowaybinding />}></Route>
          <Route path="/bt3" element={<OneTwowaybinding2 />}></Route>
          <Route path="/bt4" element={<ToDoList />}></Route>
          <Route path="/bt5" element={<Mount />}></Route>
          <Route path="/bt6" element={<API />}></Route>
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
