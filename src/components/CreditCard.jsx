import React from "react";
import styled from "styled-components";
import { ChipCardIcon, MasterCardIcon } from "./icons";

const CardContainer = styled.div`
  border-radius: 25px;
  background: linear-gradient(107deg, #5b5a6f 2.61%, #000 101.2%);
  padding: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 25px;
  background: ${({ variant }) =>
    variant === "dark"
      ? "linear-gradient(107deg, #5B5A6F 2.61%, #000 101.2%)"
      : "#ffffff"};
  color: ${({ variant }) => (variant === "dark" ? "white" : "#333")};
  border: ${({ variant }) =>
    variant === "light" ? "1px solid #eaeaea" : "none"};
`;

const CardTop = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

const CardLabel = styled.span`
  font-size: 12px;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
`;

const CardBalance = styled.h3`
  font-size: 28px;
  margin: 5px 0 0;
  font-weight: 600;
`;

const CardMiddle = styled.div`
  margin-bottom: 3.5rem;
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

const CardNumber = styled.span`
  font-size: 18px;
  letter-spacing: 2px;
  font-family: "Courier New", monospace;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
  margin: -25px;
  border-top: 1px solid #dfeaf2;
  border-radius: 0px 0px 25px 25px;
  background: ${({ variant }) =>
    variant === "dark"
      ? "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%) "
      : "#ffffff"};
`;

const CardInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 5px 0 0;
  text-transform: uppercase;
`;

const InfoGroup = styled.div`
  & > ${CardInfo} {
    margin: 5px 0 0;
  }
`;

const CreditCard = ({ variant = "dark" }) => {
  return (
    <CardContainer variant={variant}>
      <CardTop>
        <div>
          <CardLabel>Balance</CardLabel>
          <CardBalance>$5,756</CardBalance>
        </div>
        <ChipCardIcon variant={variant === "dark" ? "light" : "dark"} />
      </CardTop>

      <CardMiddle>
        <InfoGroup>
          <CardLabel>CARD HOLDER</CardLabel>
          <CardInfo>Eddy Cusuma</CardInfo>
        </InfoGroup>

        <InfoGroup>
          <CardLabel>VALID THRU</CardLabel>
          <CardInfo>12/22</CardInfo>
        </InfoGroup>
      </CardMiddle>

      <CardBottom variant={variant}>
        <CardNumber>3778 ••••••••• 1234</CardNumber>
        <MasterCardIcon variant={variant === "dark" ? "light" : "dark"} />
      </CardBottom>
    </CardContainer>
  );
};

export default CreditCard;
