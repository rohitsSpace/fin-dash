import { DashboardCard } from "../components/layout/styles";


const DashboardPage = () => (
  <>
    <DashboardCard>
      <h2>Dashboard Overview</h2>
      <p>
        Welcome to your Personal dashboard. Here's what's happening with your
        site.
      </p>
    </DashboardCard>
    <DashboardCard>
      <h3>At a Glance</h3>
      <p>Your site is running smoothly!</p>
    </DashboardCard>
  </>
);

export default DashboardPage;
