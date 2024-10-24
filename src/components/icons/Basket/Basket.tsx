import { appUI } from '@/common/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const Basket = (props: SvgIconProps): JSX.Element => {
  const { fill = appUI.colors.black, width = '21px', height = '24px' } = props;

  return (
    <SvgIcon sx={{ width, height }}>
      <svg
        width="21"
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 6L3.56667 23H17.4333L18.5 7.5"
          stroke="#8D9DA3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 10V19"
          stroke="#8D9DA3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 10V19"
          stroke="#8D9DA3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 10V19"
          stroke="#8D9DA3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="0.5"
          y="3"
          width="20"
          height="3"
          stroke="#8D9DA3"
          strokeLinejoin="round"
        />
        <rect
          x="6.5"
          y="1"
          width="8"
          height="2"
          stroke="#8D9DA3"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default Basket;
