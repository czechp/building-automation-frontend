import {useLocation} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import AccountDetailsInfoCmp from "./component/AccountDetailsInfoCmp";

const AccountDetailsPage = () => {
    const ACCOUNT_DETAILS_ENDPOINT = "/api/accounts";
    const getRequestService = new GetRequestService();
    const {state: accountId} = useLocation();
    const account = getRequestService.getObject(`${ACCOUNT_DETAILS_ENDPOINT}/${accountId}`);

    return <PageCmp title="Account details" loaded={account}>
        {
            account && <>
                <AccountDetailsInfoCmp account={account}/>
            </>
        }
    </PageCmp>
}

export default AccountDetailsPage;
