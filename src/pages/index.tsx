import { Box } from "@chakra-ui/react";
import Seo from "../components/elements/seo";

export default function Home() {
  const PAGE_TITLE = "Home";

  return (
    <>
      <Seo title={PAGE_TITLE} />

      <Box>Hello</Box>
    </>
  );
}
