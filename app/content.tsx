import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import React from "react";
import useAuth from "@/hooks/useAuth";

const { height } = Dimensions.get("screen");

export default function Content() {
  const { getStorage, logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conteúdo show de bola</Text>
      <Button title="debug storage" onPress={getStorage} />
      <Button title="SAIR" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: (height / 100) * 5,
    gap: 16,
  },
  text: {
    color: "#FFF",
  },
});
