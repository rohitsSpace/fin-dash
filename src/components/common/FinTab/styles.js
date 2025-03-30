import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #f4f5f7;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: ${(props) => (props.active ? COLORS.mindShaft : COLORS.shipCoveV2)};
  font-weight: ${(props) => (props.active ? "600" : "500")};
  position: relative;
  transition: color 0.2s ease;
  &:hover {
    color: ${COLORS.mindShaft};
  }

  ${(props) =>
    props.active &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: ${COLORS.mindShaft};
      border-radius: 10px 10px 0 0;
      transition: all 0.3s ease;
    }
  `}
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const TabContent = styled.div`
  padding: 20px 0;
`;
