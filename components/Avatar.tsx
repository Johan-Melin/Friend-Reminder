import { Text, View } from "react-native";

export const Avatar = ({item}: {item: {name: string}}) => {
  return (
    <View className="w-[50px] h-[50px] rounded-full bg-blue-100 justify-center items-center">
        <Text className="text-[20px] font-semibold text-blue-500">{item.name.charAt(0)}</Text>
    </View>
  );
};


