import styled from "styled-components";
import SeparatorCmp from "../component/SeparatorCmp";

const TopBarLayout = () => {
    return <>
        <Container>
            <Logo>
                <LogoHeader>PCz</LogoHeader>
                <LogoSubheader>Building <br/>Automation</LogoSubheader>
            </Logo>
        </Container>
        <SeparatorCmp />
    </>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
`

const LogoHeader = styled.h1`
  margin-top: 10px;
  margin-bottom: 0px;
`

const LogoSubheader = styled.h6`
  margin-top: 5px;
  margin-bottom: 5px;
`
export default TopBarLayout;