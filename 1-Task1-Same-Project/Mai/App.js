
import { useState } from "react";
import "./style.css";

function App() {
  const [section, setSection] = useState("home");

  const renderContent = () => {
    if (section === "home") {
      return (
        <>
          <h2>Home</h2>
          <p>This is home page</p>
        </>
      );
    } else if (section === "about") {
      return (
        <>
          <h2>About</h2>
          <p>About us content</p>
        </>
      );
    } else if (section === "contact") {
      return (
        <>
          <h2>Contact</h2>
          <p>Contact us here</p>
        </>
      );
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <button onClick={() => setSection("home")}>Home</button>
        <button onClick={() => setSection("about")}>About</button>
        <button onClick={() => setSection("contact")}>Contact</button>
      </div>

      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;