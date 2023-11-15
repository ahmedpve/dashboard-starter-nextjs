import { Box } from "@chakra-ui/react";
import PageWrapper from "../components/elements/page-wrapper";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <PageWrapper title="Home">
      <Box>Hello</Box>
    </PageWrapper>
  );
}

Home.getLayout = function (page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
