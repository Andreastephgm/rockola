import * as React from 'react';
import {View, Text, StyleSheet,Image, TextInput,onPress ,TouchableOpacity} from 'react-native';


const Profile = () => {
    
  return(
      <View style={styles.container}>
          <Text style={styles.profileFont}>Profile</Text>
          <Image style={styles.imageProfile} source= {require('/assets/profile.jpeg')}></Image>
          <TextInput
          style={{borderWidth: '2', borderColor: '#F0F402', backgroundColor: '#F5F5F5', 
          width: 370, height: 50, marginBottom:29}}
          placeholder="Nombre"
          />
          <TextInput
          style={{borderWidth: '2', borderColor: '#F0F402', backgroundColor: '#F5F5F5', 
          width: 370, height: 50, marginBottom:30}}
          placeholder="CorreoElectronico"
          />
          <TextInput
          style={{borderWidth: '2', borderColor: '#F0F402', backgroundColor: '#F5F5F5', 
      width: 370, height: 50,}}
          placeholder="Contraseña"
          />
          <TouchableOpacity style={styles.registerButtonSet}
          onPress={onPress}>
            <Text style={styles.RegisterButtonSet}>Actualizar</Text> 
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
  profileFont:{
    fontFamily:'lakki-reddy',
    fontSize:40,
    color: '#F0F402',
    marginTop: 20,
    marginLeft: 10,
    },
    RegisterButtonSet:{
      fontFamily: 'lakki-reddy',
      fontSize:27,
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
imageProfile: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
}
});

export default Profile
