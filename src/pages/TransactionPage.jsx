import { DashboardCard } from "../components/layout/styles";

const TransactionPage = () => (
  <>
    <DashboardCard>
      <h2>Transactions</h2>
      <p>Manage all your Transactions here.</p>
    </DashboardCard>
    <DashboardCard>
      <h3>Recent Transactions</h3>
      <p>No transactions found.</p>
    </DashboardCard>
  </>
);
export default TransactionPage;
