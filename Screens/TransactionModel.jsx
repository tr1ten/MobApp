import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,TextInput, ToastAndroid} from 'react-native';

const POST_API = 'https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/Transfers';
const TransacationModel = ({onReefresh}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [to, setTo] = useState('');
const [sentAmount, setSentAmount] = useState(0);
const [receivedAmount, setReceivedAmount] = useState(0);
const closeModal = () => {
    setModalVisible(!modalVisible);
}
const onSubmit = () => {
    const data = {
        to,
        sentAmount,
        receivedAmount
    };
    fetch(POST_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json())
        .then((data) => {
            closeModal();
            setSentAmount(0);
            setTo("");
            setReceivedAmount(0);
            ToastAndroid.show('Transaction Added', ToastAndroid.SHORT);
            onReefresh();
        })
        .catch((error) => {
            ToastAndroid.show('Error', ToastAndroid.SHORT);
            console.error('Error:', error);
        });
};
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Create Transaction</Text>
            {MyInput(setTo, to,"Send To","Enter Name")}
            {MyInput(setSentAmount, sentAmount,"Sent Amount","Enter Sent Amount",1)}
            {MyInput(setReceivedAmount, receivedAmount,"Received Amount","Enter Received Amount",1)}
            

            <View
            style={styles.btnGrp}
            >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onSubmit }>
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor:"#fff",
              }}
              onPress={()=>setModalVisible(false) }>
              <Text style={[styles.textStyle,{color:"red",padding:10}]}>Cancel</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add Transaction</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        margin:10
    },
    input:{
        borderWidth:1,
        borderRadius:5,
        padding:5,
        width:"50%"
    },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle:{
    fontSize: 20,
    textAlign:"center",
    fontWeight: "bold",
    margin:10
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    // dark blue
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  btnGrp:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:"100%"
  }
});

export default TransacationModel;

function MyInput(setTo, to,text,placeholder,isNumeric) {
    return <View
        style={styles.inputContainer}
    >
        <Text style={styles.modalText}>{text}</Text>
        <TextInput
            style={styles.input}
            onChangeText={setTo}
            keyboardType={isNumeric ? 'decimal-pad' : 'ascii-capable'}
            value={to.toString()}
            placeholder={placeholder} />
    </View>;
}
