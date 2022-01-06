import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Rightbar from "./component/rightBar/RightBar";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="flex gap-4 justify-between">
        <Sidebar />
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
