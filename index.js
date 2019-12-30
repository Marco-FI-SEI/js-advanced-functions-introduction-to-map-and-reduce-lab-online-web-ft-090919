const mapToNegativize = (arr) => {
  const newArr = [];

  for (let el of arr) {
    el *= -1;
    newArr.push(el);
  }

  return newArr;
};

const mapToNoChange = (arr) => {
  const newArr = [];

  for (let el of arr) {
    newArr.push(el);
  }

  return newArr;
};

const mapToDouble = (arr) => {
  const newArr = [];

  for (let el of arr) {
    el *= 2;
    newArr.push(el);
  }

  return newArr;
};

const mapToSquare = (arr) => {
  const newArr = [];

  for (let el of arr) {
    el *= el;
    newArr.push(el);
  }

  return newArr;
};

const reduceToTotal = (arr, newVal = 0) => {

  for (let el of arr) {
    newVal += el;
  }

  return newVal;
};

const reduceToAllTrue = (arr) => {
  let isTruthy = true;

  for (let el of arr) {
    if (!el) {
      isTruthy = false;
    }
  }

  return isTruthy;
};

const reduceToAnyTrue = (arr) => {
  let isTruthy = false;

  for (let el of arr) {
    if (!!el) {
      isTruthy = true;
    }
  }

  return isTruthy;
};
