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
      <SideNavItem label="Home" path={paths.index} icon={TbTableOptions} isMiniSideNav={isMiniSideNav} />
      <SideNavItem label="Page 2" path={paths.page2.index} icon={TbBuildingBank} isMiniSideNav={isMiniSideNav} />
      <SideNavItem label="Page 3" path={paths.page3.index} icon={TbListDetails} isMiniSideNav={isMiniSideNav} />
      <SideNavItem label="Page 4" path={paths.page4.index} icon={TbPigMoney} isMiniSideNav={isMiniSideNav} />
      <SideNavItem label="Page 5" path={paths.page5.index} icon={TbReportAnalytics} isMiniSideNav={isMiniSideNav} />
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
          Sub Heading 2
        </Heading>
      )}
      <SideNavItem label="Settings" path={paths.settings.index} icon={TbSettings} isMiniSideNav={isMiniSideNav} />
      <SideNavItem label="Page 7" path={paths.page7.index} icon={TbHelpSquareRounded} isMiniSideNav={isMiniSideNav} />
    </Box>
  );
}
