import { Card, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import PageWrapper from "../../components/elements/page-wrapper";
import { transactions } from "../../data/transactions";

export default function Transactions() {
  return (
    <PageWrapper title="Transactions">
      <Card bgColor="bg.clear">
        <TableContainer>
          <Table
            sx={{
              "& td": { textTransform: "capitalize" },
              "& th": { bgColor: "primary.main", color: "white" },
            }}
          >
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Date</Th>
                <Th>Description</Th>
                <Th colSpan={2} textAlign="center">
                  Debit
                </Th>
                <Th colSpan={2} textAlign="center">
                  Credit
                </Th>
              </Tr>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th>Account</Th>
                <Th isNumeric>Amount</Th>
                <Th>Account</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{transaction.id}</Td>
                  <Td>
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
                  <Td isNumeric>
                    {transaction.debit.amount.toLocaleString("en")}{" "}
                    <Text as="span" fontSize="xs">
                      {transaction.debit.currency}
                    </Text>
                  </Td>
                  <Td>{transaction.credit.account}</Td>
                  <Td isNumeric>
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
