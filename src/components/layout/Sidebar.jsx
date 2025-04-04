import React from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { COLORS } from "../../constants/colors";
import LogoIcon from "../icons/LogoIcon";
import {
  CloseSidebar,
  Logo,
  MenuIcon,
  MenuItem,
  MenuList,
  SidebarContainer,
  SidebarContent,
} from "./styles";

const Sidebar = ({ sidebarOpen, closeSidebar, menuItems, location }) => (
  <SidebarContainer sidebarOpen={sidebarOpen}>
    <CloseSidebar onClick={closeSidebar}>
      <FiX />
    </CloseSidebar>
    <SidebarContent>
      <Logo>
        <LogoIcon color={COLORS.mindShaft} />
        <span>Soar Task</span>
      </Logo>
      <MenuList role="menu" aria-label="Main navigation">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            as={Link}
            to={item.path}
            active={location.pathname === item.path}
            onClick={closeSidebar}
            role="menuitem"
            tabIndex={0}
          >
            <MenuIcon>{item.icon}</MenuIcon>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </SidebarContent>
  </SidebarContainer>
);

export default Sidebar;
