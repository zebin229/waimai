import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FloatingCartBar } from '../components/FloatingCartBar';
import { MenuItemRow } from '../components/MenuItemRow';
import {
  getRestaurantById,
  MENU_CATEGORIES,
  MENU_ITEMS,
} from '../data/mock';
import type { RootStackScreenProps } from '../navigation/types';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

type Props = RootStackScreenProps<'RestaurantDetail'>;

export function RestaurantDetailScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  const restaurant = getRestaurantById(route.params.restaurantId);
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const [cartCount, setCartCount] = useState(2);
  const cartTotal = 113;

  if (!restaurant) {
    return (
      <View style={styles.error}>
        <Text>餐厅未找到</Text>
      </View>
    );
  }

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.categoryId === activeCategory,
  );
  const displayItems =
    filteredItems.length > 0 ? filteredItems : MENU_ITEMS;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 + insets.bottom }}
        stickyHeaderIndices={[1]}
      >
        <View style={styles.hero}>
          <Pressable
            style={[styles.backBtn, { top: insets.top + spacing.sm }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </Pressable>
          <View style={styles.heroImage}>
            <Text style={styles.heroEmoji}>🥗</Text>
          </View>
          <View style={styles.heroInfo}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.rating}>{restaurant.rating}</Text>
              <Text style={styles.divider}>·</Text>
              <Text style={styles.deliveryMeta}>
                {restaurant.deliveryTime}
              </Text>
              <Text style={styles.divider}>·</Text>
              <Text style={styles.deliveryMeta}>
                配送费 ¥{restaurant.deliveryFee}
              </Text>
            </View>
            <Text style={styles.description}>{restaurant.description}</Text>
          </View>
        </View>

        <View style={styles.tabBarWrap}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabScroll}
          >
            {MENU_CATEGORIES.map((cat) => (
              <Pressable
                key={cat.id}
                style={[
                  styles.tab,
                  activeCategory === cat.id && styles.tabActive,
                ]}
                onPress={() => setActiveCategory(cat.id)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeCategory === cat.id && styles.tabTextActive,
                  ]}
                >
                  {cat.label}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View style={styles.menuList}>
          {displayItems.map((item) => (
            <MenuItemRow
              key={item.id}
              item={item}
              onAdd={() => setCartCount((c) => c + 1)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={{ paddingBottom: insets.bottom }}>
        <FloatingCartBar
          itemCount={cartCount}
          total={cartTotal}
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    backgroundColor: colors.white,
  },
  backBtn: {
    position: 'absolute',
    left: spacing.lg,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backIcon: {
    fontSize: 28,
    color: colors.text,
    lineHeight: 30,
    marginTop: -2,
  },
  heroImage: {
    height: 160,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroEmoji: {
    fontSize: 64,
  },
  heroInfo: {
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    flexWrap: 'wrap',
  },
  star: {
    color: colors.star,
    fontSize: 14,
    marginRight: 2,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  divider: {
    color: colors.textMuted,
    marginHorizontal: 6,
  },
  deliveryMeta: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  tabBarWrap: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tabScroll: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.sm,
  },
  tab: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    backgroundColor: colors.borderLight,
    marginRight: spacing.sm,
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  tabTextActive: {
    color: colors.white,
    fontWeight: '600',
  },
  menuList: {
    paddingHorizontal: spacing.lg,
  },
});
