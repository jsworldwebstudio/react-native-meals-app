import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>THe Meal Detail Screen!!!</Text>
      <Button title="Go Back to Categories" onPress={() => {
        props.navigation.popToTop();
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MealDetailScreen;
