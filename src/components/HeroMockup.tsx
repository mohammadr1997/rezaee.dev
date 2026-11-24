import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import { colors } from '../theme';

import { ProfileAvatar } from './ProfileAvatar';

const appear = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.96); }
  to   { opacity: 1; transform: none; }
`;

/** هر بلوک اسکلت سایت به‌ترتیب ظاهر می‌شود؛ تنها حرکت خودکار صفحه. */
const block = (index: number, extra: object = {}) => ({
  bgcolor: colors.mint,
  borderRadius: '10px',
  animation: `${appear} 650ms cubic-bezier(0.2, 0.7, 0.2, 1) both`,
  animationDelay: `${250 + index * 140}ms`,
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
  ...extra,
});

/**
 * قاب مرورگر که در حال «ساخته‌شدن» یک سایت است؛ تصویر شخصی روی گوشه قاب نشسته است.
 * کل مجموعه تزئینی است و برای فناوری‌های کمکی پنهان می‌شود (aria-hidden)، به‌جز عکس.
 */
export function HeroMockup() {
  return (
    <Box sx={{ position: 'relative', pb: { xs: 5, md: 6 }, mx: 'auto', maxWidth: 520, width: '100%' }}>
      <Box
        aria-hidden
        sx={{
          bgcolor: colors.white,
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: '0 40px 70px -30px rgba(0, 0, 0, 0.65)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.25,
            height: 44,
            px: 2,
            bgcolor: colors.mint,
            borderBottom: `1px solid ${colors.line}`,
          }}
        >
          <Box sx={{ display: 'flex', gap: 0.75 }}>
            {[colors.line, colors.line, colors.saffron].map((c, i) => (
              <Box key={i} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
            ))}
          </Box>
          <Box
            dir="ltr"
            sx={{
              flex: 1,
              mx: 1,
              py: 0.4,
              textAlign: 'center',
              fontSize: '0.75rem',
              color: colors.muted,
              bgcolor: colors.white,
              borderRadius: 999,
            }}
          >
            your-business.ir
          </Box>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, display: 'grid', gap: 1.75 }}>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
            <Box sx={block(0, { width: 56, height: 14 })} />
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[0, 1, 2].map((i) => (
                <Box key={i} sx={block(1, { width: 34, height: 14 })} />
              ))}
            </Box>
          </Box>
          <Box sx={block(2, { height: 22, width: '72%', bgcolor: colors.turquoise })} />
          <Box sx={block(3, { height: 12, width: '88%' })} />
          <Box sx={block(4, { height: 12, width: '64%' })} />
          <Box sx={block(5, { height: 120, bgcolor: colors.turquoiseBright, opacity: 0.9 })} />
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1.25 }}>
            {[0, 1, 2].map((i) => (
              <Box key={i} sx={block(6 + i, { height: 52 })} />
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          insetInlineStart: { xs: 4, md: -28 },
          width: { xs: 118, md: 156 },
          height: { xs: 118, md: 156 },
          borderRadius: '50%',
          border: `6px solid ${colors.ink}`,
          boxShadow: `0 0 0 3px ${colors.saffron}`,
          bgcolor: colors.mint,
        }}
      >
        <ProfileAvatar />
      </Box>

      {/* <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 18, md: 26 },
          insetInlineStart: { xs: 140, md: 150 },
          color: colors.white,
          fontWeight: 700,
          fontSize: { xs: '0.95rem', md: '1.05rem' },
        }}
      >
        {siteConfig.name}
      </Box> */}
    </Box>
  );
}
