import { images } from "@/constants/images";
import { View, Image } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center ">
      <View className="flex-1 bg-primary">
        <Image
          source={images.bg}
          className="absolute w-full z-0"
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
