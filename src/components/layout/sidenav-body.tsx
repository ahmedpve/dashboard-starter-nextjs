import { Box, Divider, Heading } from "@chakra-ui/react";
import {
  TbBuildingBank,
  TbHelpSquareRounded,
  TbListDetails,
  TbPigMoney,
  TbReportAnalytics,
  TbSettings,
  TbTableOptions,
} from "react-icons/tb";
import { paths } from "../../paths";
import SideNavItem from "./sidenav-item";

type SideNavBodyProps = {
  isMiniSideNav?: boolean;
};

export default function SideNavBody({ isMiniSideNav }: SideNavBodyProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="space-sm"
      px="space-md"
      py="space-sm"
      {...(isMiniSideNav && { justifyContent: "center" })}
    >
      {!isMiniSideNav && (
        <Heading
          as="h6"
          size="xs"
          color="text.secondary"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          Main Menu
        </Heading>
      )}
      <SideNavItem label="home" path={paths.index} icon={TbTableOptions} isMiniSideNav={isMiniSideNav} />
      <SideNavItem label="accounts" path={paths.accounts.index} icon={TbBuildingBank} isMiniSideNav={isMiniSideNav} />
      <SideNavItem
        label="transactions"
        path={paths.transactions.index}
        icon={TbListDetails}
        isMiniSideNav={isMiniSideNav}
      />
      <SideNavItem label="budget" path={paths.budget.index} icon={TbPigMoney} isMiniSideNav={isMiniSideNav} />
      <SideNavItem
        label="statements"
        path={paths.statements.index}
        icon={TbReportAnalytics}
        isMiniSideNav={isMiniSideNav}
      />
      <Divider />
      {!isMiniSideNav && (
        <Heading
          as="h6"
          size="xs"
          color="text.secondary"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          Account
        </Heading>
      )}
      <SideNavItem label="settings" path={paths.settings.index} icon={TbSettings} isMiniSideNav={isMiniSideNav} />
      <SideNavItem
        label="help & support"
        path={paths.help.index}
        icon={TbHelpSquareRounded}
        isMiniSideNav={isMiniSideNav}
      />
    </Box>
  );
}
