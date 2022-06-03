import { useState } from "react";
import { Checkbox } from 'react-native-paper';
import { ImageBackground, StyleSheet,Text, View, Image,Button,Alert,ScrollView} from "react-native";
import CaixaText from "../components/CaixaText";

import * as loginService from '../services/LoginService'

const backgroundimg = "../images/fundo.png";
const logo = "../images/logo.png";


export default function Login(props) {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [checked, setChecked] = useState(false);

  const navigation = props.navigation

  // const efetuarLogin = async() => {
  //   try {
  //       let user = await loginService.login(email, senha)
  //       navigation.replace("Home")
  //   } catch (error) {
  //       Alert.alert("Erro ao efetuar Loging", error)
  // }}

  const efetuarLogin = () => {
    if(email == "" && senha == ""){
      navigation.replace("Home")
    } else {
      Alert.alert("Usuario ou senha invalido!")
    }
 }

  const pageCadastro = () => {
    navigation.replace("Cadastro")
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
          
      <ScrollView> 
        <View style={styles.linha}>
        <Image source={require(logo)} style={styles.logo}/>

        
          <View style={{marginTop:40}}>
            <CaixaText 
              value={email}
              set = {setEmail}
              place = "Email"
              teclakey='email-address'
            />
            <CaixaText 
              value={senha}
              set = {setSenha}
              place = "Password"
              security={true}
            />
            
            <View style={styles.checkboxTheme}>
              <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              />
              <Text style={{fontSize: 15,color: "white",textAlign: "left",fontWeight: "bold"}}> Lembre-me</Text>
            </View>


          </View>
        

        <View style={{backgroundColor: 'white',minWidth: 300, borderRadius: 10, marginTop: 35 , margin:30}}>
          <Button
          title='Entrar'
          color='#262626'
          onPress={efetuarLogin}
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
      logo:{
        width: 250,
        height:150,
        justifyContent: 'center',
        alignContent: "center"
      },
      linha:{
        marginTop: 60,
        flexDirection: "column",
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
      marginTop: 50,

    },
    textocadastro:{
      fontSize: 15,
      color: "white",
      marginHorizontal:30
    },
    checkboxTheme:{
     marginLeft:30, 
     width:100, 
     flexDirection: "row",
     alignItems: 'center'
    }
  });
  