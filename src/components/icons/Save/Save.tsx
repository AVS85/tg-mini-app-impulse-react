import { appUI } from '@/common/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const Save = (props: SvgIconProps): JSX.Element => {
  const { fill = appUI.colors.black, width = '22px', height = '21px' } = props;

  return (
    <SvgIcon sx={{ width, height }}>
      <svg
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.5H16.1844L20.7812 5.09681V20.2812H1V0.5Z"
          stroke="#8D9DA3"
        />
        <path d="M4.16724 0V7.33456H15.1691V0" stroke="#8D9DA3" />
        <path d="M17.6139 20.7812V12.2242H4.16724V20.7812" stroke="#8D9DA3" />
      </svg>
    </SvgIcon>
  );
};

export default Save;
