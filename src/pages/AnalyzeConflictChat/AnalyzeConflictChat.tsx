import { Box } from '@mui/material';
import { useStores } from '@/store';
import { observer } from 'mobx-react';
import { Button, Input } from '@/components/atoms';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { ChatMessagesFeed } from '@/components/organisms';
interface FormikValuesAnalyzeMessagesPageI {
  text: string;
}

const AnalyzeConflictChatPage = () => {
  const { analyzeConflictStore } = useStores();
  const { chatHistory } = analyzeConflictStore;

  const formikSubmit = async (
    values: FormikValuesAnalyzeMessagesPageI,
    helpers: FormikHelpers<FormikValuesAnalyzeMessagesPageI>
  ) => {
    await analyzeConflictStore.postMessage(values.text);
    helpers.resetForm();
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
    onSubmit: (values, helpers) => formikSubmit(values, helpers),
  });

  const isSubmitButtonDisabled =
    !formik.isValid || analyzeConflictStore.isFetchingPostMessage;
  const isInputDisabled = analyzeConflictStore.isFetchingPostMessage;

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

// const WelcomeLayer = (props: WelcomeLayerPropsI) => {
//   const { onClick } = props;
//   return (
//     <Box
//       sx={{
//         border: '1px solid red',

//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '40px',
//         overflow: 'auto',
//       }}
//     >
//       <WelcomeBox title="Анализ конфликтов позволит вам лучше понять собеседника и разобраться в возникающих разногласиях" />
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

export default observer(AnalyzeConflictChatPage);
