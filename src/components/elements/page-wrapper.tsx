import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { appConfig } from "../../config";

type PageWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export default function PageWrapper({ title, children }: PageWrapperProps) {
  return (
    <>
      <Head>
        <title>{`${title} | ${appConfig.title}`}</title>
      </Head>
      <Heading as="h1" size="lg" p="space-md">
        {title}
      </Heading>
      <Box p="space-md" pt="0">
        {children}
      </Box>
    </>
  );
}
