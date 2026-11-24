import { CacheProvider } from '@emotion/react';
import { Box, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { colors, rtlCache, theme } from './theme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { WhyMe } from './components/WhyMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ':root': { '--focus': colors.turquoise },
            html: { scrollBehavior: 'smooth' },
            '@media (prefers-reduced-motion: reduce)': {
              html: { scrollBehavior: 'auto' },
            },
            body: { fontFamily: theme.typography.fontFamily, textRendering: 'optimizeLegibility' },
            '::selection': { background: colors.saffron, color: colors.ink },
          }}
        />

        <Box
          component="a"
          href="#main"
          sx={{
            position: 'absolute',
            insetInlineStart: 12,
            top: -60,
            zIndex: 2000,
            bgcolor: colors.ink,
            color: colors.white,
            px: 2,
            py: 1,
            borderRadius: 2,
            fontWeight: 700,
            '&:focus': { top: 12 },
          }}
        >
          پرش به محتوای اصلی
        </Box>

        <Header />
        <Box component="main" id="main">
          <Hero />
          <Services />
          <Skills />
          <WhyMe />
          <Contact />
        </Box>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
