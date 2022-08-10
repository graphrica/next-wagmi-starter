import {
  Box,
  GridItem,
  List,
  ListItem,
  Text,
  Stack,
  Divider,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type Product = {
  id: string;
  name: string;
  pastOwners: string[];
  owner: string;
  price: string;
};
type CardDetails = {
  id: string;
  product: string;
  summary: string;
  longLine: boolean;
  state: string;
  asset: string;
  products: Product[];
};



type DetailsProps = {
  card: CardDetails;
};

export function Details(props: DetailsProps) {
  const {
    card: {
      product,
      products,
      state,
    },
  } = props;

  return (
    <>
      <GridItem pl="2" bg="pink.300" area={"nav"}></GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <Stack
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 4, md: 4 }}
        >
          <List spacing={3}>
            <ListItem>
              <Text fontSize={"5xl"}>{product}</Text>
            </ListItem>
            <ListItem>State : {state}</ListItem>
            {/* You can also use custom icons from react-icons */}
          </List>
          <Divider orientation="horizontal" />
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Products that are active</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Owner</Th>
                  <Th>Past Owners</Th>
                  <Th isNumeric>Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((product, index) => {
                  return (
                    <Tr key={index}>
                      <Td>{product.name}</Td>
                      <Td>{product.owner.substring(0, 7)}</Td>
                      <Td>
                        {product.pastOwners
                          .map((member) => {
                            return member.substring(0, 7);
                          })
                          .join(",")}
                      </Td>
                      <Td isNumeric>{product.price} GRT</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </GridItem>
    </>
  );
}
