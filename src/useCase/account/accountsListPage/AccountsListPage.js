import React from "react";

import PageCmp from "../../../component/PageCmp";
import useGetAccountsRequest from "./request/useGetAccountsRequest";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../configuration/styledComponents/Table";
import accountRoleConverter from "../../../service/converter/accountRoleConverter";
import dateConverter from "../../../service/converter/dateConverter";

const AccountsListPage = () => {
    const accounts = useGetAccountsRequest();


    return <PageCmp title="Accounts list">
        <Table>
            <Thead>
                <Tr>
                    <Th>Id:</Th>
                    <Th>Username:</Th>
                    <Th>Email:</Th>
                    <Th>Role:</Th>
                    <Th>Creation date:</Th>
                </Tr>
            </Thead>
            <Tbody>
            {
                accounts.map((a,id)=><AccountRow key={`row-${a.id}-${id}`} account={a} id={id} />)
            }
            </Tbody>
        </Table>
    </PageCmp>
}


const AccountRow = ({account, id}) => {
    return <Tr key={`${account.id}-${id}`}>
        <Td key={`id-${account.id}-${id}`}>{account.id}</Td>
        <Td key={`username-${account.id}-${id}`}>{account.username}</Td>
        <Td key={`email-${account.id}-${id}`}>{account.email}</Td>
        <Td key={`role-${account.id}-${id}`}>{accountRoleConverter.toText(account.role)}</Td>
        <Td key={`creationDate-${account.id}-${id}`}>{dateConverter.toFullDateTime(account.creationTimestamp)}</Td>
    </Tr>
}
export default AccountsListPage;