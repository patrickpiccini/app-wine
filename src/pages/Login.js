import { useState } from "react";
import { ImageBackground, StyleSheet,Text, View, Image,Button } from "react-native";
import CaixaText from "../components/CaixaText";

const backgroundimg = "../images/fundo.png";
const logo = "../images/logo.png";


export default function Login(props) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigation = props.navigation

  const validaLogin = () => {
    if(username == "Admin" && password == "admin"){
      navigation.replace("Home")
    } else {
      Alert.alert("Usuario ou senha invalido!")
    }
    }

  const pageCadastro = () => {
    navigation.push("Cadastro")
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
          

        <View style={styles.linha}>
        <Image source={require(logo)} style={styles.logo}/>

          <View style={{marginTop:40}}>
            <CaixaText 
              value={username}
              set = {setUsername}
              place = "Username"
            />
            <CaixaText 
              value={password}
              set = {setPassword}
              place = "Password"
              security={true}
            />
          </View>

        <View style={{backgroundColor: 'white',minWidth: 300, borderRadius: 10, marginHorizontal: 30 , margin:30}}>
          <Button
          title='Entrar'
          color='#262626'
          onPress={validaLogin}
          />
        </View>

        <View style={styles.boxCadastro}>
          <Text style={styles.textocadastro}>
             Não tem uma conta ainda?</Text>
          <Button 
          title='Cadastre-se' 
          color='#00A3FF'
          onPress={pageCadastro}/>
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
        width: 250,
        height:150,
        justifyContent: 'center',
        alignContent: "center"
      },
      linha:{
        marginTop: 60,
        flexDirection: "colunm",
        // backgroundColor: '#262626',
        alignItems: 'center',
      },
      campo:{
        fontSize: 15,
        color: "white",
        marginHorizontal:30,
        alignContent: "flex-start",
    },
    boxCadastro:{
      marginTop: 60,

    },
    textocadastro:{
      fontSize: 15,
      color: "white",
      marginHorizontal:30,
    }
  });
  