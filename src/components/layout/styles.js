import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FiSearch } from "react-icons/fi";

export const SidebarContainer = styled.aside`
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

export const SidebarContent = styled.div`
  width: 250px;
  padding: 20px 0;
  height: 100%;
  overflow-y: auto;
`;

export const CloseSidebar = styled.button`
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

export const Logo = styled.div`
  padding: 0 20px 20px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
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

export const MenuIcon = styled.span`
  transition: color 0.2s;

  ${MenuItem}:hover & {
    color: ${COLORS.activeBorder};
  }

  ${MenuItem}[active] & {
    color: ${COLORS.activeBorder};
  }
`;

export const HeaderContainer = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #dcdcde;
  padding: 0 25px;
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

export const HeaderTools = styled.div`
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

export const SearchBar = styled.div`
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
    height: 50px;
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

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1.5rem;
  color: #718ebf;
`;

export const ToolbarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const HeaderIcon = styled.button`
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
      top: .75rem;
      right: .75rem;
      width: .75rem;
      height: .75rem;
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

export const UserProfile = styled.div`
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

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
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

export const Dropdown = styled.div`
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

export const Hamburger = styled.button`
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
