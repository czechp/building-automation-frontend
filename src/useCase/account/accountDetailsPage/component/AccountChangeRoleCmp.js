import React from "react";
import styled from "styled-components";

import FormCmp from "../../../../component/FormCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import SelectFieldCmp from "../../../../component/SelectFieldCmp";
import {ACCOUNT_ROLES} from "../../../../constant/ACCOUNT_ROLES";

const AccountChangeRoleCmp = ({account}) => {
    const [accountRole, setAccountRole] = React.useState(account.role);
    return <FormCmp title="Change role">
        <Container>
            <SelectFieldCmp value={accountRole} onChange={setAccountRole} options={ACCOUNT_ROLES} width={45}/>
            <ButtonCmp label="Change role" width={45}/>
        </Container>
    </FormCmp>
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default AccountChangeRoleCmp;