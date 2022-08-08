import styled from "styled-components";

const SeparatorCmp = () => {
    return <Separator/>
}

const Separator = styled.hr`
  color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.primary};
  size: 1px;
`

export default SeparatorCmp;