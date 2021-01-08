import { ResponseError } from 'umi-request';

export const request = {
  // prefix: '/api',
  prefix: '/mockapi',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  errorHandler(error: ResponseError) {
    console.error(error);
  }
};
// export const dva = {
//   config: {
//     onError(err) {
//       err.preventDefault();
//       console.error(err.message);
//     },
//   },
// };
