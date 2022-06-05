import { View, Text, StyleSheet, ImageBackground, Image,ScrollView} from 'react-native'
import { Button } from 'react-native-paper';
import React, { useLayoutEffect } from 'react'

const backgroundimg = "../images/fundo.png";
const logo = "../images/logo.png";
const vinho = "../images/vinhoimg.png";


export default function Adega(props) {

    const navigation = props.navigation

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
    }, [])

  
    return (
    <View style={styles.container}>
      {/* ------IMAGEM DE BACKGROUND------- */}   
    <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
    <View style={styles.columnBox}>
     
      <ScrollView>

          <View style={styles.linha}>
            <View style={styles.columnUser}>
            <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>Nome Completo</Text>
            <Text style={{color:'white'}}>Passo Fundo</Text>
            </View>

          <Image
                style={styles.imgLogo}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                />

          </View>

        {/* ------MODELO DE BOX DE VINHOS------- */}
          <View style={{backgroundColor:'#8A0B14', flexDirection: 'row' ,width:300,height:175,marginBottom:25, borderRadius:25}}>
          <View style={{flex:1.1}}>
            <Image source={require(vinho)} style={{width: 110,maxHeight: 175}}/>

          </View>
          <View style={{flex:1.1, paddingTop:20,}}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Nome: </Text>
            <Text style={{color:'white', }}>Vinho Colonial </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Uva: </Text>
            <Text style={{color:'white', }}>Tannat </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Ano: </Text>
            <Text style={{color:'white', }}>1982 </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Vinícola: </Text>
            <Text style={{color:'white', }}>Marca Diabo </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>País: </Text>
            <Text style={{color:'white', }}>Brasil </Text>
            </View>

            <View style={{marginRight:50, marginTop:10}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="pencil"
              onPress={console.log('editar')}>
            </Button>
            </View>



          </View>
          <View style={{ flex:1}}>
          <View style={{marginLeft:40,flex:3}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="delete"
              onPress={console.log('excluir')}>
            </Button>
            </View>
            <View style={{marginLeft:40,}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="google-maps"
              onPress={console.log('excluir')}>
            </Button>
            </View>
          </View>
          </View>         

          <View style={{backgroundColor:'#8A0B14', flexDirection: 'row' ,width:300,height:175,marginBottom:25, borderRadius:25}}>
          <View style={{flex:1.1}}>
            <Image source={require(vinho)} style={{width: 110,maxHeight: 175}}/>

          </View>
          <View style={{flex:1.1, paddingTop:20,}}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Nome: </Text>
            <Text style={{color:'white', }}>Vinho Colonial </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Uva: </Text>
            <Text style={{color:'white', }}>Tannat </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Ano: </Text>
            <Text style={{color:'white', }}>1982 </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Vinícola: </Text>
            <Text style={{color:'white', }}>Marca Diabo </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>País: </Text>
            <Text style={{color:'white', }}>Brasil </Text>
            </View>

            <View style={{marginRight:50, marginTop:10}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="pencil"
              onPress={console.log('editar')}>
            </Button>
            </View>



          </View>
          <View style={{ flex:1}}>
          <View style={{marginLeft:40,flex:3}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="delete"
              onPress={console.log('excluir')}>
            </Button>
            </View>
            <View style={{marginLeft:40,}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="google-maps"
              onPress={console.log('excluir')}>
            </Button>
            </View>
          </View>
          </View>  

          <View style={{backgroundColor:'#8A0B14', flexDirection: 'row' ,width:300,height:175,marginBottom:25, borderRadius:25}}>
          <View style={{flex:1.1}}>
            <Image source={require(vinho)} style={{width: 110,maxHeight: 175}}/>

          </View>
          <View style={{flex:1.1, paddingTop:20,}}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Nome: </Text>
            <Text style={{color:'white', }}>Vinho Colonial </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Uva: </Text>
            <Text style={{color:'white', }}>Tannat </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Ano: </Text>
            <Text style={{color:'white', }}>1982 </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Vinícola: </Text>
            <Text style={{color:'white', }}>Marca Diabo </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>País: </Text>
            <Text style={{color:'white', }}>Brasil </Text>
            </View>

            <View style={{marginRight:50, marginTop:10}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="pencil"
              onPress={console.log('editar')}>
            </Button>
            </View>



          </View>
          <View style={{ flex:1}}>
          <View style={{marginLeft:40,flex:3}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="delete"
              onPress={console.log('excluir')}>
            </Button>
            </View>
            <View style={{marginLeft:40,}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="google-maps"
              onPress={console.log('excluir')}>
            </Button>
            </View>
          </View>
          </View>  

          <View style={{backgroundColor:'#8A0B14', flexDirection: 'row' ,width:300,height:175,marginBottom:25, borderRadius:25}}>
          <View style={{flex:1.1}}>
            <Image source={require(vinho)} style={{width: 110,maxHeight: 175}}/>

          </View>
          <View style={{flex:1.1, paddingTop:20,}}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Nome: </Text>
            <Text style={{color:'white', }}>Vinho Colonial </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Uva: </Text>
            <Text style={{color:'white', }}>Tannat </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Ano: </Text>
            <Text style={{color:'white', }}>1982 </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Vinícola: </Text>
            <Text style={{color:'white', }}>Marca Diabo </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>País: </Text>
            <Text style={{color:'white', }}>Brasil </Text>
            </View>

            <View style={{marginRight:50, marginTop:10}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="pencil"
              onPress={console.log('editar')}>
            </Button>
            </View>



          </View>
          <View style={{ flex:1}}>
          <View style={{marginLeft:40,flex:3}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="delete"
              onPress={console.log('excluir')}>
            </Button>
            </View>
            <View style={{marginLeft:40,}}>
            <Button  labelStyle={{color: 'white', fontSize:25, alignSelf:'flex-start'}}
              icon="google-maps"
              onPress={console.log('excluir')}>
            </Button>
            </View>
          </View>
          </View>  

        
          {/* ------LOGO PICCINI & PITT------- */}  
          <Image source={require(logo)} style={styles.logo}/>
      </ScrollView>
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
  