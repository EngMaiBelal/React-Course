import { useState } from "react";
import './Tabs.css';
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("cleanse");

  const data = {
    cleanse: {
      title: "Cleanse",
      text: "Gently removes dirt, oil, and impurities to keep skin fresh and clean."
    },
    hydrate: {
      title: "Hydrate",
      text: "Deeply moisturizes the skin to keep it soft and healthy."
    },
    repair: {
      title: "Repair",
      text: "Helps skin renew and fix damage for a glowing look."
    },
    protect: {
      title: "Protect",
      text: "Protects skin from sun, pollution and external damage."
    }
  };

  return (
    <div id="tabs">
      {/* Buttons */}
      <div id="tabsButtons">
        <button onClick={() => setActiveTab("cleanse")}>Cleanse</button>
        <button onClick={() => setActiveTab("hydrate")}>Hydrate</button>
        <button onClick={() => setActiveTab("repair")}>Repair</button>
        <button onClick={() => setActiveTab("protect")}>Protect</button>
      </div>

      {/* Content */}
      <div id="tabsContent">
        <h2>{data[activeTab].title}</h2>
        <p>{data[activeTab].text}</p>
      </div>

    </div>
  );
}