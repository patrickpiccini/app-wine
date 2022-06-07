import { View, StyleSheet, ImageBackground, Alert,ScrollView} from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import * as loginService from '../services/LoginService'
import * as userService from '../services/UsuarioService'
import CaixaText from "../components/CaixaText";

const backgroundimg = "../images/fundo.png";

export default function Cadastro(props) {

  const navigation = props.navigation

  const [form, setForm] = useState({})


  const CadastroBtn = async() => {
    if (form.nome_completo && form.idade && form.telefone && form.email && form.senha) {
      try {
        let dbRetorno = await userService.createUser(form)
        let retorno = await loginService.createUser(form.email, form.senha)
        Alert.alert(retorno)
        setForm({})
        navigation.replace("Home", form)
      } catch (error) {
        Alert.alert("Erro ao registrar usuario", error, error.message)
      }
      } else {
        Alert.alert("Campos não preenchidos corretamente!")
      }
  }


return (
    <View style={styles.container}>
      {/* ------IMAGENS DE BACKGROUND------- */}  
      <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
      
      <ScrollView>  
      <View style={{marginTop:60}}>
        {/* ------CAIXA DE NOME COMPLETO------- */} 
        <CaixaText 
          value={form.nome_completo}
          set = {(value) => setForm(Object.assign({}, form, { nome_completo: value }))}
          place = "Nome Completo"
        />
        {/* ------CAIXA DE IDADE------- */}     
        <CaixaText 
          value={form.idade}
          set = {(value) => setForm(Object.assign({}, form, { idade: value }))}
          place = "Idade"
        />
        {/* ------CAIXA DE TELEFONE------- */}     
        <CaixaText 
          value={form.telefone}
          set = {(value) => setForm(Object.assign({}, form, { telefone: value }))}
          place = "Telefone"
        />
        {/* ------CAIXA DE CIDADE------- */}     
        <CaixaText 
          value={form.cidade}
          set = {(value) => setForm(Object.assign({}, form, { cidade: value }))}
          place = "Cidade"
        />
        {/* ------CAIXA DE E-MAIL------- */}   
        <CaixaText 
          value={form.email}
          set = {(value) => setForm(Object.assign({}, form, { email: value }))}
          place = "E-mail"
          teclakey='email-address'
        />
        {/* ------CAIXA DE SENHA------- */}   
        <CaixaText 
          value={form.senha}
          set = {(value) => setForm(Object.assign({}, form, { senha: value }))}
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
