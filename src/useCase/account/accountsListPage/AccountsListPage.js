import React from "react";

import PageCmp from "../../../component/PageCmp";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../configuration/styledComponents/Table";
import AccountRoleConverter from "../../../service/converter/accountRoleConverter";
import DateConverter from "../../../service/converter/dateConverter";
import GetRequestService, {useSortingHook} from "../../../service/http/getRequestService";

const AccountsListPage = () => {
    const getRequestService = new GetRequestService();
    const sorting = useSortingHook();
    const {objects:accounts, setSortingField} = getRequestService.getObjectsArray("/api/accounts");


    return <PageCmp title="Accounts list">
        <Table>
            <Thead>
                <Tr>
                    <Th onClick={() => setSortingField("id")}>Id:</Th>
                    <Th onClick={() => setSortingField("username")}>Username:</Th>
                    <Th onClick={() => setSortingField("email")}>Email:</Th>
                    <Th onClick={() => setSortingField("accountRole")}>Role:</Th>
                    <Th>Admin confirm:</Th>
                    <Th>Email confirm:</Th>
                    <Th onClick={() => setSortingField("creationTimestamp")}>Creation date:</Th>
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