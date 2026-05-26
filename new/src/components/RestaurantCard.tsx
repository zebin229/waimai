import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Restaurant } from '../data/mock';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

type Props = {
  restaurant: Restaurant;
  onPress: () => void;
  onViewMenu?: () => void;
};

export function RestaurantCard({ restaurant, onPress, onViewMenu }: Props) {
  const showMenuButton = restaurant.id === 'green-salad';

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageEmoji}>
          {restaurant.id === 'green-salad'
            ? '🥗'
            : restaurant.id === 'fresh-orchard'
              ? '🍎'
              : '🍔'}
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <View style={styles.ratingWrap}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.rating}>{restaurant.rating}</Text>
          </View>
        </View>
        {restaurant.tags && restaurant.tags.length > 0 && (
          <View style={styles.tags}>
            {restaurant.tags.map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
        {showMenuButton && (
          <Pressable
            style={({ pressed }) => [styles.menuBtn, pressed && styles.menuBtnPressed]}
            onPress={onViewMenu}
          >
            <Text style={styles.menuBtnText}>看菜单</Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.92,
  },
  imagePlaceholder: {
    width: 100,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageEmoji: {
    fontSize: 40,
  },
  content: {
    flex: 1,
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
    marginRight: spacing.sm,
  },
  ratingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
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
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  tag: {
    backgroundColor: colors.borderLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  tagText: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  menuBtn: {
    alignSelf: 'flex-start',
    marginTop: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },
  menuBtnPressed: {
    backgroundColor: colors.primaryDark,
  },
  menuBtnText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600',
  },
});
