import { View, Text, StyleSheet, ImageBackground, Image,ScrollView, Alert, FlatList} from 'react-native'
import { Button } from 'react-native-paper';
import React, { useLayoutEffect ,useState, useEffect} from 'react'
import * as wineService from '../services/VinhoService'
import BoxVinho from '../components/BoxVinho';
import { useDispatch, useSelector } from 'react-redux';


const backgroundimg = "../images/fundo.png";
const logo = "../images/logo.png";


export default function Adega(props) {

    const navigation = props.navigation
    const userInfo = useSelector(store => store.user)
    const [infoVinho, setInfoVinho] = useState()
    
    {/* ------VAI PARA TELA DE CADASTRO DE VINHO------- */}  
    const cadastroVinho = () => {
      try {
        navigation.push("AddVinho")
      } catch (error) {
        Alert.alert(error)
      }}

    useLayoutEffect(() => {
      {/* ------BOTÃO DE LOGOFF------- */} 
      navigation.setOptions({headerRight: () => 
        <Button  labelStyle={{color: 'white', fontSize:30, }}
        icon="plus"
        onPress={cadastroVinho}>
        </Button>
    
      })


      getWineFunction()
    }, [])

    {/* ------SELECT DE TODOS OS VINHOS DO USUARIO------- */}  
    const getWineFunction = async () =>{
      try{
      let dataWine = await wineService.getWine(userInfo.email)
      setInfoVinho(dataWine)
    } catch (error) {
      Alert.alert(error)
    }}

  {/* ------HEADER DA FLATLIST------- */} 
    const getHeader = () => {
      return <View style={styles.linha}>
      <View style={styles.columnUser}>
      <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>{userInfo.nome_completo}</Text>
      <Text style={{color:'white'}}>{userInfo.cidade}</Text>
      </View>

    <Image
          style={styles.imgLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          />

    </View>
  };

  {/* ------FOOTER DA FLATLIST------- */} 
  const getFooter = () => {
      {/* ------LOGO PICCINI & PITT------- */}  
      return <Image source={require(logo)} style={styles.logo}/>
  };


  return (
    <View style={styles.container}>
      {/* ------IMAGEM DE BACKGROUND------- */}   
    <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
    <View style={styles.columnBox}>

        {/* ------MODELO DE BOX DE VINHOS------- */}
          <FlatList
              data={infoVinho}
              renderItem={ ({item}) => {
                  return <BoxVinho
                  dados={item}
                  navigation={navigation}
                  getWineFunction={getWineFunction}
                  />
              }}
              keyExtractor={item => item.id}
              ListHeaderComponent={getHeader}
              ListFooterComponent={getFooter}
              />

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
        alignSelf: "center"
      },
      columnBox:{
        marginHorizontal:30,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
      },
      linha:{
        marginTop: 40,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom:30
      },
      imgLogo: {
        width: 90,
        height: 90,
        borderRadius: 100,
    
      },
      columnUser:{
        flex:1,
        alignItems:'flex-start',
      }
  });
  