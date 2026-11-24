import { Box } from '@mui/material';
import { siteConfig } from '../data/siteConfig';


export function ProfileAvatar() {
  const { src, alt, objectPosition } = siteConfig.profile;

  return (
    <Box
      component="img"
      src={`${import.meta.env.BASE_URL}${src}`}
      alt={alt}
      width={600}
      height={600}
      
        fetchPriority="high"
  decoding="async"
  loading='lazy'
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        aspectRatio: '1 / 1',
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition,
      }}
    />
  );
}
