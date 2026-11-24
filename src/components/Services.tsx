import { Box, Typography } from '@mui/material';
import { colors } from '../theme';
import { services, type Service } from '../data/content';
import { Section, SectionHeading } from './Section';

function ServiceCard({ service, wide }: { service: Service; wide: boolean }) {
  const Icon = service.icon;

  return (
    <Box
      component="article"
      sx={{
        gridColumn: wide ? { sm: '1 / -1' } : undefined,
        display: 'flex',
        flexDirection: wide ? { xs: 'column', md: 'row' } : 'column',
        alignItems: wide ? { md: 'center' } : 'flex-start',
        gap: wide ? { xs: 2.5, md: 4 } : 2.5,
        p: { xs: 3, md: 3.5 },
        borderRadius: wide ? '28px' : '20px',
        bgcolor: wide ? colors.ink : colors.white,
        color: wide ? colors.white : colors.text,
        border: `1px solid ${wide ? colors.ink : colors.line}`,
        transition: 'transform 200ms ease, border-color 200ms ease',
        '&:hover': { transform: 'translateY(-3px)', borderColor: colors.turquoise },
        '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          flex: 'none',
          width: 52,
          height: 52,
          borderRadius: '16px',
          bgcolor: wide ? 'rgba(46,196,182,0.18)' : colors.mint,
          color: wide ? colors.turquoiseBright : colors.turquoise,
        }}
      >
        <Icon size={26} aria-hidden />
      </Box>
      <Box>
        <Typography component="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.6 }}>
          {service.title}
        </Typography>
        <Typography
          sx={{ mt: 0.75, color: wide ? colors.inkSoft : colors.muted, fontSize: '0.98rem', lineHeight: 1.9 }}
        >
          {service.description}
        </Typography>
      </Box>
    </Box>
  );
}

export function Services() {
  return (
    <Section id="services" labelledBy="services-title" sx={{ bgcolor: colors.paper }}>
      <SectionHeading
        id="services-title"
        title="خدمات"
        intro="هر کسب‌وکار نیاز متفاوتی دارد؛ نوع وب‌سایت را بر اساس هدف و امکانات مورد نیاز شما انتخاب می‌کنیم"
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} wide={index === services.length - 1} />
        ))}
      </Box>
    </Section>
  );
}
