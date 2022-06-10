import { useState, useLayoutEffect} from "react";
import { Checkbox, Button } from 'react-native-paper';
import { ImageBackground, StyleSheet,Text, View, Image,Alert,ScrollView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import CaixaText from "../components/CaixaText";

import * as loginService from '../services/LoginService';
import * as userService from '../services/UsuarioService';
import * as UserAction from '../services/actions/UserAction';
import { useSelector, useDispatch } from 'react-redux';

const backgroundimg = "../images/fundo.png";
const logo = "../images/logo.png";


export default function Login(props) {

  const navigation = props.navigation
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [lembreme, setLembreme] = useState(false);
  const dispatch = useDispatch()



  {/* ------VERIFICA SE EXITE EMAIL E SENHA NO ASYNCSTORAGE------- */} 
  const verificarLembreme = async () => {
    let emailMemory = await AsyncStorage.getItem("email")
    let senhaMemory = await AsyncStorage.getItem("senha")
    if (emailMemory) {
        setEmail(emailMemory)
        setSenha(senhaMemory)
        setLembreme(true)
    }
  }

  useLayoutEffect(() => {
    verificarLembreme()
  }, [])

  const lembrar = async () => {
    setLembreme(!lembreme)

    if (!lembreme) {
        await AsyncStorage.setItem('email', email)
        await AsyncStorage.setItem('senha', senha)

    } else {
        await AsyncStorage.removeItem('email')
        await AsyncStorage.removeItem('senha')
    }
}

{/* ------FUNÇÃO PARA LOGAR ATRAVÉZ DO FIREBASE------- */} 
  const efetuarLogin = async() => {
    try {
      let dbRetorno = await userService.getUser(email)
        let user = await loginService.login(email, senha)
        dispatch(UserAction.setUser(dbRetorno))
        navigation.replace("Home")
    } catch (error) {
        Alert.alert("Erro ao efetuar Loging", error)
  }}

{/* ------FUNÇÃO PARA IR À TELA DE CADASTRO------- */} 
  const pageCadastro = () => {
    navigation.push("Cadastro")
  }

  return (
    <View style={styles.container}>
      {/* ------IMAGEM DE BACKGROUND------- */}  
      <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
          
      <ScrollView> 
        <View style={styles.column}>
        {/* ------LOGO PICCINI & PITT------- */}  
        <Image source={require(logo)} style={styles.logo}/>

          <View style={{marginTop:40}}>
            {/* ------CAIXA DE EMAIL------- */}  
            <CaixaText 
              value={email}
              set = {setEmail}
              place = "Email"
              teclakey='email-address'
            />
            {/* ------CAIXA DE SENHA------- */}  
            <CaixaText 
              value={senha}
              set = {setSenha}
              place = "Password"
              security={true}
            />
            
            {/* ------CHECKBOX DO LEMBREME------- */}  
            <View style={styles.checkboxTheme}>
              <Checkbox
              status={lembreme ? 'checked' : 'unchecked'}
              onPress={lembrar}
              />
              <Text style={{fontSize: 15,color: "white",textAlign: "left",fontWeight: "bold"}}> Lembre-me</Text>
            </View>
          </View>
        
          {/* ------BOTÃO DE LOGIN------- */}           
          <Button
          style={{padding:0,backgroundColor: 'white',minWidth: 300, borderRadius: 20, marginHorizontal: 30 , margin:30}}
          labelStyle={{color: '#8A0B14', fontSize: 15}}
          mode="contained" 
          onPress={efetuarLogin}>
            Login
          </Button>
            

        {/* ------TEXTO ACIMA DO BOTÃO DE CADASTRO------- */}    
        <View style={styles.boxCadastro}>
          <Text style={styles.textocadastro}>
             Não tem uma conta ainda?</Text>
        
        {/* ------BOTÃO DE CADASTRAR------- */}
          <Button 
          labelStyle={{color: '#00A3FF', fontSize:16,fontWeight:"bold"}}
          mode="text" 
          onPress={pageCadastro}>
            Cadastre-se
          </Button>

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
      column:{
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
      marginBottom: 20,

    },
    textocadastro:{
      fontSize: 15,
      color: "white",
      marginHorizontal:30
    },
    checkboxTheme:{
     color: 'white',
     marginLeft:30, 
     width:100, 
     flexDirection: "row",
     alignItems: 'center'
    }
  });
  