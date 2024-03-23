import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Success from "./components/Success";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#292c35] text-[20px] text-[white]">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
