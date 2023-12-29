// // Callback hell
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if(getNextData){
//         getNextData()
//     }
//   }, 2000);
// }

// // Callback hell
// getData(1, () => {
//     console.log('getting data2...')
//   getData(2, () => {
//     console.log('getting data3...')
//     getData(3, () => {
//         console.log('getting data4...')
//       getData(4, () => {});
//     });
//   });
// });

// Promises
// let promise = new Promise((resolve, reject) => {
//   console.log("This is a promise");
//   resolve("success");
// });

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   console.log("data", dataId);
      reject("error")
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
