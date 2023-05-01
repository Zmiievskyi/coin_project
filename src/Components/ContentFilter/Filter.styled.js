import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  background-color: #000000;
  border: 1px solid #2a2a2b;
  height: 56px;
  color: #838487;
`;

export const customStyles = {
  placeholder: (provided) => ({
    ...provided,
    color: "#E1E3E6",
    margin: 0,
    padding: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    marginRight: "2px",
    padding: 0,
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "inherit",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#E1E3E6",
    fontSize: 12,
    fontFamily: "Inter",
  }),
  input: (baseStyles, state) => ({
    ...baseStyles,
    color: "#ffffff",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: "8px",
    boxShadow: state.isFocused ? "#343536" : "none",
    border: "none",
    backgroundColor: state.isFocused ? "#343536" : "#000000",
    padding: "6px 12px 6px 12px",
    ":hover, :focus, :active": {
      backgroundColor: "#343536",
      borderColor: "#343536",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#E1E3E6",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
  }),
  menu: (provided, state) => ({
    ...provided,
    maxHeight: "302px",
    width: "280px",
    backgroundColor: "#1d1d1e",
    border: "1px solid #2a2a2b",
  }),
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    backgroundColor: state.isSelected ? "#343536" : "none",
    color: state.isSelected ? "#E1E3E6" : "#grey",
    ":hover, :focus, :active": {
      backgroundColor: "#2a2a2b",
    },
  }),
};
