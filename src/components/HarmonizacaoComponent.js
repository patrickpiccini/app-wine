import { View, Text, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

export default function HarmonizacaoComponent(props) {

    const data = props.dados

    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [modalVisible, setModalVisible] = useState(false);

    useLayoutEffect(() => {
        setDescricao(data.descricao)
        setNome(data.nome)

    }, [])

  return (
         <TouchableOpacity onPress={ () =>{setModalVisible(!modalVisible)}}>
            {modalVisible == false ?
            <View style={{backgroundColor:'#8A0B14', flexDirection: 'row' ,maxWidth:300, maxHeight:100, marginBottom:25, borderRadius:25}}>
                <View style={{paddingBottom:22, paddingTop:10, paddingHorizontal:20}}>
                
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>Uva: </Text>
                    <Text style={{color:'white', fontSize:20}}>{nome}</Text>
                    <Text style={{ flex:1,textAlign:'right',fontSize:20, color:'white'}}>▶</Text>
                    
                    </View>

                    <View style={{flexDirection:'column', maxHeight:32}}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Harmonização: </Text>
                    <Text style={{color:'white', fontSize:15, textAlign: 'justify'}}>{descricao}</Text>
                </View>
            </View>


            </View>
            :
            <View style={{backgroundColor:'#8A0B14', flexDirection: 'row' ,width:300, maxHeight:500, marginBottom:25,borderRadius:25}}>
                <View style={{paddingBottom:15, paddingTop:10, paddingHorizontal:20}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>Uva: </Text>
                    <Text style={{color:'white', fontSize:20, textAlign: 'justify'}}>{nome}</Text>
                    <Text style={{ flex:1,textAlign:'right',fontSize:20, color:'white'}}>▼</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Harmonização: </Text> 
                    <Text style={{color:'white', fontSize:15, textAlign: 'justify'}}>{descricao}</Text>
                </View>

                </View>


            </View>
            }
        </TouchableOpacity>
  )
}