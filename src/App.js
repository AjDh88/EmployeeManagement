import "./App.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import UserData from "./component/UserData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseDetails from "./component/CourseDetails";
import Home from "./component/Home";

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Sidebar>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/userDetails" element={<UserData />} />
              <Route exact path="/courseDetails" element={<CourseDetails />} />
            </Routes>
          </Sidebar>
        </Router>
    </>
  );
}

export default App;
