import { Box, Typography } from '@mui/material';
import { Mail, Phone } from 'lucide-react';
import { colors } from '../theme';
import { emailHref, phoneHref, siteConfig } from '../data/siteConfig';
import { Section, SectionHeading } from './Section';
import type { IconComponent } from '../data/content';

interface ContactRowProps {
  href: string;
  label: string;
  value: string;
  icon: IconComponent;
}

function ContactRow({ href, label, value, icon: Icon }: ContactRowProps) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2.5,
        p: { xs: 2.5, md: 3.5 },
        borderRadius: '24px',
        border: '1.5px solid rgba(255,255,255,0.18)',
        color: colors.white,
        transition: 'border-color 180ms ease, background-color 180ms ease',
        '&:hover': { borderColor: colors.saffron, bgcolor: 'rgba(255,255,255,0.05)' },
        '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          flex: 'none',
          width: 56,
          height: 56,
          borderRadius: '50%',
          bgcolor: colors.saffron,
          color: colors.ink,
        }}
      >
        <Icon size={26} aria-hidden />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ color: colors.inkSoft, fontSize: '0.95rem' }}>{label}</Typography>
        <Typography
          dir="ltr"
          sx={{
            textAlign: 'start',
            fontSize: { xs: '1.2rem', sm: '1.6rem', md: '1.9rem' },
            fontWeight: 700,
            lineHeight: 1.5,
            overflowWrap: 'anywhere',
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      labelledBy="contact-title"
      sx={{
        bgcolor: colors.ink,
        '--focus': colors.saffron,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <SectionHeading
        id="contact-title"
        dark
        title="تماس "
        intro="ایده‌تان را بگویید؛ از همین‌جا شروع می‌کنیم. با یک تماس یا یک ایمیل می‌توانید با من در ارتباط باشید."
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 2.5,
        }}
      >
        <ContactRow href={phoneHref} label="شماره تماس" value={siteConfig.phone} icon={Phone} />
        <ContactRow href={emailHref} label="ایمیل" value={siteConfig.email} icon={Mail} />
      </Box>
    </Section>
  );
}
