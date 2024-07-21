/** @type {import('next').NextConfig} */

// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { theme } = require('./.sass/generateTheme');

// eslint-disable-next-line no-undef
module.exports = {
  sassOptions: {
    // eslint-disable-next-line no-undef
    includePaths: [path.join(__dirname, 'styles')],
    prependData: theme().join(' '),
  },
};
