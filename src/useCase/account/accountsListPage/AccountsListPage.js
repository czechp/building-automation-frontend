import React from "react";

import PageCmp from "../../../component/PageCmp";
import useGetAccountsRequest from "./hook/useGetAccountsRequest";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../configuration/styledComponents/Table";
import AccountRoleConverter from "../../../service/converter/accountRoleConverter";
import DateConverter from "../../../service/converter/dateConverter";
import useSortingHook from "../../../hooks/useSortingHook";

const AccountsListPage = () => {
    const {sort, setField, toggleAsc} = useSortingHook();
    const accounts = useGetAccountsRequest(sort);


    function sortByField(fieldName) {
        setField(fieldName);
        toggleAsc();
    }

    return <PageCmp title="Accounts list">
        <Table>
            <Thead>
                <Tr>
                    <Th onClick={() => sortByField("id")}>Id:</Th>
                    <Th onClick={() => sortByField("username")}>Username:</Th>
                    <Th onClick={() => sortByField("email")}>Email:</Th>
                    <Th onClick={() => sortByField("accountRole")}>Role:</Th>
                    <Th>Admin confirm:</Th>
                    <Th>Email confirm:</Th>
                    <Th onClick={() => sortByField("creationTimestamp")}>Creation date:</Th>
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
    const accountRoleConverter = new AccountRoleConverter();
    const dateConverter = new DateConverter();

    return <Tr key={`${account.id}-${id}`}>
        <Td key={`id-${account.id}-${id}`}>{account.id}</Td>
        <Td key={`username-${account.id}-${id}`}>{account.username}</Td>
        <Td key={`email-${account.id}-${id}`}>{account.email}</Td>
        <Td key={`role-${account.id}-${id}`}>{accountRoleConverter.toText(account.role)}</Td>
        <Td key={`adminConfirm-${account.id}-${id}`}>{account.adminActivated ? "Yes" : "No"}</Td>
        <Td key={`emailConfirm-${account.id}-${id}`}>{account.emailConfirmed ? "Yes" : "No"}</Td>

        <Td key={`creationDate-${account.id}-${id}`}>{dateConverter.toFullDateTime(account.creationTimestamp)}</Td>
    </Tr>
}
export default AccountsListPage;