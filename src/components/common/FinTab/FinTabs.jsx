import { useState } from "react";
import EditProfileForm from "../EditProfileForm/EditProfileForm";
import { Tab, TabContent, Tabs } from "./styles";

const FinTab = ({ schema, handleSubmit, handleImageChange }) => {
  const [activeTab, setActiveTab] = useState("edit-profile");
  return (
    <>
      <Tabs>
        <Tab
          active={activeTab === "edit-profile"}
          onClick={() => setActiveTab("edit-profile")}
        >
          Edit Profile
        </Tab>
        <Tab
          active={activeTab === "preferences"}
          onClick={() => setActiveTab("preferences")}
        >
          Preferences
        </Tab>
        <Tab
          active={activeTab === "security"}
          onClick={() => setActiveTab("security")}
        >
          Security
        </Tab>
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
