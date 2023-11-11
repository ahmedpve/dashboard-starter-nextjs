import {
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { TbArmchair2, TbShieldCog, TbUserSquareRounded } from "react-icons/tb";
import Seo from "../../components/elements/seo";
import { users } from "../../data/users";

export default function Settings() {
  const PAGE_TITLE = "Settings";

  return (
    <>
      <Seo title={PAGE_TITLE} />

      <Heading as="h2" size="lg" mb="space-md">
        {PAGE_TITLE}
      </Heading>
      <Box display="flex" alignItems="flex-start" gap="space-md">
        <Card
          display={{ base: "none", md: "flex" }}
          flexDirection="column"
          alignItems="flex-start"
          gap="space-md"
          position="sticky"
          top="10vh"
          w="xs"
          p="space-md"
          bgColor="bg.clear"
        >
          <Button
            as={NextLink}
            href="#basic-information"
            variant="outline"
            leftIcon={<Icon as={TbUserSquareRounded} boxSize="6" />}
            justifyContent="flex-start"
            w="full"
          >
            Basic Information
          </Button>
          <Button
            as={NextLink}
            href="#pass-security"
            variant="outline"
            leftIcon={<Icon as={TbShieldCog} boxSize="6" />}
            justifyContent="flex-start"
            w="full"
          >
            Password & Security
          </Button>
          <Button
            as={NextLink}
            href="#account-management"
            variant="outline"
            leftIcon={<Icon as={TbArmchair2} boxSize="6" />}
            justifyContent="flex-start"
            w="full"
          >
            Account Management
          </Button>
        </Card>
        <Box flexGrow="1" display="flex" flexDirection="column" gap="space-md">
          <Card bgColor="bg.clear">
            <Box as="header" p="space-md" bgColor="neutral.100">
              <Heading as="h6" id="basic-information" size="sm">
                Basic Information
              </Heading>
            </Box>
            <Box as="form" display="flex" flexDirection="column" gap="space-md" p="space-md">
              <Box display="flex" alignItems="center" gap="space-md">
                <Avatar src={users[0].image.url} name={users[0].name} size="lg" bgColor="secondary.light" />
                <Box display="flex" flexDirection="column" gap="space-xs">
                  <Text fontWeight="semibold">Profile Image</Text>
                  <Button colorScheme="secondary" size="sm" variant="outline">
                    Update
                  </Button>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" gap="space-md">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel>Currency</FormLabel>
                  <Select>
                    {["EGP", "EUR", "USD"].map((o) => (
                      <option key={o} value={0}>
                        {o}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box display="flex" alignItems="center" gap="space-md">
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel>Confirm Email</FormLabel>
                  <Input />
                </FormControl>
              </Box>
              <Box display="flex" alignItems="center" gap="space-md">
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <Select>
                    {["Male", "Female"].map((o) => (
                      <option key={o} value={0}>
                        {o}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input type="date" />
                </FormControl>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button colorScheme="primary" variant="outline">
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Card>
          <Card bgColor="bg.clear">
            <Box as="header" p="space-md" bgColor="neutral.100">
              <Heading as="h6" id="pass-security" size="sm">
                Password & Security
              </Heading>
            </Box>
            <Box as="form" display="flex" flexDirection="column" gap="space-md" p="space-md">
              <Box display="flex" alignItems="center" gap="space-md">
                <FormControl>
                  <FormLabel>Old Password</FormLabel>
                  <Input />
                </FormControl>
              </Box>
              <Box display="flex" alignItems="center" gap="space-md">
                <FormControl>
                  <FormLabel>New Password</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input />
                </FormControl>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button colorScheme="primary" variant="outline">
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Card>
          <Card bgColor="bg.clear">
            <Box as="header" p="space-md" bgColor="neutral.100">
              <Heading as="h6" id="account-management" size="sm">
                Account Management
              </Heading>
            </Box>
            <Box as="form" display="flex" flexDirection="column" gap="space-md" p="space-md">
              <Box display="flex" justifyContent="space-between">
                <FormLabel>Reset All My Data</FormLabel>
                <Button colorScheme="yellow">Reset</Button>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <FormLabel>Delete My Account</FormLabel>
                <Button colorScheme="red">Delete</Button>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
}
