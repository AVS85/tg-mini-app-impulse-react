'use client';

import React from 'react';
import { Tabbar } from '@telegram-apps/telegram-ui';
import {
  AnalyzeConflict,
  AnalyzeMessages,
  Diary,
  Logo,
  Profile,
} from '../icons';
import { useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (index: number, path: string) => {
    setActiveTab(index);
    navigate(path);
    // Здесь можно добавить логику для навигации между экранами
  };

  return (
    <Tabbar>
      <Tabbar.Item
        onClick={() => handleTabChange(0, '/analyze-messages')}
        selected={activeTab === 0}
        text="Анализ Сообщений"
      >
        <AnalyzeMessages />
      </Tabbar.Item>

      <Tabbar.Item
        onClick={() => handleTabChange(1, '/diary')}
        selected={activeTab === 1}
        text="Дневник эмоций"
      >
        <Diary />
      </Tabbar.Item>

      <Tabbar.Item
        onClick={() => handleTabChange(2, '/')}
        selected={activeTab === 2}
      >
        <Logo />
      </Tabbar.Item>

      <Tabbar.Item
        onClick={() => handleTabChange(3, '/analyze-conflict')}
        selected={activeTab === 3}
        text="Анализ конфликта"
      >
        <AnalyzeConflict />
      </Tabbar.Item>

      <Tabbar.Item
        onClick={() => handleTabChange(4, '/profile')}
        selected={activeTab === 4}
        text="Мой профиль"
      >
        <Profile />
      </Tabbar.Item>
    </Tabbar>
  );
};

export default BottomNavigation;
