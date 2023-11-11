import { Box, BoxProps } from "@chakra-ui/react";
import SideNavBody from "./sidenav-body";
import SideNavFooter from "./sidenav-footer";
import SideNavHeader from "./sidenav-header";

type SideNavProps = BoxProps & {
  isMiniSideNav: boolean;
};

export default function SideNav({ isMiniSideNav, ...boxProps }: SideNavProps) {
  return (
    <Box as="nav" {...boxProps}>
      <SideNavHeader isMiniSideNav={isMiniSideNav} />
      <SideNavBody isMiniSideNav={isMiniSideNav} />
      <SideNavFooter isMiniSideNav={isMiniSideNav} />
    </Box>
  );
}
