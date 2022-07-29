import styled from "styled-components";

import PageCmp from "./PageCmp";

const WarningPageCmp = ({title, children}) => {
    return <PageCmp title={title}>
        <Container>
            {children}
        </Container>
    </PageCmp>
};

const Container = styled.div`
  color: ${({theme}) => theme.colors.danger};
  border: 4px solid ${({theme}) => theme.colors.danger};
  min-width: 90%;
  min-height: 400px;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 40px;
`

export default WarningPageCmp;