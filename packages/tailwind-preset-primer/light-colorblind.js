'use strict';

const { default: tokens } = require('@primer/primitives');
const { convert } = require('./src/scale');
const { flatten } = require('./src/tokens');

const { scale, ...ts } = tokens.colors.light_colorblind;

module.exports = {
  presets: [require('./base')],
  theme: {
    colors: {
      ...convert(scale),
      ...flatten(ts).reduce((acc, { key, value }) => {
        return {
          ...acc,
          [key]: value,
        };
      }, {}),
    },
  },
};
