import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Home</Text>
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

export default Home;
