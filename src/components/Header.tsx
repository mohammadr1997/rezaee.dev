import { useEffect, useState } from 'react';
import { Box, Button, Collapse, Container, IconButton } from '@mui/material';
import { Menu as MenuIcon, X } from 'lucide-react';
import { colors } from '../theme';
import { siteConfig } from '../data/siteConfig';
import { ProfileAvatar } from './ProfileAvatar';

const linkSx = {
  color: colors.text,
  fontWeight: 600,
  borderRadius: 2,
  px: 1.75,
  '&:hover': { bgcolor: colors.mint, color: colors.turquoise },
} as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <Box
      component="header"
      style={{ position: 'sticky', top: 0, zIndex: 1100 }}
      sx={{
        bgcolor: 'rgba(244, 248, 247, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${colors.line}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68, gap: 2 }}>
          <Box
            component="a"
            href="#home"
            onClick={close}
            sx={{ display: 'flex', alignItems: 'center', gap: 1.25, color: colors.ink, fontWeight: 800 }}
          >
            <Box sx={{ width: 38, height: 38, flex: 'none' }}>
              <ProfileAvatar />
            </Box>
            <Box component="span" sx={{ fontSize: '1.02rem' }}>
              {siteConfig.name}
            </Box>
          </Box>

          <Box
            component="nav"
            aria-label="منوی اصلی"
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}
          >
            {siteConfig.nav.map((item) => (
              <Button key={item.href} component="a" href={item.href} sx={linkSx}>
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              component="a"
              href={siteConfig.cta.href}
              variant="contained"
              disableElevation
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                bgcolor: colors.ink,
                color: colors.white,
                borderRadius: 999,
                px: 2.75,
                '&:hover': { bgcolor: colors.turquoise },
              }}
            >
              {siteConfig.cta.label}
            </Button>
            <IconButton
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              sx={{ display: { md: 'none' }, color: colors.ink, width: 46, height: 46 }}
            >
              {open ? <X size={26} aria-hidden /> : <MenuIcon size={26} aria-hidden />}
            </IconButton>
          </Box>
        </Box>
      </Container>

      <Collapse in={open} timeout="auto" unmountOnExit sx={{ display: { md: 'none' } }}>
        <Box
          id="mobile-menu"
          component="nav"
          aria-label="منوی موبایل"
          sx={{ borderTop: `1px solid ${colors.line}`, bgcolor: colors.paper, py: 1.5 }}
        >
          <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {siteConfig.nav.map((item) => (
              <Button
                key={item.href}
                component="a"
                href={item.href}
                onClick={close}
                sx={{ ...linkSx, justifyContent: 'flex-start', py: 1.5, fontSize: '1.05rem' }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              component="a"
              href={siteConfig.cta.href}
              onClick={close}
              variant="contained"
              disableElevation
              sx={{
                mt: 1,
                py: 1.4,
                bgcolor: colors.saffron,
                color: colors.ink,
                borderRadius: 3,
                '&:hover': { bgcolor: colors.saffronDark },
              }}
            >
              {siteConfig.cta.label}
            </Button>
          </Container>
        </Box>
      </Collapse>
    </Box>
  );
}
