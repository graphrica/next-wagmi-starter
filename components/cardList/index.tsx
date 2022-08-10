import { SimpleGrid } from "@chakra-ui/react";
import Card from "../card";
type Card = {
  id: string;
  product: string;
  summary: string;
  longLine: string;
}
type CardListProps =  {
  cards: Card[]
}

export function CardList(props: CardListProps) {
  const {cards} = props;
  return ( <>
    <SimpleGrid columns={[1, 2, 1, 2]}>
    {cards.map(function (data) {
      const { id, product, summary, longLine } = data;
      return (
        <Card
          key={id}
          id={id}
          product={product}
          summary={summary}
          longLine={longLine}
        />
      );
    })}
     </SimpleGrid>
    </>
  );
}
