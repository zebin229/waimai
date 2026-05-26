import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

type Props = {
  placeholder?: string;
};

export function SearchBar({ placeholder = '搜索美食或餐厅' }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        editable={false}
      />
      <View style={styles.icon}>
        <SearchIcon />
      </View>
    </View>
  );
}

function SearchIcon() {
  return (
    <View style={iconStyles.wrap}>
      <View style={iconStyles.circle} />
      <View style={iconStyles.handle} />
    </View>
  );
}

const iconStyles = StyleSheet.create({
  wrap: { width: 18, height: 18, position: 'relative' },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.textMuted,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  handle: {
    width: 6,
    height: 2,
    backgroundColor: colors.textMuted,
    position: 'absolute',
    bottom: 1,
    right: 0,
    transform: [{ rotate: '45deg' }],
    borderRadius: 1,
  },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.borderLight,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.lg,
    height: 44,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    paddingVertical: 0,
  },
  icon: {
    marginLeft: spacing.sm,
  },
});
