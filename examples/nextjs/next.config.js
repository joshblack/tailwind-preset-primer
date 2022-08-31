'use strict';

const deployment = {};
if (process.env.CI) {
  deployment.assetsPrefix = '/tailwind-preset-primer';
  deployment.basePath = '/tailwind-preset-primer';
}

module.exports = {
  ...deployment,
};
