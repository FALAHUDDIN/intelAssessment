// import { ToastCustom } from '../alert/Alert';

// export const ValidateInputToast = (input: any, fieldName: string) => {
//   return new Promise((resolve, reject) => {
//     if (input.trim() === '') {
//       ToastCustom(`Please enter ${fieldName}`, 'warning', 2000);
//       reject(false);
//     } else {
//       resolve(true);
//     }
//   });
// };

// export const ValidateEmailToast = (input: string) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return new Promise((resolve, reject) => {
//     const emailTest = emailRegex.test(input);
//     if (!emailTest) {
//       ToastCustom('Email is not valid', 'warning', 2000);
//       reject(false);
//     } else {
//       resolve(true);
//     }
//   });
// };

// export const ValidatePasswordToast = (input1: string, input2: string, length: number) => {
//   const passwordSpaceRegex = /\s/;
//   const passwordRegex = new RegExp(`^(?=.*[\\W_])(?=.{${length},})`);
//   return new Promise((resolve, reject) => {
//     const passwordCompare = input1 !== input2;
//     const passwordSpaceRegexTest = passwordSpaceRegex.test(input1);
//     const passwordRegexTest = passwordRegex.test(input1);
//     if (!passwordRegexTest) {
//       ToastCustom(
//         `Passwords need a minimum of ${length} characters and at least one symbol`,
//         'warning',
//         2000
//       );
//       reject(false);
//     } else if (passwordSpaceRegexTest) {
//       ToastCustom('Password contain white space', 'warning', 2000);
//       reject(false);
//     } else if (passwordCompare) {
//       ToastCustom('Confirm password do not match', 'warning', 2000);
//       reject(false);
//     }
//     resolve(true);
//   });
// };
