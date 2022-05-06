import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
const content = [
  {
    tab: "setion 1",
    content: "I`m the content of the section 1",
  },
  {
    tab: "setion 2",
    content: "I`m the content of the section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };

  //changeItem 은 상태를 업데이트 시켜줌
};
const useTab = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((setion, index) => (
        <button onClick={() => changeItem(index)}>{setion.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default useTab;
