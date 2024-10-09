import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ProfileFilledIcon: React.FC<SvgIconProps> = (props): JSX.Element => (
  <SvgIcon {...props} viewBox="0 0 19 25">
    <svg
      width="62"
      height="79"
      viewBox="0 0 62 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.174 59.2434C60.174 50.6628 47.1253 43.7241 31.0001 43.7241C14.8749 43.7241 1.82617 50.6628 1.82617 59.2434V77.6758H60.174V59.2434Z"
        fill="#1E2F57"
      />
      <path
        d="M30.9999 37.1828C40.9163 37.1828 48.9551 29.1555 48.9551 19.2535C48.9551 9.35143 40.9163 1.32422 30.9999 1.32422C21.0835 1.32422 13.0447 9.35143 13.0447 19.2535C13.0447 29.1555 21.0835 37.1828 30.9999 37.1828Z"
        fill="#1E2F57"
      />
    </svg>
  </SvgIcon>
);

export default ProfileFilledIcon;
