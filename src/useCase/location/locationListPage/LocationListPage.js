import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import LocationsListCmp from "./component/LocationsListCmp";

const LocationListPage = () => {
    const LOCATIONS_ENDPOINT = "/api/locations/account";
    const getRequestService = new GetRequestService();
    const {objects: locations, setSortingField} = getRequestService.getObjectsArray(LOCATIONS_ENDPOINT);


    return <PageCmp title="Locations" loaded={locations}>
        {
            locations && <>
                <LocationsListCmp locations={locations} setSortingField={setSortingField} />
            </>
        }
    </PageCmp>
}

export default LocationListPage;

