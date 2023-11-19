import { useState } from 'react';

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState('monthly');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex border-2 rounded-xl">
      <div
        onClick={() => handleTabChange('monthly')}
        className={`flex-1 p-2 text-center text-xs cursor-pointer rounded-xl ${
          selectedTab === 'monthly' && 'bg-[#e3f1fe]'
        }`}
      >
        Monthly
      </div>
      <div
        onClick={() => handleTabChange('annually')}
        className={`flex-1 p-2 text-center text-xs cursor-pointer rounded-md ${
          selectedTab === 'annually' && 'bg-[#e3f1fe]'
        }`}
      >
        Annually
      </div>
    </div>
  );
};

export default TabComponent;
