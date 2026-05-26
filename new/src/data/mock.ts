export type Category = {
  id: string;
  label: string;
  icon: string;
};

export type Restaurant = {
  id: string;
  name: string;
  rating: number;
  tags?: string[];
  description?: string;
  deliveryTime: string;
  deliveryFee: number;
};

export type MenuCategory = {
  id: string;
  label: string;
};

export type MenuItem = {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  price: number;
};

export type CheckoutItem = {
  id: string;
  title: string;
  quantity: number;
  lineTotal: number;
};

export type PaymentMethod = {
  id: string;
  label: string;
  icon: string;
};

export const CATEGORIES: Category[] = [
  { id: 'fast', label: '快餐', icon: '🍔' },
  { id: 'healthy', label: '健康餐', icon: '🥗' },
  { id: 'drinks', label: '饮品', icon: '🥤' },
  { id: 'dessert', label: '甜点', icon: '🍰' },
  { id: 'japanese', label: '日料', icon: '🍣' },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'green-salad',
    name: '绿意沙拉屋',
    rating: 4.8,
    tags: ['健康轻食'],
    description: '专注健康有机轻食，新鲜食材每日配送，为您带来营养均衡的美味体验。',
    deliveryTime: '30-45 mins',
    deliveryFee: 5,
  },
  {
    id: 'fresh-orchard',
    name: '青翠果园',
    rating: 4.9,
    tags: ['新鲜水果'],
    description: '当季新鲜水果，现切现送。',
    deliveryTime: '25-40分钟',
    deliveryFee: 4,
  },
  {
    id: 'fire-burger',
    name: '烈火汉堡王',
    rating: 4.5,
    tags: ['美式快餐'],
    description: '经典美式汉堡，现做现烤。',
    deliveryTime: '20-35分钟',
    deliveryFee: 6,
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'hot', label: '热销' },
  { id: 'signature', label: '招牌套餐' },
  { id: 'snacks', label: '精选小食' },
  { id: 'drinks', label: '清爽饮品' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    categoryId: 'hot',
    title: '牛油果三文鱼能量碗',
    description: '新鲜牛油果配挪威三文鱼，搭配藜麦与混合蔬菜',
    price: 68,
  },
  {
    id: '2',
    categoryId: 'hot',
    title: '香草烤鸡胸肉沙拉',
    description: '低温慢烤鸡胸肉，罗马生菜与樱桃番茄',
    price: 45,
  },
  {
    id: '3',
    categoryId: 'signature',
    title: '地中海素食盘',
    description: '鹰嘴豆、烤茄子、羊奶酪与橄榄油淋面',
    price: 52,
  },
  {
    id: '4',
    categoryId: 'signature',
    title: '泰式酸辣大虾面',
    description: '鲜虾配泰式冬阴功汤底，米粉爽滑',
    price: 58,
  },
  {
    id: '5',
    categoryId: 'snacks',
    title: '黑松露薯条',
    description: '金黄酥脆薯条，黑松露酱提香',
    price: 32,
  },
];

export const CHECKOUT_ITEMS: CheckoutItem[] = [
  { id: 'c1', title: '特制经典芝士牛肉堡', quantity: 1, lineTotal: 48 },
  { id: 'c2', title: '大份香脆海盐薯条', quantity: 2, lineTotal: 44 },
  { id: 'c3', title: '冰镇柠檬红茶', quantity: 1, lineTotal: 15 },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'alipay', label: '支付宝支付', icon: '💙' },
  { id: 'wechat', label: '微信支付', icon: '💚' },
  { id: 'card', label: '信用卡/借记卡', icon: '💳' },
];

export const DELIVERY_ADDRESS = {
  address: '北京市朝阳区三里屯街道 SOHO 2号楼1503室',
  name: '张伟',
  phone: '138****5678',
};

export const CHECKOUT_COSTS = {
  subtotal: 107,
  packaging: 2,
  delivery: 5,
  total: 114,
};

export function getRestaurantById(id: string): Restaurant | undefined {
  return RESTAURANTS.find((r) => r.id === id);
}
