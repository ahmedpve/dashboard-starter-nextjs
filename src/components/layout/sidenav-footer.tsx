import { Avatar, Box, Button, Divider, Icon } from "@chakra-ui/react";
import { TbChevronDown } from "react-icons/tb";
import { users } from "../../data/users";

type SideNavFooterProps = {
  isMiniSideNav?: boolean;
};

export default function SideNavFooter({ isMiniSideNav }: SideNavFooterProps) {
  return (
    <Box as="footer" mt="auto" px="space-md">
      <Divider />
      <Box py="space-sm">
        <Button
          colorScheme="secondary"
          variant="unstyled"
          leftIcon={<Avatar src={users[0].image.url} name={users[0].name} bgColor="secondary.light" />}
          {...(!isMiniSideNav && {
            rightIcon: <Icon as={TbChevronDown} />,
          })}
          h="auto"
          color="inherit"
          fontWeight="medium"
        >
          {!isMiniSideNav && users[0].name}
        </Button>
      </Box>
    </Box>
  );
}
