import { View, StyleSheet, ImageBackground, Alert,ScrollView} from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import * as loginService from '../services/LoginService'
import CaixaText from "../components/CaixaText";

const backgroundimg = "../images/fundo.png";

export default function Cadastro(props) {

  const [nome_completo, setNome_completo] = useState("")
  const [idade, setIdade] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const navigation = props.navigation

  const CadastroBtn = async() => {
    try {
      let retorno = await loginService.createUser(email, senha)
      Alert.alert(retorno)
      navigation.replace("Home")
    } catch (error) {
      Alert.alert("Erro ao registrar usuario", error)
    }}


return (
    <View style={styles.container}>
      {/* ------IMAGENS DE BACKGROUND------- */}  
      <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
      
      <ScrollView>  
      <View style={{marginTop:60}}>
        {/* ------CAIXA DE NOME COMPLETO------- */} 
        <CaixaText 
          value={nome_completo}
          set = {setNome_completo}
          place = "Nome Completo"
        />
        {/* ------CAIXA DE IDADE------- */}     
        <CaixaText 
          value={idade}
          set = {setIdade}
          place = "Idade"
        />
        {/* ------CAIXA DE TELEFONE------- */}     
        <CaixaText 
          value={telefone}
          set = {setTelefone}
          place = "Telefone"
        />
        {/* ------CAIXA DE E-MAIL------- */}   
        <CaixaText 
          value={email}
          set = {setEmail}
          place = "E-mail"
          teclakey='email-address'
        />
        {/* ------CAIXA DE SENHA------- */}   
        <CaixaText 
          value={senha}
          set = {setSenha}
          place = "Senha"
          security={true}
        />
        </View>
        
        {/* ------BOTÃO PARA CADASTRAR------- */}   
        <Button
          style={{backgroundColor: 'white',minWidth: 300, borderRadius: 20, marginHorizontal: 30 , margin:30}}
          labelStyle={{color: '#8A0B14', fontSize: 15}}
          mode="contained" 
          onPress={CadastroBtn}>
            Cadastrar
          </Button>

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
    }
});
