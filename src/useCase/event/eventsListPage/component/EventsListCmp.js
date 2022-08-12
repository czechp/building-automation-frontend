import styled from "styled-components";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../../configuration/styledComponents/Table";
import eventTypeConverter from "../../converter/eventTypeConverter";
import DateConverter from "../../../../service/converter/dateConverter";
import ColorExplanationCmp from "../../../../component/ColorExplanationCmp";
import colors from "../../../../configuration/style/colors";

const EventsListCmp = ({events, setSortingField}) => {
    const colorExplanation = [
        {label: "Success", color: colors.success},
        {label: "Failed", color: colors.danger},
    ];

    return <Container>
        <ColorExplanationCmp data={colorExplanation}/>
        <Table>
            <Thead>
                <Tr>
                    <Th onClick={()=>{setSortingField("id")}}>Id:</Th>
                    <Th onClick={()=>{setSortingField("deviceEventType")}}>Event type:</Th>
                    <Th onClick={()=>{setSortingField("creationTimestamp")}}>Date:</Th>
                </Tr>
            </Thead>
            <Tbody>
                {events.map((el, index) => <EventRowCmp key={`${el.id}-${index}`} event={el}/>)}
            </Tbody>
        </Table>
    </Container>
}

const EventRowCmp = ({event}) => {
    const dateConverter = new DateConverter();
    const stateColor = event.failed ? colors.danger : colors.success;

    return <TrEvent state={stateColor}>
        <Td>{event.id}</Td>
        <Td>{eventTypeConverter(event.deviceEvent)}</Td>
        <Td>{dateConverter.toFullDateTime(event.creationTimestamp)}</Td>
    </TrEvent>
}


const Container = styled.div`
  width: 100%;
`;

const TrEvent = styled(Tr)`
  border-left: 20px solid ${({state}) => state};
`;

export default EventsListCmp;