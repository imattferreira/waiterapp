type LogOffIconProps = {
  size?: number;
};

function LogOffIcon({ size = 24, ...props }: LogOffIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        {...props}
        stroke="#666"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M17.657 6.343a8 8 0 1 1-11.314 0M12 4v8"
      />
    </svg>
  );
}

export default LogOffIcon;
