import styled from "styled-components";

const SelectFieldCmp = ({value, options, onChange, width = 100}) => {

    function selectFieldOnChange(event) {
        onChange(event.target.value);
    };

    return <Select value={value} width={width} onChange={selectFieldOnChange}>
        {
            options.map((opt, index) => <Option key={`${opt.value}-index`} value={opt.value}>{opt.label}</Option>)
        }
    </Select>
}

const Select = styled.select`
  width: ${({width}) => `${width}%`};
  border: none;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};
  background-color: transparent;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary}
`;

const Option = styled.option`
`;
export default SelectFieldCmp;