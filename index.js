var BN = require('bn.js');

var isBN = function (object) {
  return BN.isBN(object);
};

const fromWei = (value, decimal) => {
  if (!isBN(value) && !(typeof value === 'string')) {
    throw new Error(
      'Please pass numbers as strings or BN objects to avoid precision errors.'
    );
  }

  let total = value / 10 ** decimal;

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
