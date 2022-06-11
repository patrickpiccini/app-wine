import { View, StyleSheet, ImageBackground, Dimensions,Alert } from 'react-native'
import * as coordService from '../database/MapsService'
import React, {  useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import * as Location from "expo-location"


const backgroundimg = "../images/fundo.png";

export default function Mapa(props) {

    const navigation = props.navigation 
    const data = props.route
    
    const keyVinho = data.params

    const [vinhoLocal, setVinhoLocal] = useState([])
    const [location, setLocation] = useState({
      coords: {
        latitude: -28.2542113,
        longitude: -52.4423025,
      }
    })

    {/* ------BUSCA LOCALIZAÇÃO LOCALIZAÇÃO ATUAL DO CELULAR------- */} 
    const myPosition = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return
      } else {
        let myLocation = await Location.getCurrentPositionAsync({})
        setLocation(myLocation)
      }
  
    }
    {/* ------BUSCA LOCALIZAÇÃO DE TODAS AS VINICULA------- */} 
    const buscarVinicolas = async () => {
      try {
        let dados = await coordService.getCoord()
        setVinhoLocal(dados)
      } catch (error) {
  
      }
    }

    {/* ------BUSCA LOCALIZAÇÃO DA VINICULA POR UUID------- */}   
    const buscarVinicolasPoruuid = async () => {
      try {
        setVinhoLocal([])
        let dados = await coordService.getCoordUnique(keyVinho)
        setVinhoLocal(dados)
      } catch (error) {
  
      }
    }

    const focustPoint = () =>{
      if(keyVinho){
        initialRegion={
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.10,
          longitudeDelta: 0.10,
        }}    
  }
    

    useEffect(() => {
      myPosition()
      if (keyVinho){
        buscarVinicolasPoruuid()
      } else {
        buscarVinicolas()
      }
      
    }, [])
  
    return (
    <View style={styles.container}>
      {/* ------IMAGEM DE BACKGROUND------- */}   
    <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
      <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.10,
            longitudeDelta: 0.10,
          }}
        >
        {/* ------PONTO DA LOCALIZAÇÃO ATUAL NO MAPA------- */}   
        {location && <Marker
          coordinate={
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,

            }
          }
          title='Você'
          icon='map-marker'
        />}
          {/* ------PONTOS DE VINICULA NO MAPA------- */}   
          {vinhoLocal.map((vinicola, key) => <Marker

          key={key}          
          coordinate={{ 
            latitude: vinicola.lat,
            longitude: vinicola.lng,
          }}
          title={vinicola.vinicola}
          icon='map-marker'
          onPress={() => Alert.alert(`Vinicola: ${vinicola.vinicola}\nEndereço: ${vinicola.endereco}`)}

          />)}

      </MapView>
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
      },
      linha:{
        marginTop: 40,
        marginHorizontal:30,
        flexDirection: "row",
        alignItems: 'center',
      },
      map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
      }
  });
  