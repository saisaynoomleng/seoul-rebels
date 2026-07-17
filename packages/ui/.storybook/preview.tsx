import type { Preview } from '@storybook/react-vite';
import '../src/globals.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Toaster } from '../src/components/ui/sonner';
import { SidebarProvider, SidebarTrigger } from '../src/components/ui/sidebar';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => {
      return (
        <>
          <SidebarProvider>
            <SidebarTrigger />
            <Story />
            <Toaster richColors position="bottom-center" closeButton />
          </SidebarProvider>
        </>
      );
    },
  ],
};

export default preview;
