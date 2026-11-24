
export const siteConfig = {
  name: 'محمد باغبان رضایی',
  title: 'طراح و توسعه‌دهنده وب',
  slogan: 'حضور آنلاین حرفه‌ای، آغاز رشد کسب‌وکار شماست',
  heroDescription:
    'در طراحی و توسعه وب‌سایت‌های مدرن و کاربردی به کسب‌وکارها کمک می‌کنم تا حضوری حرفه‌ای در دنیای آنلاین داشته باشند',

  phone: '09154824532',
  email: 'webnerd2024@gmail.com',

  copyrightYear: 2026,

  /** فایل تصویر را در public/images/profile.jpg جایگزین کنید. */
  profile: {
    src: '../images/profile.webp',
    alt: 'admin-pic',
    /** برای تنظیم بخش قابل‌نمایش عکس داخل دایره، مثلاً 'center top' یا '50% 20%' */
    objectPosition: 'center 20%',
  },

  nav: [
    { label: 'خانه', href: '#home' },
    { label: 'خدمات', href: '#services' },
    { label: 'مهارت‌ها', href: '#skills' },
    { label: 'تماس', href: '#contact' },
  ],

  cta: { label: 'شروع همکاری', href: '#contact' },
  secondaryCta: { label: 'مشاهده خدمات', href: '#services' },
} as const;

export const phoneHref = `tel:${siteConfig.phone}`;
export const emailHref = `mailto:${siteConfig.email}`;
