import React from "react";
import PortfolioGrid from "../../components/Portfolio/PortfolioGrid";
import { portfolioItems } from "../../data/portfolioData";
import { Container, Title } from "./Portfolio.styles";

const Portfolio = () => {
  return (
    <Container>
      <Title>포트폴리오</Title>
      <PortfolioGrid items={portfolioItems} />
    </Container>
  );
};

export default Portfolio;
