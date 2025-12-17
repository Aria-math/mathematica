type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'صفحه ی اصلی' },
  { href: '/about', label: 'درباره ی ما' },
  { href: '/products', label: 'محصولات' },
  { href: '/favorites', label: 'پسندیده ها' },
  { href: '/reviews', label: 'نظر ها' },
  { href: '/cart', label: 'سبد خرید' },
  { href: '/orders', label: 'خرید ها' },
  { href: '/admin/sales', label: 'داشبورد' },
];

export const adminLinks: NavLink[] = [
  { href: '/admin/sales', label: 'لیست فروش' },
  { href: '/admin/products', label: 'لیست محصولات' },
  { href: '/admin/products/create', label: 'افزودن محصول' },
];
