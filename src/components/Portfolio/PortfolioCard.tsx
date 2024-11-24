import { Link } from "react-router-dom";
import { PortfolioItem } from "../../types/portfolio";
import {
  Card,
  Thumbnail,
  Content,
  Title,
  Description,
  Tags,
  Tag,
} from "./PortfolioCard.styles";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <Link to={`/portfolio/detail${item.id}`}>
      <Card
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <Thumbnail src={item.thumbnail} alt={item.title} />
        <Content>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <Tags>
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </Content>
      </Card>
    </Link>
  );
};

export default PortfolioCard;