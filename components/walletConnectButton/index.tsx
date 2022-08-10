import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Image
} from "@chakra-ui/react";
import {
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import SelectWalletModal from "./SelectWalletModal";

export type WalletConnectButton = {};

export default function WalletConnectButton({}: WalletConnectButton) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address });
  const { data: ensName } = useEnsName({ address: address });
  const { disconnect } = useDisconnect();

  return (
    <>
      {!isConnected ? (
        <Button
          colorScheme={"green"}
          bg={"green.400"}
          rounded={"full"}
          onClick={onOpen}
          px={6}
          _hover={{
            bg: "green.500",
          }}
        >
          Connect
        </Button>
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {ensName ? ensName : address?.substring(0, 9)}
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Image src={ensAvatar ? ensAvatar:  "ENS Avatar" } alt="ENS Avatar" />
            </MenuItem>
            <MenuItem>
            <Link href={`https://etherscan.io/address/${address}`} isExternal>

                {ensName ? `${ensName} (${address})` : address}
            <ExternalLinkIcon mx='2px' />
            </Link>
            </MenuItem>
            <MenuItem onClick={() => disconnect()}>Disconnect</MenuItem>
          </MenuList>
        </Menu>
      )}

      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </>
  );
}

