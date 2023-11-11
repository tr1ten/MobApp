import { View, Button, Image } from "react-native";

export const GoogleSignInButton = ({ onPress, isDisabled }) => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginBottom: 20,
        }}>
            <Image
                source={require("../assets/google.png")}
                style={{
                    width: 35, height: 35, padding: 10, marginRight: 10,
                    objectFit: "contain",
                }} />
            <Button
                onPress={onPress}
                disabled={isDisabled}
                title="Sign in with Google"
                color="#4285F4"
                accessibilityLabel="Sign in with Google" />
        </View>
    );

};
