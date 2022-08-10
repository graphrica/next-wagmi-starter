import { GridItem } from "@chakra-ui/react";
import { CardList } from "../cardList";

export function Dashboard() {
  const dataList = [
    {
      id: "1",
      product: "Product 1",
      summary: "This is a summary, can be any length",
      longLine: "Very short, can be any description"
    },
    {
      id: "2",
      product: "Product Two",
      summary:
        "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
      longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos"
    },
    {
      id: "3",
      product: "Long Product",
      summary: "Finalize them summary, hurry, we are close to deadline",
      longLine: "Wow, this is very descriptive! I wonder how long it is"
    }
  ];
  return (
    <><GridItem pl="2" bg="pink.300" area={"nav"}></GridItem>
          <GridItem pl="2" bg="green.300" area={"main"}>
          <CardList cards={dataList}></CardList>
          
          </GridItem></>
  );
}
