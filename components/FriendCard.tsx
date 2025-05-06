import { Text, View } from "react-native";

export const FriendCard = () => {
  return (
    <View className="shadow-sm rounded-xl p-4 bg-white">
      <Text className="font-bold">Name</Text>
      <Text>Last Contact</Text>
      <Text>Preferred frequency</Text>
    </View>
  );
};
