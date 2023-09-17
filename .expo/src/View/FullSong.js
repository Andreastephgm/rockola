import * as React from 'react';
import {View, FlatList, Image, Text, StyleSheet, TextInput,onPress ,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import Songs2 from '../Songs2';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const FullSong = () => {
    
  return(
      <View style={styles.container}>
          <Text style={styles.FontSet}>Playlist</Text>
     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TextInput 
          style={{borderWidth: '2', borderColor: '#F0F402', backgroundColor: '#F5F5F5', 
          width: 370, height: 50, marginBottom:30, flexDirection: 'column'}}
          placeholder="Busca!"
          />
            <TouchableOpacity style={{marginTop:10}} onPress={onPress}>
            <FontAwesome name="plus" size={24} color="pink" />
             </TouchableOpacity>
            </View>
            <View>
            <FlatList
             data={Songs2}
             ItemSeparatorComponent={() => <Text> </Text>}
             renderItem={({item: song}) =>
             <View  style={styles.songContainer} key={song.titulo}>
            <Image  style={styles.photoSong} source={{uri:song.foto }}/>
            <View style={{flexDirection: 'column'}}>
             <Text style={styles.songFond}>{song.titulo}</Text>
             <Text  style={styles.songFond}>{song.Artista}</Text>
             </View>
            
             <TouchableOpacity style={{marginTop:10}} onPress={onPress}>
             <Ionicons name="trash" size={35} color="#4EF513" />
             </TouchableOpacity>
             
             
            
         </View>
            } >
            </FlatList>
            </View>
      </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
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
songContainer:{
  flexDirection:'row',
  backgroundColor:"#FB6008",
  borderRadius:28,
  width: 380,
  height: 90,
  borderColor: '#DB0BFD', 
  borderWidth: '2',
  justifyContent: 'space-around',
  alignItems: 'center',
  
},
photoSong:{
  width:80,
  height:80,
  borderRadius:50,
  
},
songFond:{
  fontFamily:'lakki-reddy',
  fontSize:25,
  color: 'black',
  justifyContent:'center'

  
}
});

export default FullSong