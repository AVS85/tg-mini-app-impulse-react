// import { List } from '@telegram-apps/telegram-ui';
import { appUI } from '@/common/colors';
import {
  Button,
  ButtonIcon,
  ChatMessageTextBox,
  ContentBox,
  Input,
  Text,
} from '@/components/atoms';
import { Header } from '@/components/entity';
import { Basket, Plus, Save } from '@/components/icons';
import { WelcomeBox } from '@/components/molecules';
import { Box } from '@mui/material';
import { Fragment, useState } from 'react';

import { mockChat } from './mockChat';

interface WelcomeLayerPropsI {
  onClick: () => void;
}
interface ConflictListLayerPropsI {
  onClick: () => void;
}

const WelcomeLayer = (props: WelcomeLayerPropsI) => {
  const { onClick } = props;
  return (
    <Box
      sx={{
        border: '1px solid red',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        overflow: 'auto',
      }}
    >
      <WelcomeBox title="Анализ конфликтов позволит вам лучше понять собеседника и разобраться в возникающих разногласиях" />
      <Button
        title="Разобрать конфликт"
        backgroundType="filled"
        onClick={onClick}
      />
    </Box>
  );
};

const ConflictListLayer = (props: ConflictListLayerPropsI) => {
  const { onClick } = props;
  const mockConflictList = [
    {
      id: 1,
      title: 'Конфликт 1',
      date: '13/03',
    },
    {
      id: 2,
      title: 'Конфликт 2',
      date: '22/07',
    },
    {
      id: 3,
      title: 'Конфликт 3',
      date: '07/12',
    },
  ];
  return (
    <Box
      sx={{
        // border: '1px solid green',
        display: 'flex',
        flex: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          // border: '1px solid red',
          flex: 1,
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        {mockConflictList.map((conflict) => (
          <>
            <ContentBox>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flex: 1,
                  alignItems: 'center',
                }}
              >
                <Text.h2>{conflict.title}</Text.h2>
                <Text.subtitle color={appUI.colors.mono[400]}>
                  {conflict.date}
                </Text.subtitle>
              </Box>
            </ContentBox>
          </>
        ))}
        <Box
          sx={{
            // border: '1px solid red',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ButtonIcon
            Icon={Plus}
            backgroundType="filled"
            iconProps={{
              fill: appUI.colors.white,
            }}
            onClick={onClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

const AnalyzeConflictChatPage = () => {
  const [isDisplayWelcomeLayer, setIsDisplayWelcomeLayer] = useState(true);

  const handleClickStart = () => setIsDisplayWelcomeLayer((bool) => !bool);
  const handleCreateConflict = () => {};
  return (
    <>
      <Box
        sx={{
          // outline: '1px solid grey', //TODO delete
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          // flex: 1,
          // width: '100%',
        }}
      >
        {/* CHAT */}
        <Box
          sx={{
            height: '100%',
            // outline: '1px solid grey', //TODO delete
            overflowY: 'scroll',
          }}
        >
          <Box
            sx={{
              // border: '1px solid green',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              // padding: '20px',
              alignItems: 'center',
              // overflowY: 'scroll',
              // flexGrow: 1,
              flex: 1,
              // maxHeight: '100%',
              // height: '100%',
            }}
          >
            {/* <ChatMessageDateBox value="Понедельник 21.07.2024" /> */}
            {mockChat.map((el, index) => {
              return (
                <Fragment key={index}>
                  <ChatMessageTextBox value={el.partyB} party="PARTY_B" />
                  <ChatMessageTextBox value={el.partyA} party="PARTY_A" />
                </Fragment>
              );
            })}
          </Box>
        </Box>

        {/* CONTROL */}
        <Box
          sx={{
            // border: '1px solid red',
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            gap: '20px',
          }}
        >
          <Box sx={{ paddingX: '12px' }}>
            <Input fullWidth />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Button
              sxProps={{ backgroundColor: appUI.colors.mainBlue }}
              backgroundType="filled"
              title="Дополнить"
            />
            <ButtonIcon Icon={Basket} />
            <ButtonIcon Icon={Save} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AnalyzeConflictChatPage;
