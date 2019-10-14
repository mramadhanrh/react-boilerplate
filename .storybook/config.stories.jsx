import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.jsx$/),
    require.context('../stories', true, /\.stories\.jsx$/)
  ],
  module
);
