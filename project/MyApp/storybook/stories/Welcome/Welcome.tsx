import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Welcome: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to storybook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
