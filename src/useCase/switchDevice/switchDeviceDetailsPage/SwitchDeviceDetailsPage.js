import {useLocation} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";

const SwitchDeviceDetailsPage = () => {
    const {state: switchDeviceId} = useLocation();

    console.log(switchDeviceId);

    return <PageCmp title="Switch device details"></PageCmp>;
}

export default SwitchDeviceDetailsPage;