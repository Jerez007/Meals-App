import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data.js';

// defined outside since it doesn't have to be recreated
function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
}

export default function CategoriesScreen() {
  return <FlatList data={CATEGORIES}  keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />
}

const styles = StyleSheet.create({})

