export interface FriendLink {
  name: string;
  url: string;
  desc?: string;
}

// 友链写在这里，一行一个，例如：
// { name: '某某的博客', url: 'https://example.com', desc: '一句话介绍' },
export const links: FriendLink[] = [];
