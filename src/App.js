import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import Profile from "./components/Screens/Profile";
import Statistics from "./components/Screens/Statistics";
import Payment from "./components/Screens/Payment";
import Transaction from "./components/Screens/Transaction";
import Settings from "./components/Screens/Settings";
import Support from "./components/Screens/Support";
import Logout from "./components/Screens/Logout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<MainSection />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
