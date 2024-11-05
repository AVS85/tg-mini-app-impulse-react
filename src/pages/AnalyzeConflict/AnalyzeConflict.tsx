import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { RouterPathEnum } from '@/components/App';
import { WelcomeBox } from '@/components/molecules';
import { Button, Input } from '@/components/atoms';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { useStores } from '@/store';

interface FormikValuesAnalyzeConflictsPageI {
  text: string;
}

const AnalyzeConflictPage = () => {
  const { analyzeConflictStore } = useStores();
  const navigate = useNavigate();

  const formikSubmit = async (values: FormikValuesAnalyzeConflictsPageI) => {
    await analyzeConflictStore.postMessage(values.text);
    navigate(RouterPathEnum.ANALYZE_CONFLICT_CHAT);
  };

  const formik = useFormik<FormikValuesAnalyzeConflictsPageI>({
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
    !formik.isValid || analyzeConflictStore.isFetchingPostMessage;

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
        <WelcomeBox subtitle="Анализ конфликтов позволит вам лучше понять собеседника и разобраться в возникающих разногласиях" />
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
              title="Разобрать"
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

// const WelcomeLayer = (props: WelcomeLayerPropsI) => {
//   const { onClick } = props;
//   return (
//     <Box
//       sx={{
//         // border: '1px solid red',

//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '40px',
//         overflow: 'auto',
//       }}
//     >
//       <WelcomeBox subtitle="Анализ конфликтов позволит вам лучше понять собеседника и разобраться в возникающих разногласиях" />
//       <Button
//         title="Разобрать конфликт"
//         backgroundType="filled"
//         onClick={onClick}
//       />
//     </Box>
//   );
// };

// const ConflictListLayer = (props: ConflictListLayerPropsI) => {
//   const { onClick } = props;
//   const mockConflictList = [
//     {
//       id: 1,
//       title: 'Конфликт 1',
//       date: '13/03',
//     },
//     {
//       id: 2,
//       title: 'Конфликт 2',
//       date: '22/07',
//     },
//     {
//       id: 3,
//       title: 'Конфликт 3',
//       date: '07/12',
//     },
//   ];
//   return (
//     <Box
//       sx={{
//         // border: '1px solid green',
//         display: 'flex',
//         flex: 1,
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           // border: '1px solid red',
//           flex: 1,
//           flexDirection: 'column',
//           gap: '30px',
//         }}
//       >
//         {mockConflictList.map((conflict) => (
//           <>
//             <ContentBox>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   flex: 1,
//                   alignItems: 'center',
//                 }}
//               >
//                 <Text.h2>{conflict.title}</Text.h2>
//                 <Text.subtitle color={appUI.colors.mono[400]}>
//                   {conflict.date}
//                 </Text.subtitle>
//               </Box>
//             </ContentBox>
//           </>
//         ))}
//         <Box
//           sx={{
//             // border: '1px solid red',
//             display: 'flex',
//             justifyContent: 'center',
//           }}
//         >
//           <ButtonIcon
//             Icon={Plus}
//             backgroundType="filled"
//             iconProps={{
//               fill: appUI.colors.white,
//             }}
//             onClick={onClick}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

export default AnalyzeConflictPage;
