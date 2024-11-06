import { Box } from '@mui/material';
import { useStores } from '@/store';
import { observer } from 'mobx-react';
import { Button, Input } from '@/components/atoms';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChatMessagesFeed } from '@/components/organisms';

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

  const isSubmitButtonDisabled =
    !formik.isValid || analyzeMessagesStore.isFetchingPostMessage;
  const isInputDisabled = analyzeMessagesStore.isFetchingPostMessage;

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

      <Box
        sx={{
          // border: '1px solid red',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '20px',
        }}
      >
        <Box sx={{ paddingX: '20px' }}>
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
