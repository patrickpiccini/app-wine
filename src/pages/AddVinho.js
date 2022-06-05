import { View, StyleSheet, ImageBackground, Alert,ScrollView} from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import * as loginService from '../services/LoginService'
import CaixaText from "../components/CaixaText";

const backgroundimg = "../images/fundo.png";

export default function AddVinho(props) {

  const navigation = props.navigation

  const [nome_vinho, setNome_Vinho] = useState("")
  const [uva, setUva] = useState("")
  const [ano, setAno] = useState("")
  const [vinicola, setVinicola] = useState("")
  const [pais, setPais] = useState("")

  const CadastroBtn = ''
  

return (
    <View style={styles.container}>
      {/* ------IMAGENS DE BACKGROUND------- */}  
      <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
      
      <ScrollView>  
      <View style={{marginTop:60}}>
        {/* ------CAIXA DE NOME DO VINHO------- */} 
        <CaixaText 
          value={nome_vinho}
          set = {setNome_Vinho}
          place = "Nome do Vinho"
        />
        {/* ------CAIXA DE NOME DA UVA------- */}     
        <CaixaText 
          value={uva}
          set = {setUva}
          place = "Nome da Uva"
        />
        {/* ------CAIXA ANO------- */}     
        <CaixaText 
          value={ano}
          set = {setAno}
          place = "Ano Fabricação"
        />
        {/* ------CAIXA DA VINICOLA------- */}   
        <CaixaText 
          value={vinicola}
          set = {setVinicola}
          place = "Vinicola"

        />
        {/* ------CAIXA DO PAIS------- */}   
        <CaixaText 
          value={pais}
          set = {setPais}
          place = "País"
        />
        </View>
        
        {/* ------BOTÃO PARA CADASTRAR------- */}   
        <Button
          style={{backgroundColor: 'white',minWidth: 300, borderRadius: 20, marginHorizontal: 30 , margin:30}}
          labelStyle={{color: '#8A0B14', fontSize: 15}}
          mode="contained" 
          onPress={CadastroBtn}>
            Cadastrar Vinho
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
