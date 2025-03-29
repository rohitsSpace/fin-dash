import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { COLORS } from "../../constants/colors";
import LogoIcon from "../icons/Logo";

const SidebarContainer = styled.aside`
  width: ${(props) => (props.sidebarOpen ? "250px" : "0")};
  color: ${COLORS.sidebarText};
  overflow: hidden;
  transition: width 0.3s ease;
  position: relative;
  flex-shrink: 0;
  height: 100vh;
  position: sticky;
  top: 0;
  border: 1px solid #e6eff5;

  @media (max-width: 768px) {
    position: fixed;
    width: ${(props) => (props.sidebarOpen ? "100%" : "0")};
    z-index: 100;
    background: #f5f7fa;
  }
`;

const SidebarContent = styled.div`
  width: 250px;
  padding: 20px 0;
  height: 100%;
  overflow-y: auto;
`;

const CloseSidebar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${COLORS.sidebarText};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Logo = styled.div`
  padding: 0 20px 20px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  color: #b1b1b1;
  position: relative;

  &:hover {
    color: #232323;
    svg {
      fill: #232323;
    }
  }

  ${(props) =>
    props.active &&
    `
    color: #232323;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 6px;
      background-color: ${COLORS.activeBorder};
      border-radius: 0px 10px 10px 0px;
    }
  `}
`;

const MenuIcon = styled.span`
  transition: color 0.2s;

  ${MenuItem}:hover & {
    color: ${COLORS.activeBorder};
  }

  ${MenuItem}[active] & {
    color: ${COLORS.activeBorder};
  }
`;

const Sidebar = ({ sidebarOpen, closeSidebar, menuItems, location }) => (
  <SidebarContainer sidebarOpen={sidebarOpen}>
    <CloseSidebar onClick={closeSidebar}>
      <FiX />
    </CloseSidebar>
    <SidebarContent>
      <Logo>
        <LogoIcon color={COLORS.activeBorder} />
        <span>Soar Task</span>
      </Logo>
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            as={Link}
            to={item.path}
            active={location.pathname === item.path}
            onClick={closeSidebar}
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
