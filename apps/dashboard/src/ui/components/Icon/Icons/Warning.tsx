type WarningIconProps = {
  size?: number;
};

function WarningIcon({ size = 24, ...props }: WarningIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        {...props}
        fill="#666"
        fill-rule="evenodd"
        d="M9.999 6.667a.208.208 0 1 0 .002.417.208.208 0 0 0-.002-.417Z"
        clip-rule="evenodd"
      />
      <path
        {...props}
        stroke="#D73035"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M9.999 6.667a.208.208 0 1 0 .002.417.208.208 0 0 0-.002-.417"
      />
      <path
        {...props}
        stroke="#D73035"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M10 10v4.167m0 3.333v0A7.5 7.5 0 0 1 2.5 10v0A7.5 7.5 0 0 1 10 2.5v0a7.5 7.5 0 0 1 7.5 7.5v0a7.5 7.5 0 0 1-7.5 7.5Z"
      />
    </svg>
  );
}

export default WarningIcon;
