import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
// Use following api
// https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/Transfers
// https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/users
// GET to list
// POST to create
// GET /:id to get by ID
// etc.
// user can view transaction and create transaction
// sample transaction
// {"completed": false, "createdAt": "2023-11-08T09:25:52.425Z", "id": "1", "issue": true, "pending": false, "rate": 21, "received_amount": "516.15", "sent_amount": "29.06", "to": "Marlon", "user_id": "a98cd5cead084cfb98abc9ae"}

const Separator = () => <View style={styles.separator} />;
export const Item = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.to}</Text>
            <Separator />
            <Text style={[styles.text,{
                color:"red"
            }]}>${item.sent_amount}</Text>
            <Separator />
            <Text style={[styles.text,
            {
                color:"green"
            }
            ]}>${item.received_amount}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    separator: {
        marginHorizontal: 8,
        height: 10,
    },
    container: {
        display:"flex",
        flexDirection:"row",
        backgroundColor: "#fff",
        borderWidth: 1,
        padding: 10,
        justifyContent:"space-between"
        
    },
    text: {
        fontSize: 15,
        fontWeight: "300",
    },
    
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});