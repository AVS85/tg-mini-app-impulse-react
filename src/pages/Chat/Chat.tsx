import { InputMessages } from '@/components/entity';
import { Box } from '@mui/material';

import { observer } from 'mobx-react';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { useStores } from '@/store';
import { ChatMessagesFeed } from '@/components/organisms';
interface FormikValuesChatPageI {
  text: string;
}

const ChatPage = () => {
  const { chatStore } = useStores();
  const { chatHistory } = chatStore;

  const formikSubmit = async (
    values: FormikValuesChatPageI,
    helpers: FormikHelpers<FormikValuesChatPageI>
  ) => {
    await chatStore.postMessage(values.text);
    helpers.resetForm();
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
    onSubmit: (values, helpers) => formikSubmit(values, helpers),
  });

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
        gap: '25px',
        flex: 1,
      }}
    >
      <ChatMessagesFeed listMessages={chatHistory} />

      <Box sx={{ paddingX: '10px' }}>
        <InputMessages
          value={formik.values.text}
          onChange={handleChangeText}
          onSubmitText={formik.submitForm}
        />
      </Box>
    </Box>
  );
};

export default observer(ChatPage);
