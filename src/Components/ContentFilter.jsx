import Select, { components } from "react-select";
import { useState } from "react";
import CheckboxIcon from "./ContentFilter/CheckboxIcon";
import {Wrapper, customStyles} from '../Components/ContentFilter/Filter.styled'

const options = [
  { value: "Bitcoin", label: "Bitcoin" },
  { value: "Ethereum", label: "Ethereum" },
  { value: "Tether", label: "Tether" },
  { value: "BNB", label: "BNB" },
  { value: "USD Coin", label: "USD Coin" },
  { value: "XRP", label: "XRP" },
  { value: "Cardano", label: "Cardano" },
  { value: "Dogecoin", label: "Dogecoin" },
  { value: "Polygon", label: "Polygon" },
  { value: "Solana", label: "Solana" },
  { value: "Polkadot", label: "Polkadot" },
  { value: "Litecoin", label: "Litecoin" },
  { value: "Binance USD", label: "Binance USD" },
  { value: "TRON", label: "TRON" },
];


export const ContentFilter = () => {
  const [selectOption, setSelectOption] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectOption(selectedOption);
  };

  const CheckboxOption = (props) => (
    <components.Option {...props}>
      <CheckboxIcon checked={props.isSelected} />
      {props.label}
    </components.Option>
  );

  const ClearIndicator = (props) => (
    <components.ClearIndicator {...props}>
      <span style={{ fontSize: 12 }}>+{selectOption.length - 2}</span>
    </components.ClearIndicator>
  );

  const CustomMultiValueRemove = (props) => {
    return null;
  };


  return (
    <Wrapper>
      <Select
        // defaultValue={options[0]}
        options={options}
        placeholder="All chains"
        styles={customStyles}
        components={{
          Option: CheckboxOption,
          ClearIndicator,
          // ValueContainer,
          MultiValueRemove: CustomMultiValueRemove,
        }}
        isMulti={true}
        value={selectOption}
        onChange={handleChange}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        // formatOptionLabel={formatOptionLabel}
      />
    </Wrapper>
  );
};
