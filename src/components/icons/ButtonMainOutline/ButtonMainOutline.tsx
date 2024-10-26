import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ButtonMainOutline = (props: SvgIconProps): JSX.Element => {
  const { width = '98px', height = '98px' } = props;

  return (
    <SvgIcon sx={{ width, height }}>
      <svg
        width="98"
        height="98"
        viewBox="0 0 98 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ddi_77_205)">
          <circle cx="52" cy="52" r="38" fill="#EFF1F2" />
        </g>
        <path
          d="M54.5067 65.7137L60.8129 59.4612C61.093 59.1834 61.093 58.7325 60.8129 58.4548L60.1247 57.7725C59.8446 57.4947 59.3898 57.4947 59.1097 57.7725L53.0317 63.7987C52.7516 64.0764 52.2968 64.0764 52.0167 63.7987L51.906 63.689C51.6259 63.4112 51.6259 62.9603 51.906 62.6826L57.984 56.6564C58.2641 56.3786 58.2641 55.9277 57.984 55.65L57.2958 54.9677C57.0157 54.6899 56.5609 54.6899 56.2808 54.9677L50.2028 60.9939C49.9227 61.2716 49.4679 61.2716 49.1878 60.9939L49.0771 60.8842C48.797 60.6064 48.797 60.1555 49.0771 59.8778L52.3919 56.5912L60.5881 48.4649C60.8215 48.2334 61.1397 48.1014 61.4717 48.1031C62.1115 48.1031 62.4297 48.8695 61.9783 49.3169L59.1633 52.108C58.8832 52.3857 58.8832 52.8366 59.1633 53.1144L59.8515 53.7967C60.1316 54.0745 60.5864 54.0745 60.8665 53.7967L68.7912 45.9395C69.0696 45.6635 69.0696 45.216 68.7912 44.94L62.006 38.2092C61.8711 38.0754 61.6878 38 61.4976 38L51.1867 38.0086C50.9343 38.0086 50.6939 38.108 50.5141 38.2846L44.1992 44.532C43.9191 44.8097 43.9191 45.2606 44.1992 45.5383L44.8874 46.2207C45.1675 46.4984 45.6223 46.4984 45.9024 46.2207L51.9717 40.1996C52.2519 39.9219 52.7066 39.9219 52.9868 40.1996L53.0974 40.3093C53.3775 40.5871 53.3775 41.038 53.0974 41.3157L47.0264 47.335C46.7462 47.6128 46.7462 48.0637 47.0264 48.3414L47.7146 49.0238C47.9947 49.3015 48.4495 49.3015 48.7296 49.0238L54.8006 43.0044C55.0808 42.7267 55.5355 42.7267 55.8156 43.0044L55.9263 43.1141C56.2064 43.3919 56.2064 43.8428 55.9263 44.1205L52.6115 47.4071L44.4136 55.5334C44.1802 55.7649 43.862 55.8952 43.5318 55.8952C42.892 55.8952 42.5721 55.1288 43.0251 54.6814L45.8471 51.8834C46.1272 51.6057 46.1272 51.1548 45.8471 50.8771L45.1589 50.1947C44.8788 49.917 44.424 49.917 44.1439 50.1947L36.2088 58.0588C35.9304 58.3348 35.9304 58.7823 36.2088 59.0583L42.9992 65.7908C43.134 65.9246 43.3173 66 43.5075 66L53.834 65.9914C54.0865 65.9914 54.3286 65.892 54.5067 65.7154V65.7137ZM49.5717 53.7916L57.8301 45.6035C57.9978 45.4372 58.2693 45.4372 58.4353 45.6035L58.9541 46.1178C59.1218 46.2841 59.1218 46.5533 58.9541 46.7179L55.4335 50.2084L47.1751 58.3965C47.0073 58.5628 46.7359 58.5628 46.5699 58.3965L46.0511 57.8822C45.8834 57.7159 45.8834 57.4467 46.0511 57.2821L49.5717 53.7916Z"
          fill="#1F2F57"
        />
        <defs>
          <filter
            id="filter0_ddi_77_205"
            x="0.5"
            y="0.5"
            width="97"
            height="97.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-3" dy="-3" />
            <feGaussianBlur stdDeviation="5.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_77_205"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_77_205"
              result="effect2_dropShadow_77_205"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_77_205"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1.75" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.564706 0 0 0 0 1 0 0 0 0 0.913725 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect3_innerShadow_77_205"
            />
          </filter>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default ButtonMainOutline;
