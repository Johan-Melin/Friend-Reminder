import { Text, View } from "react-native";
import { Avatar } from "./Avatar";

export const FriendCard = () => {
  return (
    <View className="shadow-sm rounded-xl p-4 bg-white flex-row">
        <Avatar item={{name: "Test Man"}} />
        <View className="ml-4">
            <Text className="font-bold">Name</Text>
            <Text>Last Contact</Text>
            <Text>Preferred frequency</Text>
        </View>
    </View>
  );
};
