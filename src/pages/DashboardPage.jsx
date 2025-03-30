import BalanceHistoryChart from "../components/BalanceHistoryChart/BalanceHistoryChart";
import CreditCard from "../components/CreditCard";
import ExpenseStatisticsChart from "../components/ExpenseStatisticsChart/ExpenseStatisticsChart";
import QuickTransfer from "../components/QuickTransfer/QuickTransfer";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import WeeklyActivityChart from "../components/WeeklyActivityChart/WeeklyActivityChart";
import styled from "styled-components";
import { CARDS_DATA } from "../constants/cardsData";
import { COLORS } from "../constants/colors";
import { Col, Container, Row } from "../components/gridsystem";
import { DashboardCard } from "../components/common/styles";
import { TransactionsHeader } from "../components/RecentTransactions/styles";

export const CardsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const CardsTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.rhino};
  margin: 0;
`;

export const SeeAllButton = styled.button`
  background: none;
  border: none;
  color: ${COLORS.rhino};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(74, 108, 247, 0.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const DashboardPage = () => (
  <Container fluid>
    <Row>
      <Col sm={12} md={8}>
        <CardsHeader>
          <CardsTitle>My Cards</CardsTitle>
          <SeeAllButton>See All</SeeAllButton>
        </CardsHeader>
        <Row
          styles={`
              flex-wrap: nowrap;
              overflow: scroll;
            `}
        >
          {CARDS_DATA.map((card, index) => (
            <Col sm={12} md={6} key={index}>
              <DashboardCard $padding={"0"}>
                <CreditCard variant={card.variant} cardData={card} />
              </DashboardCard>
            </Col>
          ))}
        </Row>
      </Col>
      <Col sm={12} md={4}>
        <TransactionsHeader>Recent Transaction</TransactionsHeader>
        <DashboardCard $padding={"0"}>
          <RecentTransactions />
        </DashboardCard>
      </Col>
    </Row>
    <Row>
      <Col sm={12} md={8}>
        <CardsHeader>
          <CardsTitle>Weekly Activity</CardsTitle>
        </CardsHeader>
        <Row>
          <Col>
            <DashboardCard $padding={"0"}>
              <WeeklyActivityChart />
            </DashboardCard>
          </Col>
        </Row>
      </Col>
      <Col sm={12} md={4}>
        <CardsHeader>
          <CardsTitle>Expense Statistics</CardsTitle>
        </CardsHeader>
        <DashboardCard $padding={"0"}>
          <ExpenseStatisticsChart />
        </DashboardCard>
      </Col>
    </Row>
    <Row>
      <Col sm={12} md={5}>
        <CardsHeader>
          <CardsTitle>Quick Transfer</CardsTitle>
        </CardsHeader>
        <Row>
          <Col>
            <DashboardCard $padding={"0"}>
              <QuickTransfer />
            </DashboardCard>
          </Col>
        </Row>
      </Col>
      <Col sm={12} md={7}>
        <CardsHeader>
          <CardsTitle>Balance History</CardsTitle>
        </CardsHeader>
        <DashboardCard $padding={"0"}>
          <BalanceHistoryChart />
        </DashboardCard>
      </Col>
    </Row>
  </Container>
);

export default DashboardPage;
