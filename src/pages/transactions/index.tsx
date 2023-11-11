import { Heading } from "@chakra-ui/react";
import Seo from "../../components/elements/seo";

export default function Transactions() {
  const PAGE_TITLE = "Transactions";

  return (
    <>
      <Seo title={PAGE_TITLE} />

      <Heading as="h2" size="lg" mb="space-md">
        {PAGE_TITLE}
      </Heading>
    </>
  );
}
