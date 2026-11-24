import { Box, Typography } from '@mui/material';
import { colors } from '../theme';
import { reasons } from '../data/content';
import { Section } from './Section';

export function WhyMe() {
  return (
    <Section id="why" labelledBy="why-title" sx={{ bgcolor: colors.mint }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1.5fr' },
          gap: { xs: 5, md: 10 },
          alignItems: 'start',
        }}
      >
        <Box sx={{ position: { md: 'sticky' }, top: { md: 110 } }}>
          <Typography
            component="h2"
            id="why-title"
            sx={{ fontSize: { xs: '1.9rem', md: '2.5rem' }, fontWeight: 800, lineHeight: 1.4, color: colors.ink }}
          >
            چرا همکاری با من؟
          </Typography>
          <Typography sx={{ mt: 1.5, color: colors.muted, fontSize: '1.0625rem' }}>
            وب‌سایت خوب فقط زیبا نیست؛ باید برای کسب‌وکار شما کار کند و برای مشتریانتان ساده باشد
          </Typography>
        </Box>

        <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
          {reasons.map(({ title, description, icon: Icon }) => (
            <Box
              component="li"
              key={title}
              sx={{
                display: 'flex',
                gap: 2.5,
                py: 3,
                borderTop: `1px solid ${colors.line}`,
                '&:first-of-type': { borderTop: 'none', pt: 0 },
              }}
            >
              <Box sx={{ flex: 'none', mt: 0.5, color: colors.turquoise }}>
                <Icon size={30} aria-hidden />
              </Box>
              <Box>
                <Typography component="h3" sx={{ fontSize: '1.15rem', fontWeight: 700, color: colors.ink, lineHeight: 1.7 }}>
                  {title}
                </Typography>
                <Typography sx={{ mt: 0.5, color: colors.muted, fontSize: '0.98rem' }}>{description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
