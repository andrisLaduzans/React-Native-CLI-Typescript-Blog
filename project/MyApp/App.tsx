import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Home} from '@views';

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello App</Text>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
