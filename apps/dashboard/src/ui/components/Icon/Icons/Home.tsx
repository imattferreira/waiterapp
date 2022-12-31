type HomeIconProps = {
  size?: number;
};

function HomeIcon({ size = 24, ...props }: HomeIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
      <path
        {...props}
        stroke="#666"
        stroke-width="1.5"
        d="m19.528 8.486-5.76-4.48a2.88 2.88 0 0 0-3.536 0l-5.76 4.48A2.881 2.881 0 0 0 3.36 10.76v7.04a2.88 2.88 0 0 0 2.88 2.88h11.52a2.88 2.88 0 0 0 2.88-2.88v-7.04a2.88 2.88 0 0 0-1.112-2.273Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export default HomeIcon;
