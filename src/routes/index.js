import { lazy } from "react";

const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const TransactionPage = lazy(() => import("../pages/TransactionPage"));
const AccountsPage = lazy(() => import("../pages/AccountsPage"));
const InvestmentPage = lazy(() => import("../pages/InvestmentPage"));
const CreditCardPage = lazy(() => import("../pages/CreditCardPage"));
const LoansPage = lazy(() => import("../pages/LoansPage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage"));
const MyPrivilegesPage = lazy(() => import("../pages/MyPrivilegesPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));

export const routes = [
  { path: "/", component: DashboardPage },
  { path: "/transactions", component: TransactionPage },
  { path: "/accounts", component: AccountsPage },
  { path: "/investments", component: InvestmentPage },
  { path: "/cc", component: CreditCardPage },
  { path: "/loans", component: LoansPage },
  { path: "/services", component: ServicesPage },
  { path: "/my-privileges", component: MyPrivilegesPage },
  { path: "/setting", component: SettingsPage },
];
