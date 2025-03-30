import { FaCreditCard, FaPaypal, FaUser } from "react-icons/fa";

export const TRANSACTIONS = () => {
  return [
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
    {
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      type: "deposit",
      icon: <FaUser />,
    },
    {
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      type: "deposit",
      icon: <FaUser />,
    },
    {
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      type: "deposit",
      icon: <FaUser />,
    },
  ];
};
