import { Box } from "@chakra-ui/react";
import Logo from "../elements/logo";

type SideNavHeaderProps = {
  isMiniSideNav?: boolean;
};

export default function SideNavHeader({ isMiniSideNav }: SideNavHeaderProps) {
  return (
    <Box as="header" p="space-md" {...(isMiniSideNav && { display: "flex", justifyContent: "center", px: "space-xs" })}>
      <Logo iconOnly={isMiniSideNav} />
    </Box>
  );
}
