import { Button, Text } from '@/components/atoms';
import { Box } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { appUI } from '@/common/colors';
import { Logo } from '@/components/icons';

const cards = [
  {
    title: 'Базовый',
    subtitle:
      'Лучшее решение чтобы быстро начать использовать все возможности ИИмпульса',
    descriptionItems: [
      'Неограниченный лимит сообщений в чат',
      'Неограниченный лимит разбора конфликтов',
      'Доступ к дневнику эмоций',
    ],
    price: '99',
  },
  {
    title: 'Расширенный',
    subtitle:
      'Лучшее решение чтобы быстро начать использовать все возможности ИИмпульса',
    descriptionItems: [
      'Неограниченный лимит сообщений в чат',
      'Неограниченный лимит разбора конфликтов',
      'Доступ к дневнику эмоций',
      'Доступ к дневнику эмоций',
      'Доступ к дневнику эмоций',
      'Доступ к дневнику эмоций',
    ],
    price: '820',
  },
];

const Subscription = () => {
  return (
    <>
      <Box
        sx={{
          // border: '1px solid red',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // gap: '80px',
            // overflow: 'auto',
            flex: '1',
            padding: '0 20px',
          }}
        >
          <Box
            sx={{
              // border: '1px solid red',
              //   display: 'flex',
              //   flexDirection: 'column',
              //   alignItems: 'center',
              //   gap: '30px',
              width: '0px',
              flex: 1,
            }}
          >
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              style={{
                // display: 'flex',
                // border: '1px solid red',
                height: '100%',
              }}
            >
              {cards.map((card) => {
                return (
                  <SwiperSlide
                    style={{
                      display: 'flex',
                      // alignItems: 'stretch',
                      // border: '2px solid red',
                      // flex: 1,
                      // height: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        // border: '1px solid red',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '50px',
                        background: appUI.colors.gradient1,
                        borderRadius: '16px',
                        // boxShadow: '3px 3px 10.9px 0px #C8CFDD', //TODO поправить обрезку тени слайда
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                        }}
                      >
                        <Logo fill={appUI.colors.mono[100]} />
                      </Box>

                      <Box
                        sx={{
                          // border: '1px solid red',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '40px',
                          flex: 1,
                          padding: '55px 36px 0 33px',
                        }}
                      >
                        <Box
                          component="header"
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                          }}
                        >
                          <Text.h1 color={appUI.colors.white}>
                            {card.title}
                          </Text.h1>
                          <Text.body color={appUI.colors.white} bold>
                            {card.subtitle}
                          </Text.body>
                        </Box>

                        <Box
                          component="main"
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '22px',
                          }}
                        >
                          {card.descriptionItems.map((item) => (
                            <Text.body color={appUI.colors.white}>
                              {item}
                            </Text.body>
                          ))}
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          // border: '1px solid red',
                          // backgroundColor: appUI.colors.mono[100], // TODO: должно быть 100
                          backgroundColor: appUI.colors.mono[200],
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '22px 22px 22px 33px',
                          // boxShadow: '3px 3px 10.9px 0px #C8CFDD',
                          borderRadius: '16px',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <Text.h1 color={appUI.colors.accent[700]} bold>
                            {`${card.price} ₽ / мес`}
                          </Text.h1>
                          <Button
                            title="Выбрать план"
                            backgroundType="filled"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Subscription;
