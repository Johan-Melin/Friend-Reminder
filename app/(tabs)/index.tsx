import { Stack } from 'expo-router';
import { View } from 'react-native';
import { FriendCard } from '~/components/FriendCard';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View className="flex-1 p-6 bg-gray-50">
        <FriendCard />
      </View>
    </>
  );
}


