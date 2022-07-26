import styled from "styled-components";

const ContainerLayout = ({children}) => {
    return <Container>
        {children}
    </Container>
}

const Container = styled.div`
  width: 100%;
`

export default ContainerLayout;