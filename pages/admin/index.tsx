import {
  GridItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { LayoutAdmin } from "../../components/layoutAdmin";
import { WelcomeAdmin } from "../../components/welcomeAdmin";


  
const Admin: NextPage = () => {
  const { isConnected } = useAccount();

  return (
    <>
          {isConnected ? (
            <LayoutAdmin></LayoutAdmin>
          ) : (
            <GridItem pl="2" bg="green.300"  area={"main"}>
              <WelcomeAdmin></WelcomeAdmin>
            </GridItem>
          )}
    </>
  );
};

export default Admin;
