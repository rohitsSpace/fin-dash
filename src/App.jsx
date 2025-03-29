import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import styled from "styled-components";
import useMobileDetect from "./hooks/useMobileDetect";
import { menuItems } from "./constants/menuItems";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import {
  DashboardPage,
  TransactionPage,
  InvestmentPage,
  AccountsPage,
  SettingsPage,
  CreditCardPage,
  LoansPage,
  ServicesPage,
  MyPrivilegesPage,
} from "./pages";
import { SearchBar, SearchIcon } from "./components/layout/styles";

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

const ContentArea = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const DashboardCard = styled.div`
  background: #ffffff;
  border: 1px solid #dcdcde;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

const DashboardLayout = () => {
  const { isMobile: isMobileBreakPoint } = useMobileDetect();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [searchQuery, setSearchQuery] = useState("");
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
        <Header
          toggleSidebar={toggleSidebar}
          isMobileBreakPoint={isMobileBreakPoint}
          closeSidebar={closeSidebar}
        />
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
        <ContentArea>
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
