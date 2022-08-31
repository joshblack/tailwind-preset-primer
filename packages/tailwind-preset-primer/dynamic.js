'use strict';

const { default: tokens } = require('@primer/primitives');
const { paramCase } = require('change-case');

const { scale, ...ts } = tokens.colors.dark;

const theme = {
  colors: {},
};

for (const [key, value] of Object.entries(scale)) {
  if (typeof value === 'object') {
    theme.colors[key] = {};
    for (let i = 0; i < value.length; i++) {
      theme.colors[key][i] = `var(--color-scale-${key}-${i})`;
    }
  } else {
    theme.colors[key] = `var(--color-scale-${key})`;
  }
}

function flatten(tokenMap) {
  return Object.entries(tokenMap).flatMap(([key, value]) => {
    if (typeof value === 'object') {
      return flatten(value).map((value) => {
        return paramCase(`${key}-${value}`);
      });
    }

    return paramCase(key);
  });
}

flatten(ts).forEach((key) => {
  theme.colors[key] = `var(--color-${key})`;
});

console.log(JSON.stringify(flatten(ts), null, 2));

module.exports = {
  presets: [require('./base')],
  theme,
};
