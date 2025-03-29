import type { Preview } from '@storybook/react';
import '../src/app/vars.css';
import '../src/app/shared.module.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;