import { Box, Typography } from '@mui/material';
import { colors } from '../theme';
import { skillGroups } from '../data/content';
import { Section, SectionHeading } from './Section';

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" sx={{ bgcolor: colors.white, borderTop: `1px solid ${colors.line}` }}>
      <SectionHeading
        id="skills-title"
        title="مهارت‌ها و تکنولوژی‌ها"
        intro="ابزارها و فناوری‌هایی که برای ساخت وب‌سایت شما به کار می‌گیرم."
      />

      <Box component="div" role="list">
        {skillGroups.map((group) => (
          <Box
            key={group.name}
            role="listitem"
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '300px 1fr' },
              gap: { xs: 2, md: 4 },
              py: { xs: 3, md: 3.5 },
              borderTop: `1px solid ${colors.line}`,
              '&:last-of-type': { borderBottom: `1px solid ${colors.line}` },
            }}
          >
            <Box>
              <Typography component="h3" dir="ltr" sx={{ fontSize: '1.15rem', fontWeight: 800, color: colors.ink, textAlign: 'start' }}>
                {group.name}
              </Typography>
              <Typography sx={{ mt: 0.5, color: colors.muted, fontSize: '0.92rem', lineHeight: 1.8 }}>
                {group.caption}
              </Typography>
            </Box>

            <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25, m: 0, p: 0, listStyle: 'none' }}>
              {group.items.map(({ name, icon: Icon }) => (
                <Box
                  component="li"
                  key={name}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.1,
                    px: 2,
                    py: 1,
                    borderRadius: 999,
                    bgcolor: colors.paper,
                    border: `1px solid ${colors.line}`,
                    color: colors.ink,
                    fontWeight: 600,
                    fontSize: '0.98rem',
                    transition: 'border-color 160ms ease, background-color 160ms ease',
                    '&:hover': { borderColor: colors.turquoise, bgcolor: colors.mint },
                    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                  }}
                >
                  <Box component="span" sx={{ display: 'inline-flex', color: colors.turquoise }}>
                    <Icon size={20} aria-hidden />
                  </Box>
                  <Box component="bdi" dir="ltr">
                    {name}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
