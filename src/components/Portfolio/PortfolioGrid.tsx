import { PortfolioItem } from "../../types/portfolio";
import PortfolioCard from "./PortfolioCard";
import { Grid } from "./PortfolioGrid.styles";

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const PortfolioGrid = ({ items }: PortfolioGridProps) => {
  return (
    <Grid>
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default PortfolioGrid;