import * as Settings from "expo-settings";

import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const theme = Settings.getTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <View style={styles.container}>
      <Text>Theme: {Settings.getTheme()}</Text>

      <Button
        title={`Set theme to ${nextTheme}`}
        onPress={() => Settings.setTheme(nextTheme)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
