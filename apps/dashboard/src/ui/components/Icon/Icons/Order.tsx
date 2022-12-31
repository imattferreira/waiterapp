type OrderIconProps = {
  size?: number;
};

function OrderIcon({ size = 24, ...props }: OrderIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
      <path
        {...props}
        stroke="#666"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M16 9.5H8m8 3H8m5 3H8m11.449 5.396-.99.497a1 1 0 0 1-.892.003l-1.573-.777-1.54.774a1 1 0 0 1-.895.002L12 20.619l-1.559.776a1 1 0 0 1-.894-.002l-1.541-.774-1.573.777a1 1 0 0 1-.892-.003l-.99-.497A1 1 0 0 1 4 20.003V4.998a1 1 0 0 1 .551-.894l.99-.498a1 1 0 0 1 .892-.002l1.573.777 1.54-.774a1 1 0 0 1 .895-.001L12 4.382l1.559-.776a1 1 0 0 1 .894.001l1.541.774 1.573-.777a1 1 0 0 1 .892.002l.99.498a1 1 0 0 1 .551.894v15.005a1 1 0 0 1-.551.893Z"
      />
    </svg>
  );
}

export default OrderIcon;
