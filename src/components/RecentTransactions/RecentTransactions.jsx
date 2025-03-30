import { TRANSACTIONS } from "../../constants/transactions";
import {
  RecentTransactionsCard,
  TransactionList,
  TransactionItem,
  TransactionInfo,
  TransactionTitle,
  TransactionDate,
  TransactionAmount,
  TransactionIcon,
  TransactionDetail,
} from "./styles";

const RecentTransactions = () => {
  return (
    <>
      <RecentTransactionsCard>
        <TransactionList aria-label="Credit cards" role="list">
          {TRANSACTIONS().map((transaction, index) => (
            <TransactionItem
              key={index}
              aria-label={`${
                transaction.type === "deposit" ? "Deposit" : "Withdrawal"
              } of ${transaction.amount.replace("+", "")} on ${
                transaction.date
              } from ${transaction.title}`}
              tabIndex={0}
            >
              <TransactionIcon type={transaction.type}>
                {transaction.icon}
              </TransactionIcon>
              <TransactionDetail>
                <TransactionInfo>
                  <TransactionTitle>{transaction.title}</TransactionTitle>
                  <TransactionDate>{transaction.date}</TransactionDate>
                </TransactionInfo>
                <TransactionAmount type={transaction.type}>
                  {transaction.amount}
                </TransactionAmount>
              </TransactionDetail>
            </TransactionItem>
          ))}
        </TransactionList>
      </RecentTransactionsCard>
    </>
  );
};

export default RecentTransactions;
