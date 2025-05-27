
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
