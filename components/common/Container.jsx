import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => (props.fluid ? "100%" : "1200px")};
  margin: 0 auto;
  padding: 0 1rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Container = ({ children, fluid, className }) => {
  return (
    <ContainerWrapper fluid={fluid} className={className}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
