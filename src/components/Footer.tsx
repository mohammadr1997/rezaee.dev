import { Box, Container, Typography } from '@mui/material';
import { colors } from '../theme';
import { emailHref, phoneHref, siteConfig } from '../data/siteConfig';

const linkSx = {
  color: colors.inkSoft,
  '&:hover': { color: colors.white, textDecoration: 'underline', textUnderlineOffset: 4 },
} as const;

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: colors.inkDeep, color: colors.inkSoft, '--focus': colors.saffron, pt: { xs: 6, md: 8 }, pb: 3 }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr 1.2fr' },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box>
            <Typography sx={{ color: colors.white, fontWeight: 800, fontSize: '1.2rem' }}>{siteConfig.name}</Typography>
            <Typography sx={{ mt: 0.5, color: colors.inkSoft }}>{siteConfig.title}</Typography>
            <Typography sx={{ mt: 1.5, color: colors.saffron, fontWeight: 600 }}>{siteConfig.slogan}</Typography>
          </Box>

          <Box component="nav" aria-label="لینک‌های فوتر">
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', gap: 1,flexDirection:{xs:'column',md:'row'},flexWrap:'wrap' }}>
              {siteConfig.nav.map((item) => (
                <Box component={'li'} sx={{textAlign:{xs:'left'},width:{xs:'100%',md:'45%'},cursor:'pointer'}} key={item.href}>
                  <Box  component="a" href={item.href} sx={linkSx}>
                    {item.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'grid', gap: 1, alignContent: 'start' }}>
            <Box component="a" href={phoneHref} dir="ltr" sx={{ ...linkSx, justifySelf: 'start' }}>
              {siteConfig.phone}
            </Box>
            <Box component="a" href={emailHref} dir="ltr" sx={{ ...linkSx, justifySelf: 'start' }}>
              {siteConfig.email}
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(255,255,255,0.12)', fontSize: '0.9rem' }}>
          © {siteConfig.copyrightYear} {siteConfig.name}. تمامی حقوق محفوظ است.
        </Box>
      </Container>
    </Box>
  );
}
