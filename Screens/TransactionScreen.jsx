import { StyleSheet, View, Button } from "react-native";
import { Profile } from "./Profile";
import { ShowTransactions } from "./ShowTransactions";
import TransacationModel from "./TransactionModel";
import { useEffect,useState } from "react";
export default function TransactionScreen({userInfo}) {
  const [transactions, setTransactions] = useState([]);
  const [refreshing,setRefresh] = useState(true);
    async function handleEffect() {
      try {
          const response = await fetch(
              "https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/Transfers"
          );
          const data = await response.json();
          // sort by latest date first
          data.sort(function(a,b){
            return new Date(b.createdAt)-new Date(a.createdAt);
          })
          setTransactions(data);
          setRefresh(false);

      } catch (e) {
          setError(e);
          setRefresh(false);
      }
  }
  useEffect(() => {
    handleEffect();
}, []);
    return (
        <View style={styles.container}>
            <Profile userInfo={userInfo} />
            <ShowTransactions userInfo={userInfo} transactions={transactions}
             refreshing={refreshing} onRefresh={handleEffect} />
            <TransacationModel 
            onReefresh={handleEffect}
              />
        </View>
        
    );
}
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    //   alignItems: "center",
    //   justifyContent: "center",
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
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  });
  