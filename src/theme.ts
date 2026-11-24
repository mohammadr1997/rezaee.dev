import createCache from '@emotion/cache';
import { createTheme } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

/**
 * پالت: «فیروزه‌ای نیشابور + زعفران»
 * سبز-آبی عمیق به‌عنوان رنگ اصلی، زعفرانی فقط برای اقدام اصلی (CTA).
 */
export const colors = {
  ink: '#0C2B29',
  inkDeep: '#081F1D',
  inkSoft: '#B8D3CF',
  turquoise: '#0B6E6A',
  turquoiseBright: '#2EC4B6',
  mint: '#E3F1EE',
  paper: '#F4F8F7',
  white: '#FFFFFF',
  saffron: '#F4B63F',
  saffronDark: '#E0A12A',
  text: '#12211F',
  muted: '#4B5F5C',
  line: '#D3E2DF',
} as const;

export const fontFamily = [
  '"Vazirmatn Variable"',
  'Vazirmatn',
  'Tahoma',
  'sans-serif',
].join(',');

export const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: { main: colors.turquoise, contrastText: colors.white },
    secondary: { main: colors.saffron, contrastText: colors.ink },
    background: { default: colors.paper, paper: colors.white },
    text: { primary: colors.text, secondary: colors.muted },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily,
    h1: { fontWeight: 800, lineHeight: 1.3, letterSpacing: 0 },
    h2: { fontWeight: 800, lineHeight: 1.4, letterSpacing: 0 },
    h3: { fontWeight: 700, lineHeight: 1.5, letterSpacing: 0 },
    body1: { fontSize: '1.0625rem', lineHeight: 1.95, letterSpacing: 0 },
    body2: { fontSize: '0.95rem', lineHeight: 1.9, letterSpacing: 0 },
    button: { fontWeight: 700, letterSpacing: 0, textTransform: 'none' },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: '3px solid var(--focus, #0B6E6A)',
            outlineOffset: 3,
          },
        },
      },
    },
  },
});
