let count = 0;
const getData = () => {
  console.log("Fetching data...", count++);
};

let doSomeMagic = function(fn,d) {
  let timer;
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(()=>{
        fn.apply(this,args)
    },d)
  };
};

let betterFunction = doSomeMagic(getData,300)


