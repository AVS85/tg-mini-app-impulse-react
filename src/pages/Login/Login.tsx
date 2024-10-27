// import { List } from '@telegram-apps/telegram-ui';
import { appUI } from '@/common/colors';
import { RouterPathEnum } from '@/components/App';
import { Button, ButtonIcon, ContentBox, Text } from '@/components/atoms';
import { Plus } from '@/components/icons';
import { WelcomeBox } from '@/components/molecules';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        overflow: 'auto',
      }}
    >
      <WelcomeBox
        title="Добро пожаловать"
        subtitle="Зарегистрируйтесь, чтобы начать полноценное общение с импульсом"
      />
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

const AnalyzeConflictPage = () => {
  const navigate = useNavigate();
  const [isDisplayWelcomeLayer, setIsDisplayWelcomeLayer] = useState(true);

  const handleClickStart = () => setIsDisplayWelcomeLayer((bool) => !bool);
  const handleCreateConflict = () =>
    navigate(RouterPathEnum.ANALYZE_CONFLICT_CHAT);
  return (
    <>
      <Box
        sx={{
          // outline: '1px solid grey', //TODO delete
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          width: '100%',
        }}
      >
        {isDisplayWelcomeLayer && <WelcomeLayer onClick={handleClickStart} />}
        {!isDisplayWelcomeLayer && (
          <ConflictListLayer onClick={handleCreateConflict} />
        )}
      </Box>
    </>
  );
};

export default AnalyzeConflictPage;
