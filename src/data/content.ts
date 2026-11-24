import type { ComponentType } from 'react';
import {
  Building2,
  Gauge,
  HeartHandshake,
  LayoutTemplate,
  LifeBuoy,
  MonitorSmartphone,
  MousePointerClick,
  Network,
  Newspaper,
  PenTool,
  Palette,
  Ruler,
  ShoppingCart,
} from 'lucide-react';
import {
  SiAxios,
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress,
} from 'react-icons/si';

export type IconComponent = ComponentType<{ size?: number; 'aria-hidden'?: boolean }>;

export interface Service {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface SkillGroup {
  name: string;
  caption: string;
  items: { name: string; icon: IconComponent }[];
}

export interface Reason {
  title: string;
  description: string;
  icon: IconComponent;
}

export const services: Service[] = [
  {
    title: 'طراحی سایت شرکتی',
    description:
      'طراحی وب‌سایت برای معرفی شرکت، خدمات، اطلاعات تماس و ایجاد اعتبار حرفه‌ای در فضای آنلاین',
    icon: Building2,
  },
  {
    title: 'طراحی فروشگاه اینترنتی',
    description:
      'راه‌اندازی فروشگاه آنلاین برای معرفی محصولات، مدیریت سفارش‌ها و فراهم‌کردن امکان خرید اینترنتی',
    icon: ShoppingCart,
  },
  {
    title: 'طراحی سایت خبری و محتوایی',
    description:
      'طراحی وب‌سایت برای انتشار اخبار، مقالات و محتوا با امکان دسته‌بندی و مدیریت آسان',
    icon: Newspaper,
  },
  {
    title: 'طراحی سایت با قالب‌های آماده',
    description:
      'راه‌اندازی وب‌سایت با استفاده از قالب‌های آماده و شخصی‌سازی آن‌ها متناسب با نیاز و هویت کسب‌وکار',
    icon: LayoutTemplate,
  },
  {
    title: 'طراحی سایت اختصاصی',
    description:
      'طراحی و توسعه وب‌سایت از ابتدا، بر اساس نیازها، امکانات و اهداف مشخص هر کسب‌وکار',
    icon: PenTool,
  },
  {
    title: 'پشتیبانی و نگهداری وب‌سایت',
    description:
      'بررسی، نگهداری و پشتیبانی وب‌سایت برای حفظ عملکرد صحیح و به‌روزرسانی آن',
    icon: LifeBuoy,
  },
  {
    title: 'بهینه‌سازی سرعت و رفع مشکلات سایت',
    description: 'بررسی مشکلات فنی و بهبود سرعت و عملکرد وب‌سایت',
    icon: Gauge,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend',
    caption: 'ساخت ظاهر و رابط کاربری سایت',
    items: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Material UI', icon: SiMui },
    ],
  },
  {
    name: 'State Management & API',
    caption: 'مدیریت داده و ارتباط با سرور',
    items: [
      { name: 'Redux Toolkit', icon: SiRedux },
      { name: 'TanStack Query', icon: SiReactquery },
      { name: 'Axios', icon: SiAxios },
      { name: 'REST API', icon: Network },
    ],
  },
  {
    name: 'Backend & Database',
    caption: 'بخش پشتیبان سایت و ذخیره اطلاعات',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    name: 'CMS & Website Platforms',
    caption: 'راه‌اندازی سایت با سیستم مدیریت محتوا',
    items: [{ name: 'WordPress', icon: SiWordpress }],
  },
  {
    name: 'UI/UX Design',
    caption: 'طراحی ظاهر و تجربه کاربری',
    items: [{ name: 'Figma', icon: SiFigma }],
  },
  {
    name: 'Tools',
    caption: 'ابزارهای مدیریت و ساخت پروژه',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vite', icon: SiVite },
    ],
  },
];

export const reasons: Reason[] = [
  {
    title: 'طراحی متناسب با نیاز و هویت هر کسب‌وکار',
    description: 'سایت شما باید شبیه کسب‌وکار شما باشد، نه شبیه یک قالب تکراری',
    icon: Palette,
  },
  {
    title: 'توجه به جزئیات و کیفیت اجرا',
    description: 'فاصله‌ها، رنگ‌ها، متن‌ها و عملکرد دکمه‌ها یکی‌یکی بررسی می‌شوند',
    icon: Ruler,
  },
  {
    title: 'نمایش صحیح وب‌سایت در موبایل و دسکتاپ',
    description: 'سایت روی گوشی، تبلت و کامپیوتر مرتب و خوانا نمایش داده می‌شود',
    icon: MonitorSmartphone,
  },
  {
    title: 'طراحی رابط کاربری ساده و قابل‌استفاده',
    description: 'بازدیدکننده‌ها بدون سردرگمی چیزی را که می‌خواهند پیدا می‌کنند',
    icon: MousePointerClick,
  },
  {
    title: 'همراهی و پشتیبانی پس از تحویل پروژه',
    description: 'بعد از راه‌اندازی هم برای سؤال‌ها و مشکلات سایت در دسترس هستم',
    icon: HeartHandshake,
  },
];
