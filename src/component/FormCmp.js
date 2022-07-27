import styled from "styled-components";

const FormCmp = ({title, children})=>{
    return <Container>
        <Header>{title}</Header>
        {children}
    </Container>
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`

const Header = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`

export default FormCmp;