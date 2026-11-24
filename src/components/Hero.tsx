import { Box, Button, Container, Typography } from '@mui/material';
import { colors } from '../theme';
import { siteConfig } from '../data/siteConfig';
import { HeroMockup } from './HeroMockup';

export function Hero() {
  return (
    <Box
      component="section"
      id="home"
      aria-labelledby="hero-title"
      sx={{
        scrollMarginTop: '68px',
        position: 'relative',
        overflow: 'clip',
        bgcolor: colors.ink,
        color: colors.white,
        '--focus': colors.saffron,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        py: { xs: 7, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 1fr' },
            gap: { xs: 7, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              component="h1"
              id="hero-title"
              sx={{ fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' }, fontWeight: 800, lineHeight: 1.3 }}
            >
              {siteConfig.title}
            </Typography>
            <Typography
              sx={{
                mt: 2.5,
                fontSize: { xs: '1.4rem', md: '1.8rem' },
                fontWeight: 700,
                lineHeight: 1.6,
                color: colors.saffron,
              }}
            >
              {siteConfig.slogan}
            </Typography>
            <Typography sx={{ mt: 2.5, maxWidth: 520, color: colors.inkSoft, fontSize: '1.1rem', lineHeight: 2 }}>
              {siteConfig.heroDescription}
            </Typography>

            <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap', gap: 1.75 }}>
              <Button
                component="a"
                href={siteConfig.cta.href}
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: colors.saffron,
                  color: colors.ink,
                  borderRadius: 999,
                  px: 4,
                  py: 1.4,
                  fontSize: '1.05rem',
                  '&:hover': { bgcolor: colors.saffronDark },
                }}
              >
                {siteConfig.cta.label}
              </Button>
              <Button
                component="a"
                href={siteConfig.secondaryCta.href}
                variant="outlined"
                sx={{
                  color: colors.white,
                  borderColor: 'rgba(255,255,255,0.45)',
                  borderWidth: 1.5,
                  borderRadius: 999,
                  px: 4,
                  py: 1.4,
                  fontSize: '1.05rem',
                  '&:hover': { borderColor: colors.white, borderWidth: 1.5, bgcolor: 'rgba(255,255,255,0.08)' },
                }}
              >
                {siteConfig.secondaryCta.label}
              </Button>
            </Box>
          </Box>

          <HeroMockup />
        </Box>
      </Container>
    </Box>
  );
}
