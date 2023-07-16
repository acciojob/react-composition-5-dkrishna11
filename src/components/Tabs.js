import React, { useState } from 'react';

const Tabs = ({ tabs, key }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;