type CloseIconProps = {
  size?: number;
};

function CloseIcon({ size = 24, ...props }: CloseIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        {...props}
        stroke="#333"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m8 8 8 8m0-8-8 8"
      />
    </svg>
  );
}

export default CloseIcon;
