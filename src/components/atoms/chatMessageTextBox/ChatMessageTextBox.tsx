import { Box } from '@mui/material';

interface ChatMessageTextBoxPropsI {
  /** 'PARTY_A' - собственные сообщений
   *  'PARTY_B' - сообщения собеседника
   */
  party: 'PARTY_A' | 'PARTY_B';
  value: string;
}

const styleCommon = {
  display: 'flex',
  padding: '20px 18px',
  fontSize: '15px',
  lineHeight: '18px',
  width: 'fit-content', // Ширина по содержимому,
};

const stylePartyA = {
  // border: '1px solid #00A99A',
  backgroundColor: '#00A99A',
  borderRadius: '20px 20px  0 20px',
  color: '#FFFFFF',
  justifyContent: 'flex-start',
  alignSelf: 'flex-end',
  marginLeft: '20px',
};

const stylePartyB = {
  // border: '1px solid grey',
  backgroundColor: '#F7F8F8',
  borderRadius: '20px 20px 20px 0',
  color: '#1F2F57',
  justifyContent: 'flex-end',
  alignSelf: 'flex-start',
  marginRight: '20px',
};

const ChatMessageTextBox = (props: ChatMessageTextBoxPropsI) => {
  const { value, party } = props;

  const isPartyA = party === 'PARTY_A';

  const styleParty = isPartyA ? stylePartyA : stylePartyB;

  return <Box sx={{ ...styleCommon, ...styleParty }}>{value}</Box>;
};

export default ChatMessageTextBox;
