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
        <TransactionList>
          {TRANSACTIONS().map((transaction, index) => (
            <TransactionItem key={index}>
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
