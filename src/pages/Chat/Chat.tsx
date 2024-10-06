import { Header } from '@/components/entity';
import {
  // Section, Cell, Image,
  List,
} from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

// import { Link } from '@/components/Link/Link.tsx';

// import tonSvg from './ton.svg';
// import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';
// import { MainTemplate } from '@/components/templates';

const Chat: FC = () => {
  return (
    <List>
      <Header title="Чат и ИИмпульсом" />

      {/* <MainTemplate>1234</MainTemplate> */}
      {/* <BottomNavigation /> */}
      {/* <Section
        header='Features'
        footer='You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects'
      >
        <Link to='/ton-connect'>
          <Cell
            before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
            subtitle='Connect your TON wallet'
          >
            TON Connect
          </Cell>
        </Link>
      </Section>
      <Section
        header='Application Launch Data'
        footer='These pages help developer to learn more about current launch information'
      >
        <Link to='/init-data'>
          <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
        </Link>
        <Link to='/launch-params'>
          <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
        </Link>
        <Link to='/theme-params'>
          <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
        </Link>
      </Section> */}
    </List>
  );
};

export default Chat;