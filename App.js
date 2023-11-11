import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Welcome from "./Screens/Welcome";
import TransactionScreen from "./Screens/TransactionScreen";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "599369550483-gbka0vrr8dmskkfrjrueh5rdqrk8fea7.apps.googleusercontent.com",
    webClientId: "599369550483-2tnvcplv4p5v7h2114539vlro1hgko2j.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      const response = await fetch(
        "https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };
  const signOutHandler = async () => {
    await AsyncStorage.removeItem("@user");
    setUserInfo(null);
  };
  return (
    <View style={styles.container}>
      {!userInfo ? (
        <Welcome isDisabled={!request} onPress={() => promptAsync()} />
        
      ) : (
        <TransactionScreen userInfo={userInfo} />
      )}
      {
        userInfo &&<View
        >
        <Button
        color="red"
        title="Sign Out"
        onPress={signOutHandler}
      />
        </View>
      }
    </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
});


