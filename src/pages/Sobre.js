import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native'
import { Button } from 'react-native-paper';
import React, { useLayoutEffect } from 'react'

const backgroundimg = "../images/fundo.png";
const logo = "../images/logo.png";

export default function Sobre(props) {

    const navigation = props.navigation

    const faqFunction = () => {
        try {
          navigation.push("Faq")
        } catch (error) {
          Alert.alert(error)
        }}

    useLayoutEffect(() => {
    {/* ------BOTÃO DE FAQ------- */} 
        navigation.setOptions({headerRight: () => 
            <Button  labelStyle={{color: 'white', fontSize:15, }}
            mode="text" 
            onPress={faqFunction}>
            FAQ
            </Button>
    
        })
    
        }, [])
  
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
                Desenvolvedores
            </Text>
            <Text style={{fontSize:20,color:'white', textAlign:'center'}}>
                Patrick Berlatto Piccini  {'\n'}
                Vitalino Pitt {'\n'}
            </Text>

            {/* ------PROFESOR------- */}
            <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>
                Professor
            </Text>
            <Text style={{fontSize:20,color:'white'}}>
                Marcos Roberto dos Santos  {'\n'}
            </Text>

            {/* ------MATÉRIA------- */}
            <Text style={{fontSize:20,color:'white', textAlign:'center'}}>
                Tópicos Especiais em Computação {'\n'}
            </Text>
            
            {/* ------INSTITUIÇÃO------- */}
            <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>
                IMED
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
        alignSelf:'center'

      },
      columnBox:{
        flex:1,

        marginHorizontal:30,
        flexDirection: "column",
        justifyContent: 'center',
        alignContent: "center",
      },
      linha:{
        marginHorizontal:30,
        flexDirection: "row",
        alignItems: 'center',
      }
  });
  