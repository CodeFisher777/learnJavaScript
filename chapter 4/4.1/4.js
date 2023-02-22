let obj = {
  w: 200,
  h: 300,
  k: '123',
};
const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
};
multiplyNumeric(obj);
