import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Welcome from '../View/Welcome';
import Home from '../View/Home';
import LogIn from '../View/LogIn';
import Registro from '../View/Registro';
import Profile from '../View/Profile';
import Playlist from '../View/Playlist';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator(){
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color, size})=>(
          <Ionicons name="home"  color={'#44EAEA'} size={'30'}/>
        )
      }} />
         <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:({color, size})=>(
          <Ionicons name="person" color={'#F13BFB'} size={'30'}/>
        )
      }} />
           <Tab.Screen name="Playlist" component={Playlist} options={{tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons name="playlist-music"  color={'#39FF14'} size={'30'}/>
        )
      }} />
         <Tab.Screen name="Bienvenido" component={Welcome} options={{tabBarIcon:({color, size})=>(
          <Ionicons name="log-out" color={'#FC4B08'} size={'30'} />
        )
      }} />
        
      </Tab.Navigator>
    )
}

function StackNavigator(){
    return(
      
        <Stack.Navigator>
            
            <Stack.Screen
            name= "Welcome"
            component= {Welcome}
            options={{headerShown: false}}
            />
            
            <Stack.Screen
            name= "LogIn"
            component= {LogIn}
            />
             <Stack.Screen
            name= "Registro"
            component= {Registro}
            />
             <Stack.Screen
            name= "Home"
            component= {TabNavigator}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name= "Profile"
            component= {TabNavigator}

            />
            <Stack.Screen
            name= "Playlist"
            component= {TabNavigator}
            />
           

        </Stack.Navigator>
       
    );
}
const MainStack = () => {
   
    return(
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>

       
    )
}

export default MainStack