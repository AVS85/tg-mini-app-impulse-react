'use client';

import React from 'react';
import { Tabbar } from '@telegram-apps/telegram-ui';
import {
  AnalyzeConflict,
  AnalyzeMessages,
  Diary,
  Logo,
  Profile,
} from '../../icons';
import { useNavigate } from 'react-router-dom';
import { Box, colors } from '@mui/material';
import { ButtonIcon } from '@/components/atoms';
import { appUI } from '@/common/colors';
import { RouterPathEnum } from '@/components/App';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (index: number, path: string) => {
    setActiveTab(index);
    navigate(path);
    // Здесь можно добавить логику для навигации между экранами
  };
  const listStyle = {
    // backgroundColor: '#f0f0f0',
    border: '1px solid red',
    // padding: '10px',
    // height: '100vh',
    position: 'relative',
  };

  return (
    <Box
      sx={{
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Box>
        <ButtonIcon
          title="Анализ Сообщений"
          Icon={AnalyzeMessages}
          // iconProps={{ fill: 'red' }}
          sxProps={{
            width: '50px',
            height: '50px',
            boxShadow: 0,
          }}
          onClick={() => handleTabChange(0, RouterPathEnum.ANALYZE_MESSAGES)}
        />
      </Box>
      <Box>
        <ButtonIcon
          title="Дневник эмоций"
          Icon={Diary}
          sxProps={{
            width: '50px',
            height: '50px',
            boxShadow: 0,
          }}
          onClick={() => handleTabChange(1, RouterPathEnum.DIARY_EMOTIONS)}
        />
      </Box>
      <Box>
        <ButtonIcon
          Icon={Logo}
          iconProps={{
            // fill: 'red',
            width: '33px',
            height: '28px',
          }}
          sxProps={{
            width: '75px',
            height: '75px',
            boxShadow: 0,
            border: `1px solid ${appUI.colors.mono[200]}`,
            borderRadius: '50%',
          }}
          onClick={() => handleTabChange(2, RouterPathEnum.INDEX)}
        />
      </Box>
      <Box>
        <ButtonIcon
          title="Анализ конфликта"
          Icon={AnalyzeConflict}
          sxProps={{
            width: '50px',
            height: '50px',
            boxShadow: 0,
          }}
          onClick={() => handleTabChange(3, RouterPathEnum.ANALYZE_CONFLICT)}
        />
      </Box>
      <Box>
        <ButtonIcon
          title="Мой профиль"
          Icon={Profile}
          sxProps={{
            width: '50px',
            height: '50px',
            boxShadow: 0,
          }}
          onClick={() => handleTabChange(4, RouterPathEnum.PROFILE)}
        />
      </Box>
    </Box>

    // <Tabbar style={listStyle}>
    //   <Tabbar.Item
    //     onClick={() => handleTabChange(0, '/analyze-messages')}
    //     selected={activeTab === 0}
    //     text="Анализ Сообщений"
    //   >
    //     <AnalyzeMessages />
    //   </Tabbar.Item>

    //   <Tabbar.Item
    //     onClick={() => handleTabChange(1, '/diary')}
    //     selected={activeTab === 1}
    //     text="Дневник эмоций"
    //   >
    //     <Diary />
    //   </Tabbar.Item>

    //   <Tabbar.Item
    //     onClick={() => handleTabChange(2, '/')}
    //     selected={activeTab === 2}
    //   >
    //     <Logo />
    //   </Tabbar.Item>

    //   <Tabbar.Item
    //     onClick={() => handleTabChange(3, '/analyze-conflict')}
    //     selected={activeTab === 3}
    //     text="Анализ конфликта"
    //   >
    //     <AnalyzeConflict />
    //   </Tabbar.Item>

    //   <Tabbar.Item
    //     onClick={() => handleTabChange(4, '/profile')}
    //     selected={activeTab === 4}
    //     text="Мой профиль"
    //   >
    //     <Profile />
    //   </Tabbar.Item>
    // </Tabbar>
  );
};

export default BottomNavigation;
