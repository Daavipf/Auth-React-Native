import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import Constants from "expo-constants";

export default function HomeScreen() {
  const { control, handleSubmit } = useForm();
  const { login } = useAuth();
  function onSubmit(data: any) {
    login(data);
    //console.log(Constants.expoConfig?.extra?.apiUrl);
  }
  return (
    <View style={styles.container}>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Seu E-mail"
            style={styles.input}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Sua Senha"
            secureTextEntry
            style={styles.input}
          />
        )}
      />
      <Pressable onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.text}>ENTRAR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#E2E2E2",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    width: "80%",
  },
  button: {
    backgroundColor: "#55F",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
  },
});
