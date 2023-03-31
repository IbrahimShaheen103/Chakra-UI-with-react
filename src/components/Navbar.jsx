import {
  Flex,
  Heading,
  Icon,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { BellIcon, UnlockIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const toast = useToast();
  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">
        Dojo Tasks
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar src="/img/mario.png">
          <AvatarBadge width={"1.4em"} bg={"salmon"}>
            <BellIcon />
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button
          colorScheme="purple"
          onClick={() =>
            toast({
              title: "Logged out.",
              description: "Successfully logged out",
              duration: 10000,
              isClosable: true,
              position: "top",
              status: "success",
              icon: <UnlockIcon />,
            })
          }
        >
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
