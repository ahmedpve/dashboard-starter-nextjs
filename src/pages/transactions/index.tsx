import { Card, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import PageWrapper from "../../components/elements/page-wrapper";
import { transactions } from "../../data/transactions";

export default function Transactions() {
  return (
    <PageWrapper title="Transactions">
      <Card overflow="hidden" bgColor="bg.clear">
        <TableContainer>
          <Table
            sx={{
              // borderSpacing: "0.1rem",
              // borderCollapse: "separate",
              "& td": { border: "1px", borderColor: "border", py: "space-xs", textTransform: "capitalize" },
              "& th": {
                border: "1px",
                py: "1.5",
                bgColor: "primary.main",
                color: "white",
                fontSize: "inherit",
                fontWeight: "medium",
                textAlign: "center",
                textTransform: "capitalize",
                letterSpacing: "normal",
              },
            }}
          >
            <Thead>
              <Tr>
                <Th rowSpan={2}>Id</Th>
                <Th rowSpan={2}>Date</Th>
                <Th rowSpan={2}>Description</Th>
                <Th colSpan={2} textAlign="center">
                  Debit
                </Th>
                <Th colSpan={2} textAlign="center">
                  Credit
                </Th>
              </Tr>
              <Tr>
                <Th>Account</Th>
                <Th>Amount</Th>
                <Th>Account</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{transaction.id}</Td>
                  <Td fontWeight="medium">
                    {new Date(transaction.date).toLocaleDateString("en", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </Td>
                  <Td maxW="md" whiteSpace="normal">
                    {transaction.description}
                  </Td>
                  <Td>{transaction.debit.account}</Td>
                  <Td isNumeric bgColor="primary.50" fontWeight="medium">
                    {transaction.debit.amount.toLocaleString("en")}{" "}
                    <Text as="span" fontSize="xs">
                      {transaction.debit.currency}
                    </Text>
                  </Td>
                  <Td>{transaction.credit.account}</Td>
                  <Td isNumeric bgColor="primary.50" fontWeight="medium">
                    {transaction.credit.amount.toLocaleString("en")}{" "}
                    <Text as="span" fontSize="xs">
                      {transaction.credit.currency}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </PageWrapper>
  );
}
