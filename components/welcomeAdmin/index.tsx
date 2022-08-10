import { Box, Text, Heading, Stack, Container, ListItem, List } from "@chakra-ui/react";

export function WelcomeAdmin() {
  
  return (
    <Container maxW={"full"}>
    <Stack
      as={Box}
      textAlign={"center"}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 8, md: 14 }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        Welcome to Next WAGMI Starter 🦀👑 <br />
        <Text color={"green.400"}>
          Next, Wagmi, Chakra, Typescript
        </Text>
      </Heading>
      <List listStyleType="none" alignItems={"start"} fontSize={"2xl"}>
        <ListItem>{`Click 'Connect' to connect your wallet.`}</ListItem>
      </List>

      <Stack
        direction={"column"}
        spacing={3}
        align={"center"}
        alignSelf={"center"}
        position={"relative"}
      >
      </Stack>
    </Stack>
  </Container>
  );
}
