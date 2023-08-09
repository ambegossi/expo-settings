import * as Settings from "expo-settings";
import React from "react";

import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [theme, setTheme] = React.useState<string>(Settings.getTheme());

  React.useEffect(() => {
    const subscription = Settings.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setTheme]);

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
