export const SendMessageIcon = ({
  fill,
  className,
  onClick,
}: {
  className: string;
  fill?: string;
  onClick: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22.968"
      height="20.507"
      viewBox="0 0 22.968 20.507"
    >
      <g transform="translate(27.968 121)">
        <path
          d="M30.66,14.18a.821.821,0,0,0-.832-.115L8.5,23.088a.82.82,0,0,0-.047,1.489l6.225,3.112,1.549,6.2a.821.821,0,0,0,.621.6.8.8,0,0,0,.175.019.82.82,0,0,0,.641-.308l3.018-3.772,5.792,3.16a.82.82,0,0,0,1.2-.573l3.281-18.046A.821.821,0,0,0,30.66,14.18ZM26.262,31.6,19.2,27.75l5.787-5.787a.82.82,0,1,0-1.16-1.16l-6.562,6.562a.82.82,0,0,0,.187,1.3l1.768.964-1.8,2.252-1.239-4.956a.82.82,0,0,0-.429-.535l-4.971-2.485,18.29-7.738Z"
          transform="translate(-35.967 -135)"
          fill={fill}
        />
      </g>
    </svg>
  );
};
