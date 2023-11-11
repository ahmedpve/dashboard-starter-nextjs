import {
  BoxProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import SideNavBody from "./sidenav-body";
import SideNavFooter from "./sidenav-footer";
import SideNavHeader from "./sidenav-header";

type SideNavDrawerProps = BoxProps & {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideNavDrawer({ isOpen, onClose, ...boxProps }: SideNavDrawerProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" {...boxProps}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader p="0">
          <SideNavHeader />
        </DrawerHeader>
        <DrawerBody p="0">
          <SideNavBody />
        </DrawerBody>
        <DrawerFooter display="block" p="0">
          <SideNavFooter />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
