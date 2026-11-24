import type { ReactNode } from 'react';
import { Box, Container, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { colors } from '../theme';

interface SectionProps {
  id: string;
  labelledBy: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export function Section({ id, labelledBy, children, sx }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={labelledBy}
      sx={[
        { scrollMarginTop: '68px', py: { xs: 8, md: 12 } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}

interface SectionHeadingProps {
  id: string;
  title: string;
  intro?: string;
  dark?: boolean;
}

export function SectionHeading({ id, title, intro, dark = false }: SectionHeadingProps) {
  return (
    <Box sx={{ maxWidth: 640, mb: { xs: 5, md: 7 } }}>
      <Typography
        component="h2"
        id={id}
        sx={{
          fontSize: { xs: '1.9rem', md: '2.5rem' },
          fontWeight: 800,
          lineHeight: 1.4,
          color: dark ? colors.white : colors.ink,
        }}
      >
        {title}
      </Typography>
      {intro && (
        <Typography sx={{ mt: 1.5, color: dark ? colors.inkSoft : colors.muted, fontSize: '1.0625rem' }}>
          {intro}
        </Typography>
      )}
    </Box>
  );
}
