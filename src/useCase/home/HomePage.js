import React from "react";
import styled from "styled-components";
import {faHouseSignal, faLocationCrosshairs, faPowerOff, faUser} from "@fortawesome/free-solid-svg-icons";


import PageCmp from "../../component/PageCmp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setLoaded(true), 800);
    }, []);

    return <PageCmp title="Home" loaded={loaded}>
        <Container>
            <TileCmp path="/" title={"Home"} icon={faHouseSignal}/>
            <TileCmp path="/locations" title={"Locations"} icon={faLocationCrosshairs}/>
            <TileCmp path="/switch-devices" title={"Switch Devices"} icon={faPowerOff}/>
            <TileCmp path="/accounts" title={"Accounts"} icon={faUser}/>
        </Container>
    </PageCmp>
}

const TileCmp = ({title, icon, path}) => {
    const navigate = useNavigate();
    return <Tile onClick={() => navigate(path)}>
        <TileHeader>{title}</TileHeader>
        <FontAwesomeIcon icon={icon} size={"5x"}/>
    </Tile>
}


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
`;

const Tile = styled.div`
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  width: 45%;
  height: 250px;
  margin: 1%;
  padding: 1%;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.faded}
  }
`;

const TileHeader = styled.h3``;

export default HomePage;