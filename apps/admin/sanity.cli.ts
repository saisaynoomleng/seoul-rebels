import { defineCliConfig } from '@sanity/cli';

export default defineCliConfig({
  typegen: {
    path: './src/**/*.{js,ts,jsx,tsx}',
    schema: './src/sanity/schema.json',
    generates: './src/sanity/types.ts',
  },
});
