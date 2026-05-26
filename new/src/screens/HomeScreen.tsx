import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CategoryScroll } from '../components/CategoryScroll';
import { RestaurantCard } from '../components/RestaurantCard';
import { SearchBar } from '../components/SearchBar';
import { SectionTitle } from '../components/SectionTitle';
import { CATEGORIES, RESTAURANTS } from '../data/mock';
import type { MainTabScreenProps } from '../navigation/types';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type Props = MainTabScreenProps<'Home'>;

export function HomeScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  const openGreenSalad = () => {
    navigation.navigate('RestaurantDetail', { restaurantId: 'green-salad' });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <SearchBar />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <CategoryScroll categories={CATEGORIES} />
        <SectionTitle title="为您推荐" />
        <View style={styles.list}>
          {RESTAURANTS.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onPress={() => {
                if (restaurant.id === 'green-salad') {
                  openGreenSalad();
                }
              }}
              onViewMenu={
                restaurant.id === 'green-salad' ? openGreenSalad : undefined
              }
            />
          ))}
        </View>
      </ScrollView>
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
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  scroll: {
    paddingBottom: spacing.xxxl,
  },
  list: {
    paddingHorizontal: spacing.lg,
  },
});
