import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native'
import { Button } from 'react-native-paper';
import React, { useLayoutEffect } from 'react'

const backgroundimg = "../images/fundo.png";
const logo = "../images/logo.png";

export default function Adega(props) {

    const navigation = props.navigati

  
    return (
    <View style={styles.container}>
      {/* ------IMAGEM DE BACKGROUND------- */}   
    <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>

    <View style={styles.columnBox}>

        {/* ------LOGO PICCINI & PITT------- */}  
        <Image source={require(logo)} style={styles.logo}/>

        <View style={{alignItems:'center', justifyContent:'center', marginTop:15}}>
            
            {/* ------DESENVOLVEDORES------- */}
            <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>
                Titúlo
            </Text>
            <Text style={{fontSize:20,color:'white', textAlign:'center'}}>
                Informações
            </Text>

        </View>

    </View>
    
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
      },
      logo:{
        width: 200,
        height:100,
        justifyContent: 'center',
        alignContent: "center"
      },
      columnBox:{
        marginTop: 40,
        marginHorizontal:30,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
      },
      linha:{
        marginTop: 40,
        marginHorizontal:30,
        flexDirection: "row",
        alignItems: 'center',
      }
  });
  