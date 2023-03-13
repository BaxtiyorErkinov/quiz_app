export const theme = {
  colors: {
    white: {
      main: 'rgba(255, 255, 255)',
      transparent: 'rgba(255, 255, 255, 0.25)',
    },
    dark: {
      100: '#adb5bd',
      200: '#6c757d',
      300: '#495057',
      400: '#343a40',
      500: '#212529',
    },
    green: '#03ca82',
  },
  font: {
    size: {
      sm: '0.75rem',
      bs: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '4rem',
    },
    weight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
} as const;

export type Theme = typeof theme;
