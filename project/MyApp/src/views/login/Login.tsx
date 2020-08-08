import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Login: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;
