import { appUI } from '@/common/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const Plus = (props: SvgIconProps): JSX.Element => {
  const { fill = appUI.colors.black, width = '14px', height = '14px' } = props;

  console.log('props', props);

  return (
    <SvgIcon sx={{ width, height }}>
      <svg viewBox="0 0 14 14">
        <path
          d="M0 7.69186V6.29457C0 6.1137 0.0904393 6.02326 0.271318 6.02326H6.02326V0.271318C6.02326 0.0904393 6.11822 0 6.30814 0H7.69186C7.87274 0 7.9677 0.0904393 7.97674 0.271318V6.02326H13.7287C13.9096 6.02326 14 6.1137 14 6.29457V7.69186C14 7.87274 13.9096 7.96318 13.7287 7.96318H7.97674V13.7151C7.97674 13.896 7.88178 13.991 7.69186 14H6.30814C6.12726 14 6.0323 13.905 6.02326 13.7151V7.96318H0.271318C0.0904393 7.96318 0 7.87274 0 7.69186Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};

export default Plus;
