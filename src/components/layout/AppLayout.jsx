import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "./Header";
import RoutesComponent from "../common/RoutesComponent";
import Sidebar from "./Sidebar";
import useDebounce from "../../hooks/useDebounce";
import useMobileDetect from "../../hooks/useMobileDetect";
import { ContentArea, DashboardContainer, MainContent } from "../common/styles";
import { SearchBar, SearchIcon } from "./styles";
import { menuItems } from "../../constants/menuItems";
import { useLocation } from "react-router-dom";

const AppLayout = React.memo(() => {
  const { isMobile: isMobileBreakPoint } = useMobileDetect();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const location = useLocation();

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    setSidebarOpen(!mobile);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), []);
  const closeSidebar = useCallback(
    () => isMobile && setSidebarOpen(false),
    [isMobile]
  );

  const memoizedMenuItems = useMemo(() => menuItems(), []);

  return (
    <DashboardContainer>
      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        menuItems={memoizedMenuItems}
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
          <RoutesComponent debouncedSearchQuery={debouncedSearchQuery} />
        </ContentArea>
      </MainContent>
    </DashboardContainer>
  );
});

export default AppLayout;
