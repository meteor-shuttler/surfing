module.exports = {
  and: require('./operators/and.js'),
  or: require('./operators/or.js'),
  custom: require('./operators/custom.js'),
  props: require('./operators/props.js'),
  each: require('./operators/each.js'),
  undefined: require('./operators/typing.js').undefined,
  boolean: require('./operators/typing.js').boolean,
  null: require('./operators/typing.js').null,
  nan: require('./operators/typing.js').nan,
  number: require('./operators/typing.js').number,
  string: require('./operators/typing.js').string,
  object: require('./operators/typing.js').object,
  array: require('./operators/typing.js').array,
  function: require('./operators/typing.js').function,
  date: require('./operators/typing.js').date,
  set: require('./operators/set.js'),
  default: require('./operators/default.js'),
  delete: require('./operators/delete.js'),
  equal: require('./operators/comparison.js').equal,
  greater: require('./operators/comparison.js').greater,
  min: require('./operators/comparison.js').min,
  less: require('./operators/comparison.js').less,
  max: require('./operators/comparison.js').max,
  regex: require('./operators/regex.js').regex,
};