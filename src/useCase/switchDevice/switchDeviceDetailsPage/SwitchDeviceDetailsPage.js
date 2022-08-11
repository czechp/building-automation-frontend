import {useLocation} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import SwitchDeviceInfoCmp from "./component/SwitchDeviceInfoCmp";

const SwitchDeviceDetailsPage = () => {
    const SWITCH_DEVICE_ENDPOINT = "/api/switch-devices";
    const getRequestService = new GetRequestService();
    const {state: switchDeviceId} = useLocation();
    const {
        object: switchDevice,
        reloadRequest
    } = getRequestService.getObject(`${SWITCH_DEVICE_ENDPOINT}/${switchDeviceId}`);

    return <PageCmp title="Switch device details" loaded={switchDevice}>
        {switchDevice && <>
            <SwitchDeviceInfoCmp switchDevice={switchDevice} />
        </>}
    </PageCmp>;
}

export default SwitchDeviceDetailsPage;