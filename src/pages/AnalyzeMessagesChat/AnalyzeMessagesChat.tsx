import { Fragment } from 'react';
import { Box } from '@mui/material';
import { useStores } from '@/store';
import { observer } from 'mobx-react';
import {
  Button,
  ChatMessageTextBox,
  Input,
  ScrollBox,
} from '@/components/atoms';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormikValuesAnalyzeMessagesPageI {
  text: string;
}
const AnalyzeMessagesChatPage = () => {
  const { analyzeMessagesStore } = useStores();
  const { chatHistory } = analyzeMessagesStore;

  const formikSubmit = async (values: FormikValuesAnalyzeMessagesPageI) => {
    await analyzeMessagesStore.postMessage(values.text);
  };

  const formik = useFormik<FormikValuesAnalyzeMessagesPageI>({
    initialValues: {
      text: '',
    },
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: Yup.object().shape({
      text: Yup.string().required('Обязательное поле'),
    }),
    onSubmit: (values) => formikSubmit(values),
  });

  const isChatHistoryExist = Array.isArray(chatHistory) && chatHistory.length;
  const isSubmitButtonDisabled =
    !formik.isValid || analyzeMessagesStore.isFetchingPostMessage;
  const isInputDisabled = analyzeMessagesStore.isFetchingPostMessage;
  // console.log('isSubmitButtonDisabled', {
  //   isValid: formik.isValid,
  //   isFetchingPostMessage: analyzeMessagesStore.isFetchingPostMessage,
  // });

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    formik.setFieldValue('text', target.value);
  };

  return (
    <Box
      sx={{
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        flex: 1,
      }}
    >
      {/* CHAT */}
      <ScrollBox>
        <Box
          sx={{
            // border: '1px solid red',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
          }}
        >
          {isChatHistoryExist &&
            chatHistory.map((el, index) => {
              return (
                <Fragment key={index}>
                  <ChatMessageTextBox value={el.content} party={el.party} />
                </Fragment>
              );
            })}
        </Box>
      </ScrollBox>

      {/* CONTROL */}
      <Box
        sx={{
          // border: '1px solid red',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '20px',
        }}
      >
        <Box sx={{ paddingX: '12px' }}>
          <Input
            fullWidth
            onChange={handleChangeText}
            disabled={isInputDisabled}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Button
            // sxProps={{ backgroundColor: appUI.colors.mainBlue }}
            backgroundType="filled"
            title="Анализ"
            disabled={isSubmitButtonDisabled}
            onClick={formik.submitForm}
          />
          {/* <ButtonIcon Icon={Basket} />
          <ButtonIcon Icon={Save} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default observer(AnalyzeMessagesChatPage);
