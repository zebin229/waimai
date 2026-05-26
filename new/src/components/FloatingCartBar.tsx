import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

type Props = {
  itemCount: number;
  total: number;
  onPress: () => void;
};

export function FloatingCartBar({ itemCount, total, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.bar, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{itemCount}</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.label}>查看购物车</Text>
        <Text style={styles.sub}>已选 {itemCount} 件商品</Text>
      </View>
      <Text style={styles.total}>¥{total}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.text,
    borderRadius: radius.full,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  pressed: {
    opacity: 0.9,
  },
  badge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  badgeText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },
  center: {
    flex: 1,
  },
  label: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  sub: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 11,
    marginTop: 2,
  },
  total: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '700',
  },
});
