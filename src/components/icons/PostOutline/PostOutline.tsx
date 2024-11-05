import { appUI } from '@/common/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const PostOutline = (props: SvgIconProps): JSX.Element => {
  const {
    htmlColor = appUI.colors.black,
    width = '26px',
    height = '22px',
  } = props;

  return (
    <SvgIcon sx={{ width, height }}>
      <svg
        // width="26"
        // height="22"
        viewBox="0 0 26 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.6 21L9.4 16.3L17 21.5L25 1L1 9.4L7.4 14.2L17.8 7.4L12.5 13"
          stroke={htmlColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default PostOutline;
