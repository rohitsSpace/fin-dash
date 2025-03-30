import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

export const ContentArea = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f5f7fa;
  @media (max-width: 768px) {
    background-color: #fff;
    padding: 25px 0;
  }
`;

export const DashboardCard = styled.div.attrs((props) => ({
  $padding: props.$padding || "1.5rem",
}))`
  background: #ffffff;
  border: 1px solid #dfeaf2;
  border-radius: 1.5rem;
  padding: ${(props) => props.$padding};
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  ${(props) => props.$css || ""}
`;
