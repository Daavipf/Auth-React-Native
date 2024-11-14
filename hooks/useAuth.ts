import axios from "axios";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "@/context/AuthContext";
import { jwtDecode } from "jwt-decode";
import Constants from "expo-constants";

const api = axios.create({
  baseURL: Constants.expoConfig?.extra?.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default function useAuth() {
  const router = useRouter();
  const { setAuthenticated } = useAuthContext();
  async function login(data: any) {
    //console.log(Constants.expoConfig?.extra?.apiUrl);
    try {
      const response = await api.post("/auth/signin", data);
      await AsyncStorage.setItem("token", response.data.token);
      setAuthenticated(true);
    } catch (error) {
      console.error(error.response.data.message);
    }
  }

  async function register(data: any) {
    try {
      const response = await api.post("/auth/signup", data);
      router.replace("/");
    } catch (error) {
      console.error(error.response.data.message);
    }
  }

  async function logout() {
    try {
      await AsyncStorage.removeItem("token");
      setAuthenticated(false);
      //router.replace("/");
    } catch (error) {
      console.error(error);
    }
  }

  async function getStorage() {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      throw new Error("Nenhum token, ou usuário guardado");
    }
    const user = jwtDecode(token);
    console.log("token: ", token);
    console.log("user: ", user);
  }

  return {
    login,
    register,
    getStorage,
    logout,
  };
}
