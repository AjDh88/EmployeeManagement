import "./App.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import UserData from "./component/UserData";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import CourseDetails from "./component/CourseDetails";

function App({ keycloak }) {
  let roles = keycloak.realmAccess.roles;
  const isAdmin = roles.includes("admin");
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Home/*" element={
            <>
              <Navbar username={keycloak.idTokenParsed.preferred_username} isAdmin={isAdmin}/>
              <Sidebar keycloak={keycloak}>
                <Routes>
                  <Route path="courseDetails" element={<CourseDetails />} />
                  <Route path="*" element={<Navigate to="/Home/courseDetails" replace/>}/>
                  <Route path="userDetails" element={<UserData isAdmin={isAdmin} username={keycloak.idTokenParsed.preferred_username}  />} />
                </Routes>
              </Sidebar>
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
