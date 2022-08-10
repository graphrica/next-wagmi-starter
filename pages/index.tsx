import {
  GridItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";


import { useAccount } from "wagmi";
import { Dashboard } from "../components/dashboard";
import { Welcome } from "../components/welcome";


const Home: NextPage = () => {
  const { isConnected } = useAccount();


  return (
    <>
          {isConnected ? <Dashboard/> :   <GridItem pl="2" bg="green.300"  area={"main"}>
            <Welcome/>
          </GridItem>
          }
    </>
  );
};

export default Home;
