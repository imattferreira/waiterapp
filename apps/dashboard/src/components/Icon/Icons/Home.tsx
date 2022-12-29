type HomeIconProps = {
  size?: number;
};

function HomeIcon({ size = 24, ...props }: HomeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.5283 8.48621L13.7683 4.00589C12.7286 3.19661 11.2723 3.19661 10.2317 4.00589L4.47167 8.48621C3.76991 9.03245 3.35999 9.87149 3.35999 10.7595V17.7992C3.35999 19.3899 4.64927 20.6792 6.23999 20.6792H17.76C19.3507 20.6792 20.64 19.3899 20.64 17.7992V10.7595C20.64 9.87149 20.2301 9.03245 19.5283 8.48621Z"
        stroke="#666666"
        stroke-width="1.5"
        {...props}
      />
    </svg>
  );
}

export default HomeIcon;
