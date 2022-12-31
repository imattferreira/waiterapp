type MenuIconProps = {
  size?: number;
};

function MenuIcon({ size = 24, ...props }: MenuIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
      <path
        {...props}
        stroke="#666"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M16 14.5h-5m4 3h-3m-5-14v18m-1 0h12a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Zm9.5-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
}

export default MenuIcon;
