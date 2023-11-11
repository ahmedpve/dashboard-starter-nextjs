import { Box, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiWalletFill } from "react-icons/ri";
import { appConfig } from "../../config";
import { paths } from "../../paths";

type LogoProps = {
  iconOnly?: boolean;
};

export default function Logo({ iconOnly = false }: LogoProps) {
  return (
    <Box as={NextLink} href={paths.index} display="flex" alignItems="center" gap="space-xs" whiteSpace="nowrap">
      <Icon as={RiWalletFill} boxSize="10" color="secondary.main" />
      {!iconOnly && (
        <Box as="span" color="primary.main" fontFamily="heading" fontSize="2xl" fontWeight="bold">
          {appConfig.title}
        </Box>
      )}
    </Box>
  );
}
