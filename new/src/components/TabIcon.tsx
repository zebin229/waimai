import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

type TabName = 'Home' | 'Orders' | 'Profile';

type Props = {
  name: TabName;
  focused: boolean;
};

const ICONS: Record<TabName, { active: string; inactive: string }> = {
  Home: { active: '🏠', inactive: '🏡' },
  Orders: { active: '📋', inactive: '📄' },
  Profile: { active: '👤', inactive: '👥' },
};

export function TabIcon({ name, focused }: Props) {
  const icon = focused ? ICONS[name].active : ICONS[name].inactive;
  return (
    <View style={styles.wrap}>
      <Text style={[styles.icon, focused && styles.iconFocused]}>{icon}</Text>
      {focused && <View style={styles.dot} />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 22,
    opacity: 0.5,
  },
  iconFocused: {
    opacity: 1,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.primary,
    marginTop: 2,
  },
});
