import PageCmp from "../../../component/PageCmp";
import {useLocation} from "react-router-dom";
import GetRequestService from "../../../service/http/getRequestService";
import {Audio, Triangle} from "react-loader-spinner";
import colors from "../../../configuration/style/colors";
import LoadingSpinnerCmp from "../../../component/LoadingSpinnerCmp";

const AccountDetailsPage = () => {
    const ACCOUNT_DETAILS_ENDPOINT = "/api/accounts";
    const getRequestService = new GetRequestService();
    const {state:accountId} = useLocation();
    const account = getRequestService.getObject(`${ACCOUNT_DETAILS_ENDPOINT}/${accountId}`);

    return <PageCmp title="Account details">
        <LoadingSpinnerCmp />
    </PageCmp>
}

export default AccountDetailsPage;
