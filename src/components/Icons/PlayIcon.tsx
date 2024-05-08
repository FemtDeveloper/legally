export default function PlayIcon({
  size = 19,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0156 8.04298C14.0156 11.4495 11.2541 14.211 7.84767 14.211C4.44119 14.211 1.67969 11.4495 1.67969 8.04298C1.67969 4.6365 4.44119 1.875 7.84767 1.875C11.2541 1.875 14.0156 4.6365 14.0156 8.04298ZM5.98545 9.98012C5.98545 10.4567 6.50335 10.7529 6.91415 10.5112L10.2073 8.57381C10.6124 8.33553 10.6123 7.74978 10.2073 7.51153L6.9141 5.57448C6.5033 5.33285 5.98545 5.62904 5.98545 6.10564V9.98012Z"
        fill={color}
      />
    </svg>
  );
}
