

const CheckboxIcon = ({ checked }) => {
  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: checked ? "#2260FF" : "#1d1d1e",
        border: `1px solid ${checked ? "#2260FF" : "#838487"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
      }}
    >
      {checked && (
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00024 4.00033L4.6669 7.666L12.0002 1.33366"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      )}
    </div>
  );
};

export default CheckboxIcon;
