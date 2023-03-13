import { ActivityIndicator, View } from "react-native";

function Loading() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ActivityIndicator color={"#FFB24C"} size={"large"} />
    </View>
  );
}

export default Loading;
