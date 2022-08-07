import {useLocation} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import AccountDetailsInfoCmp from "./component/AccountDetailsInfoCmp";
import AccountAdminActivationCmp from "./component/AccountAdminActivationCmp";
import AccountChangeRoleCmp from "./component/AccountChangeRoleCmp";

const AccountDetailsPage = () => {
    const ACCOUNT_DETAILS_ENDPOINT = "/api/accounts";
    const getRequestService = new GetRequestService();
    const {state: accountId} = useLocation();
    const {
        object: account,
        reloadObject: reloadAccount
    } = getRequestService.getObject(`${ACCOUNT_DETAILS_ENDPOINT}/${accountId}`);

    return <PageCmp title="Account details" loaded={account}>
        {
            account && <>
                <AccountDetailsInfoCmp account={account}/>
                <AccountAdminActivationCmp accountId={account.id} reloadAccount={reloadAccount}/>
                <AccountChangeRoleCmp account={account} reloadAccount={reloadAccount} />
            </>
        }
    </PageCmp>
}

export default AccountDetailsPage;
