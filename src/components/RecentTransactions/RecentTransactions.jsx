import {
  RecentTransactionsCard,
  TransactionsHeader,
  TransactionList,
  TransactionItem,
  TransactionInfo,
  TransactionTitle,
  TransactionDate,
  TransactionAmount,
  TransactionIcon,
  TransactionDetail,
} from "./styles";
import { FaCreditCard, FaPaypal, FaUser } from "react-icons/fa";

const RecentTransactions = () => {
  const transactions = [
    {
      title: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-$850",
      type: "withdrawal",
      icon: <FaCreditCard />,
    },
    {
      title: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
      type: "deposit",
      icon: <FaPaypal />,
    },
    {
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      type: "deposit",
      icon: <FaUser />,
    },
  ];

  return (
    <>
      <RecentTransactionsCard>
        <TransactionList>
          {transactions.map((transaction, index) => (
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
