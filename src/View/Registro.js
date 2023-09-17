import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import {  FIREBASE_AUTH, FIRESTORE_DB } from '../Database/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';



const Registro = () => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname ]= useState("");
  const auth = FIREBASE_AUTH;
 
  const signUp = async()=>{
    try{
      const response = await createUserWithEmailAndPassword(auth,email, password)
      console.log(response);
      saveuser();
      alert('sucessfully signed up');
    }catch(error){
      console.log(error);
      alert('Sign Up Failed!' + error.message);
    } 
  }
  const saveuser = async()=>{
    if(name === ""){
      alert('Please enter a name');
    }else{
      await addDoc(collection(FIRESTORE_DB, 'Usuarios'), {
        name: name,
        nickname: nickname,
        email: email,
        password: password
      })
    }
  }

  return(
      <View style={styles.container}>
          <Text style={styles.FontSet}>Registro</Text>
          <TextInput onChangeText={(text)=>setNickname(text)}
          style={{borderWidth: '2', borderColor: '#F0F402', backgroundColor: '#F5F5F5', 
          width: 370, height: 50, marginBottom:30}}
          placeholder="Nickname"
          />
          <TextInput onChangeText={(text)=>setName(text)}
          style={{borderWidth: '2', borderColor: '#F0F402', backgroundColor: '#F5F5F5', 
          width: 370, height: 50, marginBottom:30}}
          placeholder="name"
          />
          <TextInput onChangeText={(text)=>setEmail(text)}
          style={{borderWidth: '2', borderColor: '#F0F402', backgroundColor: '#F5F5F5', 
          width: 370, height: 50, marginBottom:30}}
          placeholder="email"
          />
          <TextInput onChangeText={(text)=>setPassword(text)}
          style={{borderWidth: '2', borderColor: '#F0F402', backgroundColor: '#F5F5F5', 
      width: 370, height: 50,}}
          placeholder="password"
          />
          <TouchableOpacity style={styles.registerButtonSet}
          onPress={signUp}>
            <Text style={styles.RegisterButtonSet}>Hecho</Text> 
          </TouchableOpacity>
      </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : "center",
    backgroundColor: "#0C0B0B",
   
  },
  FontSet:{
      fontFamily: 'lakki-reddy',
      fontSize: 50,
      color: '#F0F402',
      marginTop: 50,
      marginBottom:30,
    },
    RegisterButtonSet:{
      fontFamily: 'lakki-reddy',
      fontSize:30,
      color: '#F0F402',

    },
    registerButtonSet: {
      backgroundColor: "rgb(81, 11, 91)",
      opacity: 0.7,
      borderRadius: 50,
      borderWidth: 5.0,
      borderColor: "#FB6008",
      paddingHorizontal: 80,
      paddingVertical: 10,
      marginTop:25,
      strokeColor: "#FB6008" ,
  
}, 
});

export default Registro
