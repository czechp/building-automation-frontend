import styled from "styled-components";
import {useNavigate} from "react-router-dom";


import SeparatorCmp from "../component/SeparatorCmp";
import ButtonCmp from "../component/ButtonCmp";

const NavigationBarLayout = () => {
    const navigate = useNavigate();

    return <>
        <Container>
            <ButtonCmp width={20} label={"Home"} onClick={() => navigate("/")}/>
            <ButtonCmp width={20} label={"Locations"} onClick={() => navigate("/locations")}/>
            <ButtonCmp width={20} label={"Switch devices"} onClick={()=>navigate("/switch-devices")}/>
            <ButtonCmp width={20} label={"Accounts"} onClick={() => navigate("/accounts")}/>
        </Container>
        <SeparatorCmp/>
    </>
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`

export default NavigationBarLayout;