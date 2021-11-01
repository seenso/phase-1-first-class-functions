let receivesAFunction = (cb) => {
  cb();
};

let returnsANamedFunction = () => {
  return function fn() {};
};

let returnsAnAnonymousFunction = () => {
  return () => {};
};