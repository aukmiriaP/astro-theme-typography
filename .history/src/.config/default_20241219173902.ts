import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: '月隙碎笔',
    subtitle: 'aukmiria',
    author: 'aukmiria',
    description: 'Rediscory the beauty of typography',
    website: 'https://astro-theme-typography.vercel.app/',
    pageSize: 5,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/aukmiriaP',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://x.com/aukmiria',
      },
      {
        name: 'bilibili',
        href: 'https://space.bilibili.com/9186972',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [{ name: '记录', path: 'record' }],
    footer: [
      // '© %year <a target="_blank" href="%website">%author</a>',
      // 'Theme <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a> by <a target="_blank" href="https://moeyua.com">Moeyua</a>',
      // 'Proudly published with <a target="_blank" href="https://astro.build/">Astro</a>',
    ],
  },
  appearance: {
    theme: 'light',
    locale: 'zh-cn',
    colorsLight: {
      primary: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#232222',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '@aukmiria',
    meta: [
      // 搜索引擎关键词
      {
        name: 'keywords',
        content: '博客，技术，生活，学习，记录',
      },
      // 网页描述
      {
        name: 'description',
        content: '月隙碎笔，记录生活、技术与心得',
      },
      // 作者
      {
        name: 'author',
        content: 'aukmiria',
      },
      // twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      // 分享时显示的标题
      {
        name: 'twitter:title',
        content: '月隙碎笔',
      },
      // 分享时显示的描述
      {
        name: 'twitter:description',
        content: 'aukmiria\'s blog',
      },
    ],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {
    // disqus: { shortname: "typography-astro" },
  },
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}
