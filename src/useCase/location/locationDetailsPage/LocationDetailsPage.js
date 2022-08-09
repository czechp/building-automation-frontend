import React from "react";
import {useLocation} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import LocationInfoCmp from "./component/LocationInfoCmp";
import LocationDeleteCmp from "./component/LocationDeleteCmp";

const LocationDetailsPage = () => {
    const LOCATION_ENDPOINT = "/api/locations";
    const getRequestService = new GetRequestService();
    const {state: locationId} = useLocation();
    const {object: location} = getRequestService.getObject(`${LOCATION_ENDPOINT}/${locationId}`);

    return <PageCmp title="Location details" loaded={location}>
        {
            location && <>
                <LocationInfoCmp location={location} />
                <LocationDeleteCmp locationId={location.id} />
            </>
        }
    </PageCmp>
}

export default LocationDetailsPage;