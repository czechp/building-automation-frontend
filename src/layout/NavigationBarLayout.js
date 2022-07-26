import styled from "styled-components";
import SeparatorCmp from "../component/SeparatorCmp";
import ButtonCmp from "../component/ButtonCmp";

const NavigationBarLayout = () => {
    return <>
        <Container>
            <ButtonCmp width={20} label={"Locations"} />
            <ButtonCmp width={20} label={"Devices"} />
            <ButtonCmp width={20} label={"Account"} />
        </Container>
        <SeparatorCmp />
    </>
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default NavigationBarLayout;