import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const RecentTransactionsCard = styled.div`
  background: ${COLORS.white};
  border-radius: 25px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-height: 275px;
  overflow: scroll;
`;

export const TransactionsHeader = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.rhino};
  margin: 0 0 1.5rem 0;
`;

export const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TransactionItem = styled.li`
  padding: 0.8rem 0;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const TransactionIcon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 12px;
  background: ${(props) => (props.type === "deposit" ? "#E8F5E9" : "#FFEBEE")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 28px;
    height: 28px;
    color: ${(props) => (props.type === "deposit" ? "#4CAF50" : "#F44336")};
  }
`;

export const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransactionTitle = styled.span`
  font-weight: 500;
  color: #333333;
  margin-bottom: 0.25rem;
`;

export const TransactionDate = styled.span`
  font-size: 0.75rem;
  color: #888888;
`;

export const TransactionAmount = styled.span`
  font-weight: 600;
  color: ${(props) => (props.type === "deposit" ? "#4CAF50" : "#F44336")};
`;

export const TransactionDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
