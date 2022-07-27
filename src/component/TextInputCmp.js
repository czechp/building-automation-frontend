import styled from "styled-components";

const TextInputCmp = ({label, value, onChange, minLength}) => {
    const showMinLength = minLength && value.length < minLength;

    function textOnChange(event) {
        return onChange(event.target.value);
    }

    return <Container>
        <Label>{label}</Label>
        <TextInput value={value} onChange={(event) => textOnChange(event)}/>
        {showMinLength && <Warning>Text has to have minimum {minLength} characters</Warning>}
    </Container>
}

const Container = styled.div`
  width: 100%;
`

const Label = styled.h4``

const Warning = styled.h6`
  margin-top: 10px;
  color: ${({theme}) => theme.colors.danger}
`

const TextInput = styled.input.attrs({type: "text"})`
  border: none;
  border-bottom: ${({theme}) => `1px solid ${theme.colors.primary}`};
  height: 30px;
  width: 100%;
  background-color: transparent;
  text-align: center;
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary}
`

export default TextInputCmp;