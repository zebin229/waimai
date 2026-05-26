import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DELIVERY_ADDRESS } from '../data/mock';
import type { MainTabScreenProps } from '../navigation/types';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

type Props = MainTabScreenProps<'Profile'>;

const MENU_ITEMS = [
  { label: '收货地址', icon: '📍' },
  { label: '优惠券', icon: '🎫' },
  { label: '客服中心', icon: '💬' },
  { label: '设置', icon: '⚙️' },
];

export function ProfileScreen({}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>张</Text>
        </View>
        <View>
          <Text style={styles.name}>{DELIVERY_ADDRESS.name}</Text>
          <Text style={styles.phone}>{DELIVERY_ADDRESS.phone}</Text>
        </View>
      </View>
      <View style={styles.menu}>
        {MENU_ITEMS.map((item) => (
          <View key={item.label} style={styles.menuRow}>
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Text style={styles.chevron}>›</Text>
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: spacing.lg,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  phone: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  menu: {
    marginTop: spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: spacing.md,
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
  chevron: {
    fontSize: 22,
    color: colors.textMuted,
  },
});
