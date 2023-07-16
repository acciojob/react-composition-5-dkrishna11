
import React, {useState} from "react";
import './../styles/App.css';
import Tabs from "./Tabs"

const App = () => {
  const tabsSet1 = [
    {
      title: 'Tab 1 Set 1',
      content: <div>Content of Tab 1 Set 1</div>,
    },
    {
      title: 'Tab 2 Set 1',
      content: <div>Content of Tab 2 Set 1</div>,
    },
    // Add more tabs as needed for set 1
  ];

  const tabsSet2 = [
    {
      title: 'Tab 1 Set 2',
      content: <div>Content of Tab 1 Set 2</div>,
    },
    {
      title: 'Tab 2 Set 2',
      content: <div>Content of Tab 2 Set 2</div>,
    },
    // Add more tabs as needed for set 2
  ];

  return (
    <div>
      <Tabs tabs={tabsSet1} key="set1" />
      <Tabs tabs={tabsSet2} key="set2" />
      {/* Add more Tabs components with different sets of tabs as needed */}
    </div>
  )
}

export default App
