import { View, StyleSheet, ImageBackground, Alert,ScrollView} from 'react-native'
import * as wineService from '../database/VinhoService'
import * as mapaService from '../database/MapsService'
import { Button } from 'react-native-paper';
import { useState } from "react";

import CaixaText from "../components/CaixaText";

const backgroundimg = "../images/fundo.png";

export default function UpdateVinho(props) {

  const navigation = props.navigation
  const data = props.route
  const keyVinho = data.params.key
  const uuid4 = data.params.uuid4

  const [form, setForm] = useState({})

  {/* ------BTN FAZ O UPDATE DOS VINHOS------- */}  
  const UpdateBtn = async () => {
    if (form.nome_vinho && form.uva && form.ano && form.vinicola && form.endereco) {
      try {
        await wineService.updateWine(keyVinho, form)
        await mapaService.updateCoord(uuid4, form)

        Alert.alert("Dados Atualizados com Sucesso")
        setForm({})
        navigation.replace("Adega")
      } catch (error) {
        Alert.alert("Erro ao registrar vinho", error)
      }
    } else {
      Alert.alert("Preencha todos os campos!")
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
          place = "Vinicola"

        />

        {/* ------CAIXA DO ENDEREÇO------- */}   
        <CaixaText 
          value={form.endereco}
          set = {(value) => setForm(Object.assign({}, form, { endereco: value }))}
          place = "Endereço"
        />
        </View>
        
        {/* ------BOTÃO PARA CADASTRAR------- */}   
        <Button
          style={{backgroundColor: 'white',minWidth: 300, borderRadius: 20, marginHorizontal: 30 , margin:30}}
          labelStyle={{color: '#8A0B14', fontSize: 15}}
          mode="contained" 
          onPress={UpdateBtn}>
            Atualizar Vinho
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
