import { Typography } from '@mui/material';

interface TextPropsI {
  children: string;
  color?: string;
  fontWeight?: '350' | '400' | '500' | '700';
  bold?: boolean;
  variant?: 'bold';
}

const h1 = (props: TextPropsI) => {
  const WEIGHT_BOLD = 700;
  const { children, color, bold } = props;
  return (
    <Typography
      variant="h1"
      fontWeight={bold ? WEIGHT_BOLD : undefined}
      sx={{ color }}
    >
      {children}
    </Typography>
  );
};

const h2 = (props: TextPropsI) => {
  const WEIGHT_BOLD = 700;
  const { children, color, bold } = props;
  return (
    <Typography
      variant="h2"
      fontWeight={bold ? WEIGHT_BOLD : undefined}
      sx={{ color }}
    >
      {children}
    </Typography>
  );
};

const body = (props: TextPropsI) => {
  const WEIGHT_BOLD = 700;
  const { children, color, bold } = props;
  return (
    <Typography
      variant="body1"
      fontWeight={bold ? WEIGHT_BOLD : undefined}
      sx={{ color }}
    >
      {children}
    </Typography>
  );
};

const subtitle = (props: TextPropsI) => {
  const WEIGHT_BOLD = 700;

  const { children, color, bold } = props;
  return (
    <Typography
      component="span"
      variant="subtitle1"
      fontWeight={bold ? WEIGHT_BOLD : undefined}
      sx={{ color }}
    >
      {children}
    </Typography>
  );
};

const Text = { h1, h2, body, subtitle };

export default Text;
