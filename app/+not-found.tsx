import React from 'react';
import { Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>This screen doesn't exist.</Text>
        <Link href="/">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
