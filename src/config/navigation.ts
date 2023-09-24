export type NavigationLink = {
  label: string;
  url: string;
};

export const navigationLinks: readonly NavigationLink[] = [
  { label: 'Főoldal', url: '/' },
  { label: 'Kapcsolat', url: '/contact' },
  { label: 'Blog', url: '/blog' },
  { label: 'Portfólió', url: '/portfolio' },
];
