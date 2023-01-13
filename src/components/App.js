import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import react, {useState} from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  function handleClick() { 
    if (isDark === false) {
        setIsDark((isDark) => !isDark);
      }
  }

  function handleDoubleClick(){
    if (isDark === true) {
      setIsDark((isDark) => !isDark);
    }
  } 
  

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick} onDoubleClick={handleDoubleClick}>{isDark ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
