import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Category } from '../data/mock';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

type Props = {
  categories: Category[];
};

export function CategoryScroll({ categories }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
    >
      {categories.map((cat) => (
        <View key={cat.id} style={styles.item}>
          <View style={styles.iconWrap}>
            <Text style={styles.icon}>{cat.icon}</Text>
          </View>
          <Text style={styles.label}>{cat.label}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
  },
  item: {
    alignItems: 'center',
    width: 64,
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    fontSize: 26,
  },
  label: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
});
