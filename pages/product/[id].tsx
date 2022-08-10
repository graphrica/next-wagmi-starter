import {
  GridItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { Details } from "../../components/details";
import { Welcome } from "../../components/welcome";


const Product: NextPage = () => {
  const router = useRouter()
  const { id } = router.query;
  const { isConnected } = useAccount();
  const products = [
    {
      id: "1",
      name: "Better than that old thing",
      pastOwners: ["0x646dB8ffC21e7ddc2B6327448dd9Fa560Df41087", "0x646dB8ffC21e7ddc2B6327448dd9Fa560Df41087"],
      owner: "0x646dB8ffC21e7ddc2B6327448dd9Fa560Df41087",
      price: "19"
    },
    {
      id: "2",
      name: "ULTRA SUPER AMAZING THING",
      pastOwners: ["0x646dB8ffC21e7ddc2B6327448dd9Fa560Df41087", "0x646dB8ffC21e7ddc2B6327448dd9Fa560Df41087"],
      owner: "0x646dB8ffC21e7ddc2B6327448dd9Fa560Df41087",
      price: "5"
    },
  ];

  const card = {
    id: id ? id[0] : "1" ,
    product: "Product 1",
    summary: "This is a summary, can be any length",
    longLine: true,
    state: "AVAILABLE",
    products: products,
    asset: "GRT"
  };
  return (
    <>
          {isConnected ? (
            <Details card={card}></Details>
          ) : (
            <GridItem pl="2" bg="green.300" area={"main"}>
              <Welcome></Welcome>
            </GridItem>
          )}
    </>
  );
};

export default Product;
