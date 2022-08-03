import React from "react";

import PageCmp from "../../../component/PageCmp";
import useGetAccountsRequest from "./request/useGetAccountsRequest";
import {Table, Td, Th, Tr} from "../../../configuration/styledComponents/Table";
import accountRoleConverter from "../../../service/converter/accountRoleConverter";

const AccountsListPage = () => {
    const accounts = useGetAccountsRequest();


    return <PageCmp title="Accounts list">
        <Table>
            <Tr>
                <Th>Id:</Th>
                <Th>Username:</Th>
                <Th>Email:</Th>
                <Th>Role:</Th>
                <Th>Creation date:</Th>
            </Tr>
            {
                accounts.map((a,id)=><AccountRow account={a} id={id} />)
            }
        </Table>
    </PageCmp>
}


const AccountRow = ({account, id}) => {
    return <Tr key={`${account.id}-${id}`}>
        <Td>{account.id}</Td>
        <Td>{account.username}</Td>
        <Td>{account.email}</Td>
        <Td>{accountRoleConverter.toText(account.role)}</Td>
        <Td>{account.creationTimestamp}</Td>
    </Tr>
}
export default AccountsListPage;