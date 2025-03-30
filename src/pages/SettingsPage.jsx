import React from "react";
import * as Yup from "yup";
import FinTab from "../components/common/FinTab/FinTabs";
import styled from "styled-components";
import { DashboardCard } from "../components/common/styles";
import { userData } from "../constants/userData";

const ProfileContainer = styled.div`
  margin: 0 auto;
`;

const SettingsPage = () => {
  const profileSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    dob: Yup.string().required("Required"),
    presentAddress: Yup.string().required("Required"),
    permanentAddress: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        userData.profileImage = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <DashboardCard>
      <ProfileContainer>
        <FinTab
          schema={profileSchema}
          handleSubmit={handleSubmit}
          handleImageChange={handleImageChange}
        />
      </ProfileContainer>
    </DashboardCard>
  );
};

export default SettingsPage;
