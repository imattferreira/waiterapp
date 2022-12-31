type UsersIconProps = {
  size?: number;
};

function UsersIcon({ size = 24, ...props }: UsersIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
      <circle
        {...props}
        cx="7.998"
        cy="9.009"
        r="3.491"
        stroke="#666"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <circle
        {...props}
        cx="17.002"
        cy="9.999"
        r="2.501"
        stroke="#666"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        {...props}
        stroke="#666"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M1.996 20.503v-1.017a3.985 3.985 0 0 1 3.985-3.985h4.035a3.985 3.985 0 0 1 3.985 3.985v1.017m3.001-5.002h1.103a3.984 3.984 0 0 1 3.984 3.985v1.017"
      />
    </svg>
  );
}

export default UsersIcon;
