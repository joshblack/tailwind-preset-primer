'use strict';

const { default: tokens } = require('@primer/primitives');

function getSpacing() {
  const spacing = {};
  const steps = tokens.spacing.normal.spacer
    .map((value) => {
      if (value.endsWith('px')) {
        return {
          unit: 'px',
          value: parseInt(value.replace(/px/, 'px')),
        };
      }
      return {
        unit: 'unitless',
        value: parseInt(value),
      };
    })
    .sort((a, b) => {
      return a.value - b.value;
    })
    .map((step, index) => {
      return {
        ...step,
        index,
      };
    });
  for (const step of steps) {
    spacing[step.index] =
      step.unit === 'unitless' ? `${step.value}` : `${step.value}${step.unit}`;
  }
  return spacing;
}

function getFontSize() {
  const defaultLineHeight = tokens.typography.normal.lineHeight.default;
  const fontSize = {};
  const values = tokens.typography.normal.fontSize.map((value) => {
    const number = parseInt(value.replace(/px/, ''), 10);
    return {
      value: number,
      unit: 'px',
    };
  });
  const steps = values.map((step, index) => {
    if (index === 0) {
      return {
        ...step,
        name: 'xs',
      };
    }

    if (index === 1) {
      return {
        ...step,
        name: 'sm',
      };
    }

    if (index === 2) {
      return {
        ...step,
        name: 'base',
      };
    }

    if (index === 4) {
      return {
        ...step,
        name: 'lg',
      };
    }

    if (index === 5) {
      return {
        ...step,
        name: 'xl',
      };
    }

    return {
      ...step,
      name: `${index - 4}xl`,
    };
  });

  for (const step of steps) {
    fontSize[step.name] = [`${step.value}${step.unit}`, defaultLineHeight];
  }

  return fontSize;
}

module.exports = {
  theme: {
    spacing: getSpacing(),
    fontSize: getFontSize(),
    lineHeight: {
      'condensed-ultra': tokens.typography.normal.lineHeight.condensedUltra,
      condensed: tokens.typography.normal.lineHeight.condensed,
      default: tokens.typography.normal.lineHeight.default,
    },
  },
};
