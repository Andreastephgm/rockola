import  React from 'react';
import {View,onPress, Text, Image,TouchableOpacity, StyleSheet, TextInput, FlatList} from 'react-native';
import Song from '../Song';
import { AntDesign } from '@expo/vector-icons';
import stylos from './stylos/stylos';


const Home = () => {
    
    return(
        <View style={stylos.contain}> 
            <Text style={stylos.homeFond}>Home</Text>
            <Text style={stylos.descubreFond}>Descubre!</Text>
            <View style={{flexDirection:'column'}}>
            <TextInput style={stylos.seachBar} 
            placeholder = "🔎"
            />
            <TouchableOpacity style={stylos.enterButton}>
                <Text style={stylos.enterFont}>Buscar</Text>
            </TouchableOpacity>
            </View >
            <Text style={stylos.popularfond}>Los más populares</Text>
            
            <FlatList
             data={Song}
             ItemSeparatorComponent={() => <Text> </Text>}
             renderItem={({item: songs}) =>
             <View  style={stylos.songContainer} key={songs.titulo}>  
             <Image style={stylos.photoSong}source={{uri:songs.foto}}/>
             <View style={{flexDirection:'column'}}>
                     <Text style={stylos.songFond}>{songs.titulo}</Text>
                     <Text style={stylos.songFond} >{songs.Artista}</Text>
             </View>  
                <TouchableOpacity style={{marginTop:10}} onPress={onPress}>
                     <AntDesign name="play" size={60} color="purple"  />
                 </TouchableOpacity>   
             </View>
            } >
            </FlatList>
         </View>
    );}

    

    export default Home