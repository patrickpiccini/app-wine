import { View, StyleSheet, ImageBackground, Button, Alert,ScrollView} from 'react-native'
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
      <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
      
      <ScrollView> 
      <View style={{marginTop:60}}>
        <CaixaText 
          value={nome_completo}
          set = {setNome_completo}
          place = "Nome Completo"
        />
        <CaixaText 
          value={idade}
          set = {setIdade}
          place = "Idade"
        />
        <CaixaText 
          value={telefone}
          set = {setTelefone}
          place = "Telefone"
        />
        <CaixaText 
          value={email}
          set = {setEmail}
          place = "E-mail"
          teclakey='email-address'
        />
        <CaixaText 
          value={senha}
          set = {setSenha}
          place = "Senha"
          security={true}
        />
        </View>

        <View style={{backgroundColor: 'white',minWidth: 300, borderRadius: 10, marginHorizontal: 30 , margin:30}}>
          <Button
          title='Cadastro'
          color='#262626'
          onPress={CadastroBtn}
          />
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
    }
});
