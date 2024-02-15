import { StyleSheet, Text, View } from 'react-native'

const MealDetailScreen = ({ route}) => {
  const mealId = route.params.mealId;

  return (

      <Text>This is the Meal Detail screen {mealId}</Text>

  )
}

export default MealDetailScreen

const styles = StyleSheet.create({})