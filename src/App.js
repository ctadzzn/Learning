import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./component/about";
import Home from "./component/home";
import Twowaybinding from "./component/twobinding";
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

          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/about" element={<About />}>About</Route>
          <Route path="/bt1" element={<Twowaybinding />}>twowaybinding</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
