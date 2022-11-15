var BN = require('bn.js');

var isBN = function (object) {
  return BN.isBN(object);
};

function toPlainString(num) {
  return ('' + +num).replace(
    /(-?)(\d*)\.?(\d*)e([+-]\d+)/,
    function (a, b, c, d, e) {
      return e < 0
        ? b + '0.' + Array(1 - e - c.length).join(0) + c + d
        : b + c + d + Array(e - d.length + 1).join(0);
    }
  );
}

const fromWei = (value, decimal) => {
  if (!isBN(value) && !(typeof value === 'string')) {
    throw new Error(
      'Please pass numbers as strings or BN objects to avoid precision errors.'
    );
  }

  let total = toPlainString(value / 10 ** decimal);

  return total.toLocaleString().split(',').join('');
};

const toWei = (value, decimal) => {
  if (!isBN(value) && !(typeof value === 'string')) {
    throw new Error(
      'Please pass numbers as strings or BN objects to avoid precision errors.'
    );
  }

  let total = value * 10 ** decimal;

  return total.toLocaleString().split(',').join('');
};

module.exports = {
  fromWei,
  toWei,
};
