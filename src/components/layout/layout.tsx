import { Box, useDisclosure } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";
import SideNav from "./sidenav";
import SideNavDrawer from "./sidenav-drawer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { isOpen: isMiniSideNav, onToggle: onToggleMiniSideNav } = useDisclosure({
    defaultIsOpen: false,
  });
  const {
    isOpen: isSideNavDrawerOpen,
    onClose: onCloseSideNavDrawer,
    onToggle: onToggleSideNavDrawer,
  } = useDisclosure({ defaultIsOpen: false });

  return (
    <Box display="flex" position="relative" minH="100vh" bgColor="bg.body" color="text.primary">
      <SideNav
        display={{ base: "none", lg: "flex" }}
        flexDirection="column"
        position="fixed"
        top="0"
        zIndex="docked"
        w={isMiniSideNav ? "24" : "72"}
        h="100vh"
        overflow="auto"
        borderRight="1px"
        borderColor="border"
        bgColor="bg.clear"
        transitionDuration="fast"
        isMiniSideNav={isMiniSideNav}
      />
      <SideNavDrawer isOpen={isSideNavDrawerOpen} onClose={onCloseSideNavDrawer} />
      <Box
        display="flex"
        flexDirection="column"
        w="full"
        marginInlineStart={{ base: "0", lg: isMiniSideNav ? "24" : "72" }}
        transitionDuration="fast"
      >
        <Header onToggleMiniSideNav={onToggleMiniSideNav} onToggleSideNavDrawer={onToggleSideNavDrawer} />
        <Box as="main" flexGrow="1" px="space-md" py="space-lg">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
