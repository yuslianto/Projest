import axios from 'axios';

// export function allCourses() {
//     return {
//         type: "ALL_COURSES",
//         payload: [
//             {id: 1, courses: "React Native"}
//         ]
//     }
// };

// const allCourses = () => {
//     // data simulation
//     const courses= [
//       { id: 1, title: 'React Native' },
//       { id: 2, title: 'React JS' }
//     ];
//     return {
//       type: 'ALL_COURSES',
//       payload: {
//         courses: courses
//       }
//     }
//   }
  
//   export {
//     allCourses
//   }

export function createPayment(data){
  return {
    type: "CREATE_PAYMENT",
    payload: axios.post('https://api.backendless.com/34C6DE32-294B-A115-FF02-CB849A7D9C00/90304B5E-2F83-8CA6-FFB5-770108CE2F00/data/payment', data)
  }
}