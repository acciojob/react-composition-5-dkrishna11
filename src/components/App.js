
import React, {useState} from "react";
import './../styles/App.css';
import Tab from "./Tab"

const App = () => {
  let [table, setTable]=useState("")
  return (
    <div>
        <ul onClick={(eve)=>{setTable(eve.target.value)}}>
          <li>Tab 1</li>
          <li>Tab 2</li>
          <li>Tab 3</li>
        </ul>
        <Tab title={table}></Tab>

        <ul onClick={(eve)=>{setTable(eve.target.value)}}>
          <li>Tab A</li>
          <li>Tab B</li>
          <li>Tab C</li>
        </ul>
        <Tab title={table}></Tab>
    </div>
  )
}

export default App
