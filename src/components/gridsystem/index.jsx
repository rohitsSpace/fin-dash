import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-right: ${(props) => (props.fluid ? 0 : "15px")};
  padding-left: ${(props) => (props.fluid ? 0 : "15px")};
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: ${(props) => (props.noGutters ? 0 : "-15px")};
  margin-left: ${(props) => (props.noGutters ? 0 : "-15px")};
  width: ${(props) => (props.noGutters ? "100%" : "calc(100% + 30px)")};
  ${({ styles }) => styles}
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: ${(props) => (props.noGutters ? 0 : "15px")};
  padding-left: ${(props) => (props.noGutters ? 0 : "15px")};
  flex-shrink: 0;
  min-width: 0;

  ${({ flex }) => flex && `display: flex;`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ order }) => order && `order: ${order};`}

  
  ${(props) =>
    props.xs &&
    `
    flex: 0 0 ${(props.xs / 12) * 100}%;
    max-width: ${(props.xs / 12) * 100}%;
  `}

  @media (min-width: 576px) {
    ${(props) =>
      props.sm &&
      `
      flex: 0 0 ${(props.sm / 12) * 100}%;
      max-width: ${(props.sm / 12) * 100}%;
    `}
  }

  @media (min-width: 768px) {
    ${(props) =>
      props.md &&
      `
      flex: 0 0 ${(props.md / 12) * 100}%;
      max-width: ${(props.md / 12) * 100}%;
    `}
  }

  @media (min-width: 992px) {
    ${(props) =>
      props.lg &&
      `
      flex: 0 0 ${(props.lg / 12) * 100}%;
      max-width: ${(props.lg / 12) * 100}%;
    `}
  }

  @media (min-width: 1200px) {
    ${(props) =>
      props.xl &&
      `
      flex: 0 0 ${(props.xl / 12) * 100}%;
      max-width: ${(props.xl / 12) * 100}%;
    `}
  }
`;

export const Offset = styled.div`
  ${(props) => props.xs && `margin-left: ${(props.xs / 12) * 100}%;`}

  @media (min-width: 576px) {
    ${(props) => props.sm && `margin-left: ${(props.sm / 12) * 100}%;`}
  }

  @media (min-width: 768px) {
    ${(props) => props.md && `margin-left: ${(props.md / 12) * 100}%;`}
  }

  @media (min-width: 992px) {
    ${(props) => props.lg && `margin-left: ${(props.lg / 12) * 100}%;`}
  }

  @media (min-width: 1200px) {
    ${(props) => props.xl && `margin-left: ${(props.xl / 12) * 100}%;`}
  }
`;
