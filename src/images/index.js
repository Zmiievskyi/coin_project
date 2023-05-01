import rectangleSrc from "./rectangle.svg";
import defiSrc from "./DeFiOracle.svg";
import unionSrc from "./Union.svg";

 const icons = {
    rectangleSrc,
    defiSrc,
    unionSrc,
};
const LoadingIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="<http://www.w3.org/2000/svg>">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.78033 1.28033C6.07322 0.987437 6.07322 0.512563 5.78033 0.21967C5.48744 -0.0732233 5.01256 -0.0732233 4.71967 0.21967L0.21967 4.71967C-0.0732233 5.01256 -0.0732233 5.48744 0.21967 5.78033L4.71967 10.2803C5.01256 10.5732 5.48744 10.5732 5.78033 10.2803C6.07322 9.98744 6.07322 9.51256 5.78033 9.21967L1.81066 5.25L5.78033 1.28033ZM11.2803 1.28033C11.5732 0.987437 11.5732 0.512563 11.2803 0.21967C10.9874 -0.0732233 10.5126 -0.0732233 10.2197 0.21967L5.71967 4.71967C5.42678 5.01256 5.42678 5.48744 5.71967 5.78033L10.2197 10.2803C10.5126 10.5732 10.9874 10.5732 11.2803 10.2803C11.5732 9.98744 11.5732 9.51256 11.2803 9.21967L7.31066 5.25L11.2803 1.28033Z"
        fill="white"
      />

      <circle
        cx="12"
        cy="12"
        r="8"
        stroke-width="4"
        stroke="tomato"
        fill="none"
      />
    </svg>
  );
};

export default icons;
