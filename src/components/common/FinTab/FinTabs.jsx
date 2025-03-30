import { useState } from "react";
import EditProfileForm from "../EditProfileForm/EditProfileForm";
import { Tab, TabContent, Tabs } from "./styles";
import { TABS } from "../../../constants/tabs";

const FinTab = ({ schema, handleSubmit, handleImageChange }) => {
  const [activeTab, setActiveTab] = useState("edit-profile");

  const handleKeyDown = (event, index) => {
    let newIndex = index;
    if (event.key === "ArrowRight") {
      newIndex = (index + 1) % TABS.length;
    } else if (event.key === "ArrowLeft") {
      newIndex = (index - 1 + TABS.length) % TABS.length;
    } else if (event.key === "Home") {
      newIndex = 0;
    } else if (event.key === "End") {
      newIndex = TABS.length - 1;
    }
    setActiveTab(TABS[newIndex].id);
  };
  return (
    <>
      <Tabs role="tablist" aria-label="Settings Tabs">
        {TABS.map(({ id, label }, index) => (
          <Tab
            key={id}
            role="tab"
            id={`tab-${id}`}
            tabIndex={activeTab === id ? 0 : -1}
            aria-selected={activeTab === id}
            active={activeTab === id}
            aria-controls={`panel-${id}`}
            onClick={() => setActiveTab(id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {label}
          </Tab>
        ))}
      </Tabs>

      <TabContent>
        {activeTab === "edit-profile" && (
          <EditProfileForm
            schema={schema}
            handleSubmit={handleSubmit}
            handleImageChange={handleImageChange}
          />
        )}

        {activeTab === "preferences" && (
          <div>
            <h2>Preferences Content</h2>
            <p>This is where preferences would go</p>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h2>Security Content</h2>
            <p>This is where security settings would go</p>
          </div>
        )}
      </TabContent>
    </>
  );
};

export default FinTab;
