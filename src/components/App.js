import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  let [darkMode, setDarkMode] = useState(false);
  const appClass = darkMode ? "App dark" : "App light"

  function toggleDarkMode() {
    darkMode? setDarkMode(false) : setDarkMode(true);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={ toggleDarkMode }>
          Dark Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
