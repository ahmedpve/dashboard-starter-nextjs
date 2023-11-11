import { Box, Button, Icon, IconButton } from "@chakra-ui/react";
import { TbBookmarksFilled, TbMenu2, TbPlus } from "react-icons/tb";

type HeaderProps = {
  onToggleMiniSideNav: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onToggleSideNavDrawer: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Header({ onToggleMiniSideNav, onToggleSideNavDrawer }: HeaderProps) {
  return (
    <Box
      as="header"
      display="flex"
      gap="space-md"
      position="sticky"
      top="0"
      zIndex="sticky"
      borderBottom="1px"
      borderColor="border"
      bgColor="bg.opaque"
      px="space-md"
      py="space-sm"
    >
      <IconButton
        aria-label="Toggle side nav"
        icon={<Icon as={TbMenu2} boxSize="6" />}
        display={{ base: "none", lg: "flex" }}
        onClick={onToggleMiniSideNav}
      />
      <IconButton
        aria-label="Toggle side drawer"
        icon={<Icon as={TbMenu2} boxSize="6" />}
        display={{ base: "flex", lg: "none" }}
        onClick={onToggleSideNavDrawer}
      />
      <Box display={{ base: "none", sm: "flex" }} gap="space-md" marginInlineStart="auto">
        <Button colorScheme="primary" variant="outline" leftIcon={<Icon as={TbBookmarksFilled} />}>
          Add Account
        </Button>
        <Button colorScheme="primary" leftIcon={<Icon as={TbPlus} />}>
          New Transaction
        </Button>
      </Box>
    </Box>
  );
}
