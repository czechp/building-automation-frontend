import styled from "styled-components";
import SeparatorCmp from "./SeparatorCmp";

const InfoCardCmp = ({data = []}) => {
    return <Container>
        {data.map((row, index) => <InfoCardRow key={index} row={row} index={index}/>)}
    </Container>
}

const InfoCardRow = ({row = {style: {}}, index}) => {
    return <RowContainer>
        <RowWrapper style={row.style}>
            <RowText>{row.label}</RowText>
            <RowText>{row.value}</RowText>
        </RowWrapper>
        <SeparatorCmp/>
    </RowContainer>
}

const Container = styled.div`
  width: 100%;
`;

const RowContainer = styled.div`
  width: 100%;

`;

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: smaller;
  &:hover {
    color: ${({theme}) => theme.colors.secondary}
  }
`;

const RowText = styled.span`
`;


export default InfoCardCmp;