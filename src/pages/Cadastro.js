import { View, StyleSheet, ImageBackground, Button} from 'react-native'
import { useState } from "react";

import CaixaText from "../components/CaixaText";

const backgroundimg = "../images/fundo.png";

export default function Cadastro() {

  const [nome_completo, setNome_completo] = useState("")
  const [idade, setIdade] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const CadastroBtn = () => {
    if(username == "Admin" && password == "admin"){
      navigation.replace("Home")
    } else {
      Alert.alert("Usuario ou senha invalido!")
    }
    }


return (
    <View style={styles.container}>
      <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
        
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
          security={true}
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
          security={true}
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
