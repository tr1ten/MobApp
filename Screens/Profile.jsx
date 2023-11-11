import { StyleSheet,Text, View, Image } from "react-native";
export const Profile = ({ userInfo }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: userInfo.picture }} style={styles.image} />
            <View style={styles.card}>
                <Text style={styles.text}>{userInfo.name}</Text>
                <Text style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "grey",
                    marginTop: 10,
                
                }}>{userInfo.email}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    card: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 20,
        borderRadius: 50,
    },
});