// import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

// export const ToastCustom = (message: string, type: string, time: number) => {
//   Toast.show({
//     type:
//       type === 'success'
//         ? ALERT_TYPE.SUCCESS
//         : type === 'warning'
//         ? ALERT_TYPE.WARNING
//         : type === 'danger'
//         ? ALERT_TYPE.DANGER
//         : ALERT_TYPE.SUCCESS,
//     textBody: message,
//     autoClose: time,
//   });
// };

// export const ToastError = (error: any) => {
//   if (error && error.message.includes('Firebase')) {
//     const errorMessage = error.message.split('Firebase: ')[1];
//     ToastCustom(errorMessage, 'danger', 2000);
//   } else if (error !== false && error.message !== '') {
//     ToastCustom(error.message, 'danger', 2000);
//   }
// };
