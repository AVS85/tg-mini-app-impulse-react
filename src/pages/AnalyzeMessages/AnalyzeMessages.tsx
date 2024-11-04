import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { RouterPathEnum } from '@/components/App';
import { WelcomeBox } from '@/components/molecules';
import { Button, Input } from '@/components/atoms';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { useStores } from '@/store';

interface FormikValuesAnalyzeMessagesPageI {
  text: string;
}

const AnalyzeMessagesPage = () => {
  const { analyzeMessagesStore } = useStores();
  const navigate = useNavigate();

  const formikSubmit = async (values: FormikValuesAnalyzeMessagesPageI) => {
    await analyzeMessagesStore.postMessage(values.text);
    navigate(RouterPathEnum.ANALYZE_MESSAGES_CHAT);
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

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    formik.setFieldValue('text', target.value);
  };

  return (
    <FormikProvider value={formik}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '80px',
          overflow: 'auto',
          flex: 1,
        }}
      >
        <WelcomeBox />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            boxSizing: 'content-box',
            alignItems: 'center',
          }}
        >
          <Input
            fullWidth
            onChange={handleChangeText}
            defaultValue={formik.values.text}
          />
          <Box>
            <Button
              title="Анализ"
              backgroundType="filled"
              disabled={isSubmitButtonDisabled}
              onClick={formik.submitForm}
            />
          </Box>
        </Box>
      </Box>
    </FormikProvider>
  );
};

export default AnalyzeMessagesPage;
