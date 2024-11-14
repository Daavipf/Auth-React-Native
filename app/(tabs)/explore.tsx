import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import useAuth from "@/hooks/useAuth";

const { height } = Dimensions.get("screen");

export default function TabTwocreen() {
  const { control, handleSubmit } = useForm();
  const { register } = useAuth();
  function onSubmit(data: any) {
    register(data);
  }
  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.container}>
        <Controller
          name="realName"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Nome Completo"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
        />
        <Controller
          name="userName"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Nome de Usuário"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="E-mail"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              keyboardType="email-address"
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Telefone"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              keyboardType="phone-pad"
            />
          )}
        />
        <Controller
          name="zipCode"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="CEP"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              keyboardType="numeric"
            />
          )}
        />
        <Controller
          name="state"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Estado"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
        />
        <Controller
          name="city"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Cidade"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
        />
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="País"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Senha"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              secureTextEntry
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Confirmar Senha"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              secureTextEntry
            />
          )}
        />
        <Pressable onPress={handleSubmit(onSubmit)} style={styles.button}>
          <Text style={styles.text}>CRIAR CONTA</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: (height / 100) * 5,
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
