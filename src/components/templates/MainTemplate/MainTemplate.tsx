'use client';

import React from 'react';
// import { Tabbar } from '@telegram-apps/telegram-ui';
// import {
//   AnalyzeConflict,
//   AnalyzeMessages,
//   Diary,
//   Logo,
//   Profile,
// } from '../icons';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { BottomNavigation } from '@/components/entity';

interface MainTemplateProps {
  header?: React.ReactNode;
  // children: React.ReactNode;
}

const MainTemplate = (props: MainTemplateProps) => {
  // const { header } = props;
  return (
    <Box sx={{ border: '1px solid grey' }}>
      {/* <Box component="header">
        <Header title="123" />
      </Box> */}
      <Box component="main">
        <Outlet />
      </Box>
      <BottomNavigation />
    </Box>
  );
};

export default MainTemplate;
