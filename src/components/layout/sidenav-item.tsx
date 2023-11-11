import { As, Button, Icon, Tooltip } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

type SideNavItemProps = {
  label: string;
  path: string;
  icon: As;
  isMiniSideNav?: boolean;
};

export default function SideNavItem({ label, path, icon, isMiniSideNav = false }: SideNavItemProps) {
  const router = useRouter();
  const isSelected = router.pathname === path;

  return (
    <Tooltip {...(isMiniSideNav && { label })} textTransform="capitalize">
      <Button
        as={NextLink}
        href={path}
        aria-label={label}
        colorScheme="primary"
        leftIcon={<Icon as={icon} boxSize="6" />}
        iconSpacing="space-sm"
        justifyContent="flex-start"
        {...(!isSelected && { variant: "ghost", color: "text.primary" })}
        {...(isMiniSideNav && { iconSpacing: "0", justifyContent: "center", px: "space-xs" })}
        fontWeight="medium"
        textTransform="capitalize"
      >
        {!isMiniSideNav && label}
      </Button>
    </Tooltip>
  );
}
