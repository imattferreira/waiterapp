type EyeIconProps = {
  size?: number;
};

function EyeIcon({ size = 24, ...props }: EyeIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        {...props}
        stroke="#666"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M3.118 12.467a.987.987 0 0 1 0-.935C5.01 8.033 8.505 5 12 5s6.99 3.033 8.882 6.533a.987.987 0 0 1 0 .935C18.99 15.967 15.495 19 12 19s-6.99-3.033-8.882-6.533Z"
        clip-rule="evenodd"
      />
      <path
        {...props}
        stroke="#666"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M14.121 9.879A3 3 0 1 1 9.88 14.12a3 3 0 0 1 4.242-4.242Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export default EyeIcon;
