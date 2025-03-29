import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import { FiSearch, FiMenu } from "react-icons/fi";
import Sidebar from "./components/layout/Sidebar";
import { menuItems } from "./constants/menuItems";
import { SettingsIconOutline } from "./components/icons";
import NotificationIcon from "./components/icons/NotificationIcon";
import useMobileDetect from "./hooks/useMobileDetect";

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const Header = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #dcdcde;
  padding: 0 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: 100px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  gap: 20px;
  @media (max-width: 768px) {
    border-bottom: unset;
    padding: 0;
    border: 0;
    box-shadow: unset;
  }
  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const HeaderTools = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
  @media (max-width: 480px) {
    gap: 15px;
    margin: unset;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 250px;
  transition: width 0.3s ease;
  &:focus-within {
    width: 300px;
  }

  input {
    width: 100%;
    height: 32px;
    padding: 8px 10px 8px 3rem;
    border: 1px solid #f5f7fa;
    border-radius: 40px;
    background-color: #f5f7fa;
    transition: all 0.2s;
    color: #50575e;

    &:focus {
      background-color: #fff;
      border-color: #2271b1;
      box-shadow: 0 0 0 1px #2271b1;
      outline: none;
    }
    &::placeholder {
      color: #718ebf;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: #718ebf;
    }

    &::-ms-input-placeholder {
      color: #718ebf;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1.5rem;
  color: #718ebf;
`;

const ToolbarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const HeaderIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 5px;
  color: #50575e;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #f5f7fa;
  border-radius: 50%;

  &:hover {
    color: #2271b1;
    background-color: #f0f0f1;
  }

  ${(props) =>
    props.hasNotification &&
    `
    &::after {
      content: '';
      position: absolute;
      top: 12px;
      right: 12px;
      width: 8px;
      height: 8px;
      background-color: #d63638;
      border-radius: 50%;
      border: 2px solid #fff;
    }
  `}

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 756px) {
    width: 32px;
    height: 32px;
    svg {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
  padding: 4px 6px;
  border-radius: 50%;
  &:hover {
    background-color: #f0f0f1;
  }
`;

const Avatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const UserName = styled.span`
  white-space: nowrap;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background: #fff;
  border: 1px solid #dcdcde;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 100;
  display: ${(props) => (props.open ? "block" : "none")};

  a {
    display: block;
    padding: 10px 15px;
    color: #1d2327;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      background-color: #f6f7f7;
      color: #2271b1;
    }
  }

  @media (max-width: 480px) {
    min-width: 180px;
  }
`;

const DashboardCard = styled.div`
  background: #ffffff;
  border: 1px solid #dcdcde;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 15px;
  display: none;

  @media (max-width: 768px) {
    padding: 0;
    display: flex;
  }
`;

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

const InvestmentPage = () => (
  <DashboardCard>
    <h2>Investment</h2>
    <p>All your investments appear here.</p>
  </DashboardCard>
);

const AccountsPage = () => (
  <DashboardCard>
    <h2>Accounts</h2>
    <p>Manage your accounts here.</p>
  </DashboardCard>
);

const SettingsPage = () => (
  <DashboardCard>
    <h2>Settings</h2>
    <p>Configure your site settings.</p>
  </DashboardCard>
);

const CreditCardPage = () => (
  <DashboardCard>
    <h2>Credit Card</h2>
    <p>Manage your Credit Cards.</p>
  </DashboardCard>
);

const LoansPage = () => (
  <DashboardCard>
    <h2>Loans</h2>
    <p>Manage Loans and their status.</p>
  </DashboardCard>
);

const ServicesPage = () => (
  <DashboardCard>
    <h2>Services</h2>
    <p>Manage opted Services.</p>
  </DashboardCard>
);

const MyPrivilegesPage = () => (
  <DashboardCard>
    <h2>My Privileges</h2>
    <p>Manage My Privileges.</p>
  </DashboardCard>
);

const DashboardLayout = () => {
  const { isMobile: isMobileBreakPoint } = useMobileDetect();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => isMobile && setSidebarOpen(false);
  const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const toggleSettings = () => setSettingsOpen(!settingsOpen);

  const currentPage =
    menuItems().find((item) => item.path === location.pathname) || menuItems[0];

  return (
    <DashboardContainer>
      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        menuItems={menuItems()}
        location={location}
        toggleSidebar={toggleSidebar}
      />
      <MainContent>
        <Header>
          <Hamburger onClick={toggleSidebar}>
            <FiMenu />
          </Hamburger>
          <h1
            style={{
              fontSize: "1.5rem",
              margin: 0,
              whiteSpace: "nowrap",
              color: "#343C6A",
            }}
          >
            {currentPage.id === "dashboard" ? "Overview" : currentPage.label}
          </h1>

          <HeaderTools>
            {!isMobileBreakPoint && (
              <SearchBar>
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search for something"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </SearchBar>
            )}

            <ToolbarIcons>
              <HeaderIcon title="Settings" onClick={toggleSettings}>
                <SettingsIconOutline />
                <Dropdown open={settingsOpen}>
                  <Link
                    to="/setting"
                    onClick={() => {
                      setSettingsOpen(false);
                      closeSidebar();
                    }}
                  >
                    General Settings
                  </Link>
                  <a href="#privacy">Privacy</a>
                </Dropdown>
              </HeaderIcon>

              <HeaderIcon
                title="Notifications"
                hasNotification
                onClick={toggleNotifications}
              >
                <NotificationIcon color="#396AFF" />
                <Dropdown open={notificationsOpen}>
                  <a href="#notification1">Notification 1</a>
                  <a href="#notification2">Notification 2</a>
                  <a href="#notification3">Notification 3</a>
                  <a href="#all-notifications">View all notifications</a>
                </Dropdown>
              </HeaderIcon>

              <UserProfile onClick={toggleUserDropdown}>
                <Avatar>
                  <img alt="user icon" src="/assets/user.png" loading="lazy" />
                </Avatar>
                <Dropdown open={userDropdownOpen}>
                  <a href="#profile">Your Profile</a>
                  <a href="#account-settings">Account Settings</a>
                  <a href="#logout">Log Out</a>
                </Dropdown>
              </UserProfile>
            </ToolbarIcons>
          </HeaderTools>
        </Header>
        {isMobileBreakPoint && (
          <SearchBar>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for something"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBar>
        )}
        <ContentArea
          onClick={() => {
            closeSidebar();
            setUserDropdownOpen(false);
            setNotificationsOpen(false);
            setSettingsOpen(false);
          }}
        >
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/accounts" element={<AccountsPage />} />
            <Route path="/investments" element={<InvestmentPage />} />
            <Route path="/cc" element={<CreditCardPage />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/my-privileges" element={<MyPrivilegesPage />} />
            <Route path="/setting" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ContentArea>
      </MainContent>
    </DashboardContainer>
  );
};

const App = () => {
  return (
    <Router>
      <DashboardLayout />
    </Router>
  );
};

export default App;
