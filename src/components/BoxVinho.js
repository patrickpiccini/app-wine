import { View, Text ,StyleSheet, Image,Alert} from 'react-native';
import React, { useLayoutEffect, useState } from 'react'
import { Button } from 'react-native-paper';
import * as wineService from '../services/VinhoService'


const vinho = "../images/vinhoimg.png";

export default function BoxVinho(props) {

    const data = props.dados
    const [nomeVinho, setNomeVinho] = useState()
    const [uva, setUva] = useState()
    const [ano, setAno] = useState()
    const [vinicola, setVinicola] = useState()
    const [endereco, setEndereco] = useState()
    const [key, setKey] = useState()


    useLayoutEffect(() => {
        setNomeVinho(data.nome_vinho)
        setUva(data.uva)
        setAno(data.ano)
        setVinicola(data.vinicola)
        setEndereco(data.endereco)
        setKey(data.id)
    })

    const excluirVinho = () => {


      Alert.alert("Deseja Excluir?", "Esse vinho será apagado permanentemente!", [
          {
              text: "Cancel",
              style: "cancel"
          },
          {
              text: "OK", onPress: async () => {
                  try {
                    console.log(key);
                      await wineService.deleteWine(key)
                      props.getWineFunction()
                      Alert.alert("Dados Excluídos com Sucesso")
                  } catch (error) {
                      Alert.alert("Você não possui permissão para excluir esse registro!")
                  }
              }
          }
      ])

  }

  return (
    <View style={{backgroundColor:'#8A0B14', flexDirection: 'row' ,width:300,height:175,marginBottom:25, borderRadius:25}}>
    <View style={{flex:1.1}}>
      <Image source={require(vinho)} style={{width: 110,maxHeight: 175}}/>

    </View>
    <View style={{flex:1.1, paddingTop:20,}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color:'white', fontWeight:'bold'}}>Nome: </Text>
      <Text style={{color:'white', }}>{nomeVinho}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={{color:'white', fontWeight:'bold'}}>Uva: </Text>
      <Text style={{color:'white', }}>{uva} </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={{color:'white', fontWeight:'bold'}}>Ano: </Text>
      <Text style={{color:'white', }}>{ano} </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={{color:'white', fontWeight:'bold'}}>Vinícola: </Text>
      <Text style={{color:'white', }}>{vinicola} </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={{color:'white', fontWeight:'bold'}}>Endereço: </Text>
      <Text style={{color:'white', }}>{endereco} </Text>
      </View>

      <View style={{marginRight:50, marginTop:10}}>
      <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
        icon="pencil"
        onPress={{}}>
      </Button>
      </View>



    </View>
    <View style={{ flex:1}}>
    <View style={{marginLeft:40,flex:3}}>
      <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
        icon="delete"
        onPress={excluirVinho}>
      </Button>
      </View>
      <View style={{marginLeft:40,}}>
      <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
        icon="google-maps"
        onPress={{}}>
      </Button>
      </View>
    </View>
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
  