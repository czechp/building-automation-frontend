import PageCmp from "../../../component/PageCmp";
import {useLocation} from "react-router-dom";

const AccountDetailsPage = () => {
    const {state:accountId} = useLocation();
    console.log(accountId);
    return <PageCmp title="Account details">
        {accountId}
    </PageCmp>
}

export default AccountDetailsPage;
