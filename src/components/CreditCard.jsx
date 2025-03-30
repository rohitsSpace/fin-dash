import React from "react";
import styled from "styled-components";
import { ChipCardIcon, MasterCardIcon } from "./icons";
import { COLORS } from "../constants/colors";

const CardContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background: ${({ variant }) =>
    variant === "dark"
      ? "linear-gradient(107deg, #5B5A6F 2.61%, #000 101.2%)"
      : COLORS.white};
  color: ${({ variant }) => (variant === "dark" ? COLORS.white : "#333")};
  border: ${({ variant }) =>
    variant === "light" ? "1px solid #eaeaea" : "none"};
  border-radius: 1.5rem;
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
  font-size: 1rem;
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
      : COLORS.white};
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

const CreditCard = ({
  variant = "dark",
  cardData = {
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
  },
}) => {
  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(cardData.balance);

  return (
    <CardContainer variant={variant}>
      <CardTop>
        <div>
          <CardLabel>Balance</CardLabel>
          <CardBalance>{formattedBalance}</CardBalance>
        </div>
        <ChipCardIcon variant={variant === "dark" ? "light" : "dark"} />
      </CardTop>

      <CardMiddle>
        <InfoGroup>
          <CardLabel>CARD HOLDER</CardLabel>
          <CardInfo>{cardData.cardHolder}</CardInfo>
        </InfoGroup>

        <InfoGroup>
          <CardLabel>VALID THRU</CardLabel>
          <CardInfo>{cardData.validThru}</CardInfo>
        </InfoGroup>
      </CardMiddle>

      <CardBottom variant={variant}>
        <CardNumber>{cardData.cardNumber}</CardNumber>
        <MasterCardIcon variant={variant === "dark" ? "light" : "dark"} />
      </CardBottom>
    </CardContainer>
  );
};

export default CreditCard;
