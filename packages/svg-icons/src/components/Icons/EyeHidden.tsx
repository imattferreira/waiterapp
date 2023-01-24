type EyeHiddenIconProps = {
  size?: number;
};

function EyeHiddenIcon({ size = 24, ...props }: EyeHiddenIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        {...props}
        stroke="#666"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 19c-.842 0-1.685-.178-2.504-.495m11.386-6.037C18.99 15.967 15.495 19 12 19m7.08-10.08a15.135 15.135 0 0 1 1.802 2.613.987.987 0 0 1 0 .935M5 19 19 5m-9.227 9.227a3.15 3.15 0 0 1 4.455-4.455"
      />
      <path
        {...props}
        stroke="#666"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M17.044 6.956C15.497 5.759 13.748 5 12 5c-3.495 0-6.99 3.033-8.882 6.533a.987.987 0 0 0 0 .935c.946 1.749 2.292 3.381 3.838 4.577"
      />
    </svg>
  );
}

export default EyeHiddenIcon;
