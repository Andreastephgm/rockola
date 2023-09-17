import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput,onPress ,TouchableOpacity} from 'react-native';
import { FIREBASE_AUTH} from '../Database/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LogIn = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = FIREBASE_AUTH;
  
  const signIn = async()=>{

    try{
      const response = await signInWithEmailAndPassword( auth, email, password);
      console.log(response);
      navigation.navigate('Home')
      alert('Check your credentials!');
    }catch(error){
      console.log(error);
      alert('Sign In Failed!' + error.message);
    }
  }  
  
    return(
        <View style={styles.container}>
            <Text style={styles.FontSet}>Inicio de Sesión</Text>
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
            onPress={signIn}>
              <Text style={styles.RegisterButtonSet}>Ingresar</Text> 
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

export default LogIn