import React, { useEffect, useState } from "react";
import {
  AndroidOutlined,
  AppleOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Card, Tabs } from "antd";
import SeacrhComponent from "./SearchComponent";
import FormComponent from "./FormComponent";

export default function FormTabs({ search, add }) {
  const [tabId,setTabId] = useState('1');
  const handleKeyPress = (event) => {
    // Check if Shift key is pressed
    if (event.shiftKey) {
      switch (event.key) {
        case 'A':
          // Change tab to tab with key 'a'
          handleChangeTab('2');
          break;
        case 'S':
          // Change tab to tab with key 's'
          handleChangeTab('1');
          break;
        // Add more cases for other keys if needed
        default:
          break;
      }
    }
  };

  const handleChangeTab = (key) => {
    // Logic to change the tab based on the key
    // For example, update the state or use Ant Design's setActiveKey
    console.log(`Changing tab to ${key}`);
    setTabId(key)
  };

  useEffect(() => {
    // Add event listener for key presses
    window.addEventListener('keydown', handleKeyPress);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  return (
    <Card bordered={false}>
      <Tabs
        defaultActiveKey="1"
        activeKey={tabId}
        onChange={(e)=>handleChangeTab(e)}
        items={[
          {
            key: "1",
            label: search.title,
            children: <SeacrhComponent {...search} />,
            icon: <SearchOutlined />,
          },
          {
            key: "2",
            label: add.title,
            children: <FormComponent {...add} />,
            icon: <EditOutlined />,
          },
        ]}
      />
    </Card>
  );
}
