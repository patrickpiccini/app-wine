import { View, Text, StyleSheet, ImageBackground, Alert, FlatList, VirtualizedList} from 'react-native'
import * as hermonizacaoService from '../database/HarmonizacaoService'
import React, { useLayoutEffect ,useState, useEffect} from 'react'
import HarmonizacaoComponent from '../components/HarmonizacaoComponent';



const backgroundimg = "../images/fundo.png";


export default function Harmonizacao(props) {

    const [infoHarmoniza, setInfoHarmoniza] = useState()
    
    useLayoutEffect(() => {

      getHarmonizacaoFunction()

    }, [])
    

    {/* ------SELECT DE TODOS AS HARMONIZAÇÕES------- */}  
    const getHarmonizacaoFunction = async () =>{
      try{
      let dataWine = await hermonizacaoService.getHermonizacao()
      setInfoHarmoniza(dataWine)
    } catch (error) {
      Alert.alert(error)
    }};

  return (
    <View style={styles.container}>
      {/* ------IMAGEM DE BACKGROUND-------    */}
    <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
    <View style={styles.columnBox}>
    <View style={{marginTop:25}}>

        {/* ------MODELO DE BOX DE VINHOS------- */}
          <FlatList
              data={infoHarmoniza}
              renderItem={ ({item}) => {
                return <HarmonizacaoComponent
                dados={item}
                />
                
              }}
              keyExtractor={item => item.key}
              />
  
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
    columnBox:{
      marginHorizontal:30,
      
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center'
    },



});