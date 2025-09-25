import type { Config } from 'tailwindcss';
import tokens from './stitch/tokens.json' assert { type: 'json' };

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        secondary: tokens.colors.secondary,
        accent: tokens.colors.accent,
        neutral: tokens.colors.neutral,
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        error: tokens.colors.error,
      },
      borderRadius: tokens.radius,
      boxShadow: tokens.shadows,
      spacing: tokens.spacing,
      transitionDuration: tokens.transitions.duration as Record<string, string>,
      transitionTimingFunction: tokens.transitions.timingFunction as Record<string, string>,
    },
  },
  plugins: [],
};

export default config;
