// 站点信息集中放在这里。
export const SITE = {
  title: "Cody's Notes",
  // 首页不显示简介。这一句只用在搜索结果摘要、RSS 和友链页的「本站信息」里。
  description: 'Cody 的技术博客。',
  author: 'Cody',
  domain: 'amcody.dev',
  url: 'https://amcody.dev',
  wordmark: 'amcody',

  // 页眉和文章分隔线上的如尼文，用的是盎格鲁-撒克逊如尼文，逐个字母拼出域名：
  // a m c o d y · d e v
  // a 用标准转写的 ᚪ。如尼文里没有 v，这里按拉丁文 u、v 同形的习惯写成 ᚢ。
  // 想换写法只需要改下面两行。
  runes: 'ᚪᛗᚳᚩᛞᚣ᛫ᛞᛖᚢ',
  runesShort: 'ᚪᛗᚳᚩᛞᚣ',
} as const;

export const NAV = [
  { href: '/posts/', label: '文章' },
  { href: '/about/', label: '关于' },
  { href: '/links/', label: '友链' },
] as const;
