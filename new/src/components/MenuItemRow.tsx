import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { MenuItem } from '../data/mock';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

type Props = {
  item: MenuItem;
  onAdd?: () => void;
};

export function MenuItemRow({ item, onAdd }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.emoji}>🍽️</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.price}>¥{item.price}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.addBtn, pressed && styles.addBtnPressed]}
        onPress={onAdd}
      >
        <Text style={styles.addText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    alignItems: 'flex-start',
  },
  imagePlaceholder: {
    width: 72,
    height: 72,
    borderRadius: radius.sm,
    backgroundColor: colors.borderLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  emoji: {
    fontSize: 28,
  },
  info: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
    marginBottom: spacing.sm,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  addBtn: {
    width: 32,
    height: 32,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
  },
  addBtnPressed: {
    backgroundColor: colors.primaryDark,
  },
  addText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 22,
  },
});
