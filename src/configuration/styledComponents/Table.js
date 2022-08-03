import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  padding: 20px;
`;
export const Tr = styled.tr`
    &:hover{
      background-color: ${({theme}) => theme.colors.primary};
      color: ${({theme}) => theme.colors.white};
      cursor: pointer;
    }
`;

export const Thead = styled.thead``;

export const Th = styled.th`
  text-align: center;
  padding: 20px;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};
  border-top: 2px solid ${({theme}) => theme.colors.primary};
  &:hover{
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  text-align: center;
  padding: 20px;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};

`;