import React, { useState } from "react";
import NotificationIcon from "../icons/NotificationIcon";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { SettingsIconOutline } from "../icons";
import { menuItems } from "../../constants/menuItems";
import {
  Avatar,
  Dropdown,
  Hamburger,
  HeaderContainer,
  HeaderIcon,
  HeaderTools,
  SearchBar,
  SearchIcon,
  ToolbarIcons,
  UserProfile,
} from "./styles";
import { COLORS } from "../../constants/colors";

const Header = ({ toggleSidebar, isMobileBreakPoint, closeSidebar }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();

  const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const toggleSettings = () => setSettingsOpen(!settingsOpen);

  const currentPage =
    menuItems().find((item) => item.path === location.pathname) || menuItems[0];

  return (
    <HeaderContainer>
      <Hamburger onClick={toggleSidebar}>
        <FiMenu />
      </Hamburger>
      <h1
        style={{
          fontSize: "1.5rem",
          margin: 0,
          whiteSpace: "nowrap",
          color: `${COLORS.rhino}`,
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
            <NotificationIcon color={COLORS.dodgerBlue} />
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
    </HeaderContainer>
  );
};

export default Header;
