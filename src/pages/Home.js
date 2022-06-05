import { StyleSheet, Text, View, Alert, ImageBackground,ScrollView,Image,TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Button } from 'react-native-paper';
import * as loginService from '../services/LoginService'

export default function Home(props) {

  const backgroundimg = "../images/fundo.png";
  const logo = "../images/logo.png";
  const adegaimg = "../images/adega.png";
  const harmonizaçãoimg = "../images/harmonizar.png";
  const mapaimg = "../images/vinicola.png";

  const navigation = props.navigation

  {/* ------FUNÇÃO QUEDESLOGA O USUARIO DO APP------- */} 
  const logoff = async () => {
    try {
      await loginService.logoff()
      navigation.replace("Login")
    } catch (error) {
      Alert.alert(error)
    }}

  const sobre = () => {
      try {
        navigation.push("Sobre")
      } catch (error) {
        Alert.alert(error)
      }}


  
  useLayoutEffect(() => {
    {/* ------BOTÃO DE LOGOFF------- */} 
    navigation.setOptions({headerLeft: () => 
      <Button  labelStyle={{color: 'white', fontSize:15, }}
      mode="text" 
      onPress={logoff}>
        Sair
      </Button>

    })

    {/* ------BOTÃO DE SOBRE------- */} 
    navigation.setOptions({headerRight: () => 
      <Button  labelStyle={{color: 'white', fontSize:15, }}
      mode="text" 
      onPress={sobre}>
        Sobre
      </Button>

    })

  }, [])

  return (
    <View style={styles.container}>
      {/* ------IMAGEM DE BACKGROUND------- */}   
    <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
      <ScrollView>
        
        <View style={styles.column}>
          {/* ------IMAGEM DO USUSARIO------- */}   
          <View style={styles.linha}>
            <Image
            style={styles.imgLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            />
          {/* ------TEXTO BEM VINDO------- */}   
            <View style={{flex:1, alignItems:'flex-end'}}>
              <Text style={styles.txtLogo}>
                Bem Vindo!
              </Text>
            </View>
          </View>
          
          <View style={styles.columnImg}>
          {/* ------BOTÃO ADEGA------- */}   
          <TouchableOpacity onPress={() => props.navigation.push("Adega")}>
            <ImageBackground 
            resizeMode="cover"
            imageStyle={{ borderRadius: 30}}
            source={require(adegaimg)}
            style={styles.imgButton}            
            >
            <Text style={styles.txtImgButton}>Adega</Text>
            </ImageBackground>
          </TouchableOpacity>

          {/* ------BOTÃO HARMONIZAÇÃO------- */}   
          <TouchableOpacity onPress={() => props.navigation.push("Harmonizacao")}>
            <ImageBackground 
            resizeMode="cover"
            imageStyle={{ borderRadius: 30}}
            source={require(harmonizaçãoimg)}
            style={styles.imgButton}
            >
            <Text style={styles.txtImgButton}>Harmonização</Text>
            </ImageBackground>
          </TouchableOpacity>

          {/* ------BOTÃO MAPA------- */}   
          <TouchableOpacity onPress={() => props.navigation.push("Mapa")}>
            <ImageBackground 
            resizeMode="cover"
            imageStyle={{ borderRadius: 30}}
            source={require(mapaimg)}
            style={styles.imgButton}
            >
            <Text style={styles.txtImgButton}>Mapa</Text>
            </ImageBackground>
          </TouchableOpacity>

          {/* ------LOGO PICCINI & PITT------- */}  
          <Image source={require(logo)} style={styles.logo}/>
          
          </View>

        </View>
      </ScrollView>
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
      column:{
        flexDirection: "column",
      },
      columnImg:{
        marginTop: 40,
        marginHorizontal:30,
        flexDirection: "column",
        alignItems: 'center',
      },
      linha:{
        marginTop: 40,
        marginHorizontal:30,
        flexDirection: "row",
        alignItems: 'center',
      },
      imgLogo: {
        width: 90,
        height: 90,
        borderRadius: 100,
      },
      txtLogo:{
        color: 'white',
        fontSize: 25,       
      },
      imgButton:{ 
        height: 110, 
        width: 300, 
        marginBottom:20,
        justifyContent:'center'
      },
      txtImgButton:{
        color:'white',
        fontSize: 35,
        textAlign: 'center',
        textShadowRadius: 30,
        textShadowColor:'black',
        textShadowOffset: {width: -1, height: 5},
      },
      logo:{
        width: 200,
        height:100,
        justifyContent: 'center',
        alignContent: "center"
      },
  });
  