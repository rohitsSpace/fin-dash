import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const TransferContainer = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
`;

export const InputContainer = styled.div`
  position: relative;
  flex: 1;
`;

export const AmountInput = styled.input`
  width: 150%;
  padding: 1rem;
  border: 0;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 500;
  color: "#4A6DB2";
  background: #edf1f7;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #6c5ce7;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  background: ${COLORS.mindShaft};
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 1;
  &:hover {
    background: ${COLORS.rhino};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const QuickTransferContainer = styled.div`
  background: white;
  border-radius: 25px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

export const ContactsContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const ContactsList = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  min-width: 90px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  border: 2px solid ${(props) => (props.active ? COLORS.rhino : "transparent")};
  background: ${(props) =>
    props.active ? "rgba(108, 92, 231, 0.1)" : "transparent"};

  &:hover {
    background: #f5f5f5;
    transform: translateY(-3px);
  }
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${(props) => props.color || COLORS.rhino};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 100%;
  overflow: hidden;
`;

export const Name = styled.span`
  font-size: 16px;
  color: ${COLORS.mindShaft};
  font-weight: ${(props) => (props.active ? "600" : "normal")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const Role = styled.span`
  color: ${COLORS.shipCoveV2};
  font-weight: ${(props) => (props.active ? "600" : "normal")};
  font-size: 0.75rem;
`;

export const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.right ? "-1rem" : "auto")};
  left: ${(props) => (props.right ? "auto" : "-1rem")};
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: ${COLORS.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: all 0.2s;
  padding: 0;

  &:hover {
    background: #f5f5f5;
    border-color: ${COLORS.rhino};
    transform: translateY(-50%) scale(1.05);
  }

  svg {
    display: block;
  }
  ${({ styles }) => styles}
`;

export const AmountInputContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

export const Label = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.shipCoveV2};
  margin-bottom: 0.5rem;
`;
