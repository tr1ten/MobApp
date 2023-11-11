import { Text, View,FlatList,StyleSheet,Button } from "react-native";
import { useEffect, useState } from "react";
import { Item } from "./Item";
export function ShowTransactions({ transactions,refreshing,onRefresh}) {
    return (
        <View>
            <Text 
            style={style.title}
            >Transaction History</Text>
            <View
                style={style.container}
            >
                <View style={{
                    display:"flex",
                    flexDirection:"row",
                    backgroundColor: "#fff",
                    gap:10,
                    borderWidth: 1,
                    padding: 10,
                    justifyContent:"space-between"
                }}>
                    <Text style={style.text}>To</Text>
                    <Text style={style.text}>Sent Amount</Text>
                    <Text style={style.text}>Received Amount</Text>
                </View>
                <FlatList
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    data={transactions}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
            
           
        </View>
    );
}
const style = StyleSheet.create({
    title:{
        fontSize: 30,
        textAlign:"center",
        margin:10
    },
    container:{
        backgroundColor:"#fff",
        height:500,
        margin:10
        
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});


