/* eslint-disable no-unused-vars */
import React from "react";
import Admin from "./Pages/Admin/Admin";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="max-w-screen min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Admin />
    </div>
  );
};

export default App;
