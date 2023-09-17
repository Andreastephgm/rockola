import React from "react";
import { StyleSheet} from 'react-native';


const stylos = StyleSheet.create({
    container : {
      flex : 1,
      alignItems : "center",
      justifyContent : "center",
    },
    imageFondo:{
        flex : 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    imageRockola:{
        height: 100,
        width: 390,
        marginTop: 50,
        marginLeft:20,
        marginBottom: 40,
    },
 buttonSet: {
  backgroundColor: "rgb(81, 11, 91)",
  opacity: 0.7,
  borderRadius: 50,
  borderWidth: 5.0,
  borderColor: "#FB6008",
  paddingHorizontal: 80,
  paddingVertical: 10,
  marginTop:25,
  marginBottom: 10,
  strokeColor: "#FB6008" 
}, 
FontSet:{
  fontFamily: 'lakki-reddy',
  fontSize: 26,
  color: '#F0F402',
  marginLeft: 80,
  
},
contain:{
  backgroundColor: "#0C0B0B",
  flex: 1,
},
homeFond:{
  fontFamily:'lakki-reddy',
  fontSize:50,
  color: '#F0F402',
  marginTop: 20,
  marginLeft: 10,
},
descubreFond:{
  fontFamily:'lakki-reddy',
  fontSize:30,
  color:'#FB6008',
  marginTop:10,
  marginLeft:280,
  
},
seachBar:{
  borderWidth: '2', 
  borderColor: '#DB0BFD', 
  backgroundColor: '#F5F5F5', 
  width: 420, 
  height: 60, 
  borderRadius: 30,
  padding: 20,
},
enterButton:{
  backgroundColor: '#F0F402',
  borderRadius: 60,
  borderWidth: 5.0 ,
  width: 120,
  height:60,
  paddingLeft: 20
},
enterFont:{
  fontFamily:'lakki-reddy',
  fontSize:20,
  color: '#DB0BFD',
  marginTop:10,
}
,
popularfond:{
  fontFamily:'lakki-reddy',
  fontSize:30,
  color:'#EC1AB1',
  marginTop:10,
  marginLeft:10,
},
photoSong:{
  width:80,
  height:80,
  borderRadius:50,
  
},
songContainer:{
  flexDirection:'row',
  backgroundColor:"#FB6008",
  borderRadius:28,
  width: 420,
  height: 90,
  borderColor: '#DB0BFD', 
  borderWidth: '2',
  justifyContent: 'space-around',
  alignItems: 'center',
  
},
songFond:{
  
  fontFamily:'lakki-reddy',
  fontSize:25,
  color: 'black',
  justifyContent:'center' 
}
});

export default stylos