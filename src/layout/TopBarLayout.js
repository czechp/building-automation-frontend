import styled from "styled-components";
import SeparatorCmp from "../component/SeparatorCmp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseSignal} from "@fortawesome/free-solid-svg-icons";

const TopBarLayout = () => {
    return <>
        <Container>
            <LogoContainer>
                <FontAwesomeIcon icon={faHouseSignal} size={"3x"}/>
                <Logo>
                    <LogoHeader>PCz</LogoHeader>
                    <LogoSubheader>Building <br/>Automation</LogoSubheader>
                </Logo>
            </LogoContainer>
        </Container>
        <SeparatorCmp/>
    </>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoHeader = styled.h1`
  margin-top: 10px;
  margin-bottom: 0px;
`

const LogoSubheader = styled.h6`
  margin-top: 5px;
  margin-bottom: 5px;
`

const Logo = styled.div``
export default TopBarLayout;