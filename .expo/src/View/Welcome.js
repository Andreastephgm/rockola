import React, { useEffect, useState} from "react";
import stylos from "./stylos/stylos";
import { ImageBackground,Text, Image, onPress,View, TouchableOpacity} from "react-native";
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const imagenBackground = {uri: 'https://img.freepik.com/premium-photo/music-black-background-generative-ai_849906-10116.jpg?w=1380'}
const Welcome = ({navigation}) => {
  const {fontsLoaded, setFontLoaded} = useState(false);
  useEffect(()=>{
       if(!fontsLoaded){
          loadFonts();
      }
  });

  const loadFonts = async() =>{
      await Font.loadAsync({
          'lakki-reddy': require('/assets/LakkiReddy-Regular-1.ttf')
      });
      setFontLoaded(true);

      if(!fontsLoaded){
          return(<View/>);
      }
  }

    return(
        <ImageBackground style={stylos.imageFondo} source={imagenBackground}>
          <Image style={stylos.imageRockola} source={require('/assets/Rockola.png')}/> 
          <TouchableOpacity style={stylos.buttonSet}
            onPress={() => navigation.navigate('LogIn')}>
              <Text style={stylos.FontSet}>Ingresar</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={stylos.buttonSet}
            onPress={() => navigation.navigate('Registro')}>
              <Text style={stylos.FontSet}>Registro</Text> 
            </TouchableOpacity> 
        </ImageBackground>
    );
}


export default Welcome