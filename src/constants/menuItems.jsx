import {
  HomeIcon,
  TransactionIcon,
  AccountsIcon,
  InvestmentsIcon,
  CreditCardsIcon,
  LoansIcon,
  ServicesIcon,
  SettingsIcon,
  MyPrivilegesIcon,
} from "../components/icons";

export const menuItems = () => {
  return [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      id: "transactions",
      label: "Transactions",
      icon: <TransactionIcon />,
      path: "/transactions",
    },
    {
      id: "accounts",
      label: "Accounts",
      icon: <AccountsIcon />,
      path: "/accounts",
    },
    {
      id: "investments",
      label: "Investments",
      icon: <InvestmentsIcon />,
      path: "/investments",
    },
    { id: "cc", label: "Credit Cards", icon: <CreditCardsIcon />, path: "/cc" },
    { id: "loans", label: "Loans", icon: <LoansIcon />, path: "/loans" },
    {
      id: "services",
      label: "Services",
      icon: <ServicesIcon />,
      path: "/services",
    },
    {
      id: "my-privileges",
      label: "My Privileges",
      icon: <MyPrivilegesIcon />,
      path: "/my-privileges",
    },
    {
      id: "setting",
      label: "Setting",
      icon: <SettingsIcon />,
      path: "/setting",
    },
  ];
};
