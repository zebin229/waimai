import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { MainTabScreenProps } from '../navigation/types';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

type Props = MainTabScreenProps<'Orders'>;

const MOCK_ORDERS = [
  { id: '1', restaurant: '绿意沙拉屋', status: '配送中', time: '预计 12:30 送达' },
  { id: '2', restaurant: '烈火汉堡王', status: '已完成', time: '5月24日 18:45' },
];

export function OrdersScreen({}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>订单</Text>
      </View>
      <View style={styles.content}>
        {MOCK_ORDERS.map((order) => (
          <View key={order.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.restaurant}>{order.restaurant}</Text>
              <View
                style={[
                  styles.badge,
                  order.status === '配送中' && styles.badgeActive,
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    order.status === '配送中' && styles.badgeTextActive,
                  ]}
                >
                  {order.status}
                </Text>
              </View>
            </View>
            <Text style={styles.time}>{order.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  restaurant: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.sm,
    backgroundColor: colors.borderLight,
  },
  badgeActive: {
    backgroundColor: colors.primaryLight,
  },
  badgeText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  badgeTextActive: {
    color: colors.primary,
  },
  time: {
    fontSize: 13,
    color: colors.textMuted,
  },
});
