const receivesAFunction = (spy) => {
    spy();
  };
  
  const returnsANamedFunction = () => {
    return function receivesAFunction(name) {};
  };
  
  function returnsAnAnonymousFunction() {
    return function (name) {
    };
  }