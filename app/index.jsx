import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack ">Aora !</Text>
      <StatusBar style="auto" />
      <Link href="/home">Go to Profile</Link>
    </View>
  );
}
