import { View, StyleSheet, ImageBackground, Alert,ScrollView} from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import * as wineService from '../services/VinhoService'
import CaixaText from "../components/CaixaText";

const backgroundimg = "../images/fundo.png";

export default function AddVinho(props) {

  const navigation = props.navigation
  const userInfo = props.route.params

  const [form, setForm] = useState({})

  const CadastroBtn = async () => {
    form.email = userInfo.email
    console.log("Form: ", form)
    try {
      let dbRetorno = await wineService.createWine(form)
      Alert.alert(retorno)
      setForm({})
      navigation.replace("Adega", form)
    } catch (error) {
      Alert.alert("Erro ao registrar usuario", error, error.message)
    }
  }
  

return (
    <View style={styles.container}>
      {/* ------IMAGENS DE BACKGROUND------- */}  
      <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
      
      <ScrollView>  
      <View style={{marginTop:60}}>
        {/* ------CAIXA DE NOME DO VINHO------- */} 
        <CaixaText 
          value={form.nome_vinho}
          set = {(value) => setForm(Object.assign({}, form, { nome_vinho: value }))}
          place = "Nome do Vinho"
        />
        {/* ------CAIXA DE NOME DA UVA------- */}     
        <CaixaText 
          value={form.uva}
          set = {(value) => setForm(Object.assign({}, form, { uva: value }))}
          place = "Nome da Uva"
        />
        {/* ------CAIXA ANO------- */}     
        <CaixaText 
          value={form.ano}
          set = {(value) => setForm(Object.assign({}, form, { ano: value }))}
          place = "Ano Fabricação"
        />
        {/* ------CAIXA DA VINICOLA------- */}   
        <CaixaText 
          value={form.vinicola}
          set = {(value) => setForm(Object.assign({}, form, { vinicola: value }))}
          place = "Endereço Vinicola"

        />
        {/* ------CAIXA DO PAIS------- */}   
        <CaixaText 
          value={form.pais}
          set = {(value) => setForm(Object.assign({}, form, { pais: value }))}
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
