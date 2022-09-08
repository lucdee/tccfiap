
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Profile from "./components/Profile";
import Detail from "./components/Detail";

function App() {
  return (
    <div style={{ width: "100%" }}>
   
    
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
               <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="post/:id/:card/:img"  element={
                  <ProtectedRoute>
                    <Detail />
                  </ProtectedRoute>
                } />
            </Routes>
          </UserAuthContextProvider>

    </div>
  );
}

export default App;
