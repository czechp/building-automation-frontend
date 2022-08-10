import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import SwitchDevicesListCmp from "./component/SwitchDevicesListCmp";

const SwitchDevicesListPage = () => {
    const SWITCH_DEVICE_ENDPOINT = "/api/switch-devices/account";

    const getRequestService = new GetRequestService();
    const {
        objects: switchDevices,
        setSortingField,
        reloadRequest: reloadSwitchDevices
    } = getRequestService.getObjectsArray(SWITCH_DEVICE_ENDPOINT);

    return <PageCmp title="Switch devices" loaded={switchDevices}>
        {
            switchDevices && <>
                <SwitchDevicesListCmp switchDevices={switchDevices} setSortingField={setSortingField} />
            </>
        }
    </PageCmp>
}

export default SwitchDevicesListPage;