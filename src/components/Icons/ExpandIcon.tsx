export const ExpandIcon = ({
  fill,
  action,
}: {
  fill: string;
  action: () => void;
}) => {
  return (
    <svg
      onClick={() => action()}
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="16.603"
      height="16.843"
      viewBox="0 0 16.603 16.843"
    >
      <g transform="translate(0.503 0.505)">
        <g transform="translate(0.6 0.588)">
          <path
            d="M8.1,8.405a.351.351,0,0,1-.246-.1L2.69,3.143a.349.349,0,0,1,.493-.493l5.16,5.16a.347.347,0,0,1,0,.493A.351.351,0,0,1,8.1,8.405Z"
            transform="translate(-2.588 -2.548)"
            fill={fill}
          />
          <path
            d="M8.1,8.905a.855.855,0,0,1-.6-.249L2.337,3.5a.849.849,0,1,1,1.2-1.2L8.7,7.456a.849.849,0,0,1-.6,1.449Z"
            transform="translate(-2.588 -2.548)"
            fill={fill}
          />
        </g>
        <g transform="translate(9.435 9.383)">
          <path
            d="M46.1,46.228a.351.351,0,0,1-.246-.1l-5.16-5.16a.349.349,0,1,1,.493-.493l5.16,5.16a.347.347,0,0,1,0,.493A.351.351,0,0,1,46.1,46.228Z"
            transform="translate(-40.588 -40.371)"
            fill={fill}
          />
          <path
            d="M46.1,46.728a.855.855,0,0,1-.6-.249l-5.16-5.16a.849.849,0,1,1,1.2-1.2L46.7,45.279a.849.849,0,0,1-.6,1.449Z"
            transform="translate(-40.588 -40.371)"
            fill={fill}
          />
        </g>
        <g transform="translate(-0.003 -0.005)">
          <path
            d="M.347,6.451H.326A.348.348,0,0,1,0,6.083L.309.714A.348.348,0,0,1,.633.387L6.081,0a.344.344,0,0,1,.372.323.347.347,0,0,1-.323.372L.988,1.059.7,6.12a.349.349,0,0,1-.349.328Z"
            transform="translate(0.003 0.005)"
            fill={fill}
          />
          <path
            d="M.347,6.951H.3a.845.845,0,0,1-.584-.283A.84.84,0,0,1-.5,6.053L-.19.685A.847.847,0,0,1,.6-.112L6.043-.5A.848.848,0,1,1,6.165,1.19l-4.7.336L1.195,6.149a.852.852,0,0,1-.348.635v.164Z"
            transform="translate(0.003 0.005)"
            fill={fill}
          />
        </g>
        <g transform="translate(9.146 9.384)">
          <path
            d="M39.693,46.829a.348.348,0,0,1-.023-.7l5.141-.367L45.1,40.7a.348.348,0,1,1,.7.04l-.312,5.369a.348.348,0,0,1-.323.328l-5.446.388Z"
            transform="translate(-39.346 -40.376)"
            fill={fill}
          />
          <path
            d="M39.737,47.329h-.043a.848.848,0,0,1-.845-.792.847.847,0,0,1,.786-.9l4.7-.336.268-4.623a.848.848,0,1,1,1.693.1l-.311,5.367a.847.847,0,0,1-.789.8Z"
            transform="translate(-39.346 -40.376)"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};
