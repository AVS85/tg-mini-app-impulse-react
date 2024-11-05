import {
  // Button,
  // ChatMessageDateBox,
  ChatMessageTextBox,
  ScrollBox,
} from '@/components/atoms';
import { InputMessages } from '@/components/entity';
import { Box } from '@mui/material';

import { Fragment } from 'react/jsx-runtime';
import { observer } from 'mobx-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useStores } from '@/store';
interface FormikValuesChatPageI {
  text: string;
}

const ChatPage = () => {
  const { chatStore } = useStores();
  const { chatHistory } = chatStore;

  const formikSubmit = async (values: FormikValuesChatPageI) => {
    await chatStore.postMessage(values.text);
  };

  const formik = useFormik<FormikValuesChatPageI>({
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

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    formik.setFieldValue('text', target.value);
  };

  const isChatHistoryExist = Array.isArray(chatHistory) && chatHistory.length;
  return (
    <Box
      sx={{
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        flex: 1,
      }}
    >
      <ScrollBox>
        {/* <ChatMessageDateBox value="Понедельник 21.07.2024" /> */}
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

      <InputMessages
        onChange={handleChangeText}
        onSubmitText={formik.submitForm}
      />
    </Box>
  );
};

export default observer(ChatPage);
