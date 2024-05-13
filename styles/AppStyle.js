import { StyleSheet } from "react-native";
import Color from "./Color";

export  const globalStyles = StyleSheet.create({
    container:{
        flex : 1,
        
    },
    titleText:{
        fontSize :24,
        padding:12,
    },
    profileImg:{
        width :350,
        height :350,
        borderRadius :12,
    },
    containerItem : {
        alignItems :'center',
        padding:14
    },
    childContainer :{
        width :"100%",
        marginTop :12,
        flexDirection :'row',
        alignItems :'center',
        justifyContent:'space-around',
        paddingVertical :20,
    },
    titleInfo : {
        fontSize :18,
    },
    containerPortofio :{
        marginTop :25
    }
    
   
})

