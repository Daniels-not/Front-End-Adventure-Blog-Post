import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import LogIn from "./components/LogIn.jsx";
import Index from "./components/Index.jsx";
import DashBoard from "./components/DashBoard.jsx";
import NewContent from "./components/NewContent.jsx";
import { AuthProvider } from "./components/context/AuthContext";
import PrivateRoute  from "./components/PrivateRoute.jsx";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route exact path="/dashboard" element={<DashBoard />} />
                <Route path="/dashboard/new_adventure" element={<NewContent />} />
              </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
