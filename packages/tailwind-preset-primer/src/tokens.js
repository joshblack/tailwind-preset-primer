'use strict';

function flatten(tokenMap) {
  return Object.entries(tokenMap).flatMap(([key, value]) => {
    if (typeof value === 'object') {
      return flatten(value).map((nested) => {
        return {
          key: `${key}.${nested.key}`,
          value: nested.value,
        };
      });
    }
    return {
      key,
      value,
    };
  });
}

module.exports = {
  flatten,
};
